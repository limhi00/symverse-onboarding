import React, {useEffect, useState} from "react";
import axios from "axios";
import { PostProps } from "@/src/pages";


export const useMainHook = () => {

    const [defaultPosts, setDefaultPosts] = useState<PostProps[]>([]);
    const [searchSelect, setSearchSelect] = useState<string>('');
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchUrl, setSearchUrl] = useState<string>('');
    const [resultPosts, setResultPosts] = useState<PostProps[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);
    const [pageEntries, setPageEntries] = useState<number>(6);

    useEffect(() => {
        const getDefault = async () => {
            const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?_page=${pageNum}&_limit=${pageEntries}`;
            const response = await axios.get(url);
            // const response = await axios.get('${process.env.NEXT_PUBLIC_API_HOST}/posts');
            setDefaultPosts(response.data);
            // setResultPosts(response.data);
        }
        getDefault();
    }, []);

    const handleSearchSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchSelect(event.target.value);
    }

    const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    };

    const handleSearchAction = async (event: React.MouseEvent<HTMLButtonElement>) => {

        if (searchSelect == 'title') {
            setSearchUrl(`${process.env.NEXT_PUBLIC_API_HOST}/posts?title_like=${searchKeyword}`);
        } else if(searchSelect == 'des') {
            setSearchUrl(`${process.env.NEXT_PUBLIC_API_HOST}/posts?description_like=${searchKeyword}`);
        } else {
            alert('검색 카테고리를 선택해주세요.');
        }

        const response = await axios.get(searchUrl);
        // const filteredPosts = defaultPosts.filter((item) => item.title.includes(searchKeyword) || item.description.includes(searchKeyword));
        const filteredPosts = response.data;
        setResultPosts(filteredPosts);
        console.log('resultPost set ====> ' + resultPosts);
    }

    const handleSearchRefresh = (event: React.MouseEvent<HTMLButtonElement>) => {
        setResultPosts(defaultPosts);
    }

    // infinite scroll
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {

    }

    useEffect(() => {
        const getNextPage = () => {
        }
    }, [pageNum]);

    return {
        posts: resultPosts,
        searchKeyword,
        handleSearchSelect,
        handleSearchKeyword,
        handleSearchAction,
        handleSearchRefresh,
        handleScroll
    }

}