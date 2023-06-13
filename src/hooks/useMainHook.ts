import React, {useEffect, useState} from "react";
import axios from "axios";
import { PostProps } from "@/src/pages";


export const useMainHook = () => {

    const [defaultPosts, setDefaultPosts] = useState<PostProps[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [resultPosts, setResultPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const getDefault = async () => {
            const response = await axios.get('http://localhost:3001/posts');
            setDefaultPosts(response.data);
            setResultPosts(response.data);
        }
        getDefault();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    };

    const handleSearchAction = (event: React.MouseEvent<HTMLButtonElement>) => {
        const filteredPosts = defaultPosts.filter((item) => item.title.includes(searchKeyword) || item.description.includes(searchKeyword));
        setResultPosts(filteredPosts);
    }

    const handleRefresh = (event: React.MouseEvent<HTMLButtonElement>) => {
        setResultPosts(defaultPosts);
    }

    return {
        posts: resultPosts,
        searchKeyword,
        handleSearch,
        handleSearchAction,
        handleRefresh
    }

}