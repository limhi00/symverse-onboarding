import React, {useEffect, useState} from "react";
import axios from "axios";
import {PostProps} from "@/src/pages";

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

export const useMainHook = () => {

    const [searchKey, setSearchKey] = useState<SearchKey>('title_like');
    const [searchValue, setSearchValue] = useState<string>('');
    const [resultPosts, setResultPosts] = useState<PostProps[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [height, setHeight] = useState<number>(0);

    // url queryString
    // const queryParams = (data: StringMap[]) => {
    //     const result: StringMap = {};
    //     data.forEach(a => {
    //         result[a.key] = a.value;
    //     })
    //     console.log('queryParams: ', result)
    //     return result;
    // }
    // const objectToQueryString = (obj: PostCondition) => {
    //     const params = new URLSearchParams();
    //     const hasOwnProperty = Object.prototype.hasOwnProperty;
    //     //
    //     // let paramsData: StringMap[] = [];
    //     // if (searchKeyword == "") {
    //     //     paramsData = [{'_page': pageNum.toString()}, {'_limit': pageEntries.toString()}];
    //     // } else {
    //     //     paramsData = [{[searchSelect]: searchKeyword}, {'_page': pageNum.toString()}, {'_limit': pageEntries.toString()}];
    //     // }
    //     // const obj = queryParams(paramsData);
    //
    //     for (const key in obj) {
    //         if (hasOwnProperty.call(obj, key)) {
    //             params.append(key, obj[key]);
    //         }
    //     }
    //     console.log('params.toString(): ', params.toString())
    //     return params.toString();
    // };

    const getPosts = async (condition = {}) => {
        // TODO: 1. condition에서 page, limit 까지만 쿼리스트링 생성
        // TODO: 2. searchKeyword, searchValue 직접 추출해서 쿼리스트링 뒤에 덧붙이기

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
    // useEffect(() => {
    //     getPosts({...defaultCondition, [searchKey]: searchValue}).then(addedPosts => {
    //         setResultPosts([...resultPosts, ...addedPosts]);
    //     })
    //
    // }, [pageNum]);


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