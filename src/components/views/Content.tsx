import React, {useEffect, useState} from "react";
import axios from "axios";

import ListComponent from "@/src/components/features/List";
import SearchInput from "@/src/components/atoms/SearchInput";

type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const ContentComponent = () => {

    const [posts, setPosts] = useState<PostProps[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [result, setResult] = useState<PostProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:3001/posts');
            setPosts(response.data);
        }
        getData();
    }, []);

    useEffect(() => {
        const filteredPosts = posts.filter((item) => item.title.includes(searchKeyword));
        setResult(filteredPosts);
    }, [searchKeyword, posts]);

    return (
        <div>
            <SearchInput />
            <ListComponent subTitle={ "Contents" } posts={ result } />
        </div>
    );
};

export default ContentComponent;