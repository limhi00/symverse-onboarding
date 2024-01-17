import React, {useEffect, useState} from "react";
import axios from "axios";
import {PostProps} from "@/src/pages/pokemon/list";

type SearchKey = 'title_like' | 'description_like'

interface PostCondition {
    _page?: number
    _limit?: number
    searchParams?: string
}

const defaultCondition: PostCondition = {
    _page: 1,
    _limit: 20,
}

export const usePostHook = () => {

    const [searchKey, setSearchKey] = useState<SearchKey>('title_like');
    const [searchValue, setSearchValue] = useState<string>('');
    const [resultPosts, setResultPosts] = useState<PostProps[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [height, setHeight] = useState<number>(0);

    const getPosts = async (condition = {}) => {

        const queryString = new URLSearchParams(condition).toString();
        console.log('queryString: ', queryString)
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/posts?${queryString}`);
        const resultData: PostProps[] = response.data;
        console.log('resultData(posts): ', resultData)
        // setResultPosts([...resultPosts, ...response.data]);
        return resultData;
    }

    // getList first
    useEffect(() => {
        getPosts(defaultCondition).then(posts => {
            setResultPosts([...posts]);
        })
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
        setSearchKey(event.target.value as SearchKey);
    }

    const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        console.log('searchKeyword ==> ' + searchValue);
    };
    const handleSearchAction = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const filterPosts = await getPosts({...defaultCondition, [searchKey]: searchValue});
        setResultPosts(filterPosts)
    }


    //infinite scroll
    const throttleOnRendering = () => {
        return getListByNextPage(pageNum);
    }
    const getListByNextPage = async (currentPage: number) => {
        if (height >= document.documentElement.offsetHeight) {
            const nextPage = currentPage + 1
            const addedPosts = await getPosts({...defaultCondition, _page: nextPage, [searchKey]: searchValue})
            setResultPosts([...resultPosts, ...addedPosts]);
            setPageNum(nextPage);
        }
    }


    return {
        posts: resultPosts,
        searchValue,
        handleSearchSelect,
        handleSearchKeyword,
        handleSearchAction
    }

}