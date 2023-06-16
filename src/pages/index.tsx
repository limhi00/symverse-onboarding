import React, {useEffect, useState} from "react";

import Layout from "@/src/components/layout/Layout";
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

    const {
        posts,
        searchValue,
        handleSearchSelect,
        handleSearchKeyword,
        handleSearchAction
    } = useMainHook();
    const options = [{'value': 'title_like', 'innerText': '제목'}, {'value': 'description_like', 'innerText': '내용'}];

    return (
        <Layout>
            <div>
                <form
                    css={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        margin: "50px auto"
                    }}
                    onSubmit={handleSearchAction}>
                    <Select options={options} onChange={handleSearchSelect}></Select>
                    <Input type={"text"} defaultValue={searchValue} placeholder={"검색어를 입력하세요"}
                           onChange={handleSearchKeyword}/>
                    <Button type={"submit"} innerText={"search"}/>
                </form>
            </div>
            <div>
                <h1 css={{textAlign: "center"}}>Contents</h1>
                <div id={"listContainer"}>
                    <ListComponent posts={posts}/>
                </div>
            </div>
        </Layout>
    );
}

export default MainPage;