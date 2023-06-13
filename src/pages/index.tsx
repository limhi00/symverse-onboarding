import React, {useEffect, useState} from "react";
import axios from "axios";

import HeaderComponent from "@/src/components/layout/Header";
import FooterComponent from "@/src/components/layout/Footer";
import ListComponent from "@/src/components/views/List";
import Input from "@/src/components/atoms/Input";
import Select from "@/src/components/atoms/Select";
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
            const response = await axios.get('${process.env.NEXT_PUBLIC_API_HOST}/posts');
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

    const {posts, searchKeyword, handleSearchSelect, handleSearchKeyword, handleSearchAction, handleSearchRefresh, handleScroll} = useMainHook();
    const options = [{'value': 'title', 'innerText': '제목'}, {'value': 'des', 'innerText': '내용'}];

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
                <Select options={ options } onChange={ handleSearchSelect }></Select>
                <Input type={ "text" } defaultValue={ searchKeyword } placeholder={ "검색어를 입력하세요" } onChange={ handleSearchKeyword } />
                <Button innerText={ "search" } onClick={ handleSearchAction } />
                <Button innerText={ "🔄" } onClick={ handleSearchRefresh } />
            </div>
            <div onScroll={ handleScroll }>
                <ListComponent subTitle={ "Contents" } posts={ posts }/>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default MainPage;