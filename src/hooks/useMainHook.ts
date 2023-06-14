import React, {useEffect, useState} from "react";
import axios from "axios";
import {PostProps} from "@/src/pages";
import {throttle} from "lodash";

type PagingQuery = {
    [key: string]: any;
    _page: number;
    _limit: number;
}

type SearchSelect = 'title' | 'description'

const searchKey = {
    'title': 'title_like',
    'description': 'description_like',
}

export const useMainHook = () => {

    const [defaultPosts, setDefaultPosts] = useState<PostProps[]>([]);
    const [searchSelect, setSearchSelect] = useState<SearchSelect>('title');
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [resultPosts, setResultPosts] = useState<PostProps[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [pageEntries, setPageEntries] = useState<number>(20);

    const [height, setHeight] = useState<number>(0);

    // url queryString
    const pagingQueryParams = {
        _page: pageNum,
        _limit: pageEntries
    }
    const objectToQueryString = (obj: PagingQuery) => {

        const params = new URLSearchParams();
        const hasOwnProperty = Object.prototype.hasOwnProperty;

        for (const key in pagingQueryParams) {
            if (hasOwnProperty.call(obj, key)) {
                params.append(key, obj[key]);
            }
        }

        return params.toString();
    };

    useEffect(() => {
        const getDefault = async () => {
            const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?${objectToQueryString(pagingQueryParams)}`;
            const response = await axios.get(url);
            // const response = await axios.get('${process.env.NEXT_PUBLIC_API_HOST}/posts');
            setDefaultPosts(response.data);
            setResultPosts(response.data);
        }
        getDefault();
    }, []);

    // scroll 감지
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setHeight(window.innerHeight + document.documentElement.scrollTop)
        });
    }, []);

    useEffect(() => {
        if (height > 0) {
            throttleOnRendering()
        }
    }, [height])


    // filter search
    const handleSearchSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchSelect(event.target.value as SearchSelect);
    }

    const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    };

    const handleSearchAction = async (event: React.MouseEvent<HTMLButtonElement>) => {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_HOST}/posts?${searchKey[searchSelect]}=${searchKeyword}&${objectToQueryString(pagingQueryParams)}`
        const response = await axios.get(apiUrl);
        // const filteredPosts = defaultPosts.filter((item) => item.title.includes(searchKeyword) || item.description.includes(searchKeyword));
        const filteredPosts = response.data;
        setResultPosts(filteredPosts);
    }

    const handleSearchRefresh = (event: React.MouseEvent<HTMLButtonElement>) => {
        setResultPosts(defaultPosts);
    }

    // rAF 최적화
    const throttleOnRendering = () => {
        return getListByNextPage(pageNum);
    }

    const getListByNextPage = async (currentPage: number) => {
        if (height >= document.documentElement.offsetHeight) {
            const nextPage = currentPage + 1
            // es6 문법
            const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?${objectToQueryString({
                ...pagingQueryParams,
                _page: nextPage
            })}`;
            const response = await axios.get(url);
            setPageNum(nextPage);
            setResultPosts([...resultPosts, ...response.data]);
        }
    }


    return {
        posts: resultPosts,
        searchKeyword,
        handleSearchSelect,
        handleSearchKeyword,
        handleSearchAction,
        handleSearchRefresh
    }

}