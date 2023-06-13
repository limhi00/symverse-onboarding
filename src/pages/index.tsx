import React, {useEffect, useState} from "react";
import axios from "axios";

import HeaderComponent from "@/src/components/layout/Header";
import FooterComponent from "@/src/components/layout/Footer";
import ListComponent from "@/src/components/views/List";
import Input from "@/src/components/atoms/Input";
import Button from "@/src/components/atoms/Button";
import {useMainHook} from "@/src/hooks/useMainHook";

export type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const MainPage = () => {

    /*const [posts, setPosts] = useState<PostProps[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [result, setResult] = useState<PostProps[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:3001/posts');
            setPosts(response.data);
            setResult(response.data);
        }
        getData();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
        console.log(event.target.value);
    };

    const handleSearchAction = (event: React.MouseEvent<HTMLButtonElement>) => {
        const filteredPosts = posts.filter((item) => item.title.includes(searchKeyword));
        setResult(filteredPosts);
    }*/
    const {posts, searchKeyword, handleSearch, handleSearchAction, handleRefresh} = useMainHook();

    return (
        <div>
            <HeaderComponent/>
            <div
                css={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    margin: "50px auto"
                }}
            >
                <Input type={ "text" } defaultValue={ searchKeyword } placeholder={ "검색어를 입력하세요" } onChange={ handleSearch } />
                <Button innerText={ "search" } onClick={ handleSearchAction } />
                <Button innerText={ "🔄" } onClick={ handleRefresh } />
            </div>
            <ListComponent subTitle={ "Contents" } posts={ posts }/>
            <FooterComponent/>
        </div>
    );
}

export default MainPage;