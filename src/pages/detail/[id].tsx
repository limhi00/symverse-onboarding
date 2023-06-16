import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

import Layout from "@/src/components/layout/Layout";

type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
};

const DetailPage = () => {

    const [post, setPost] = useState<PostProps>({
        id: 0,
        img: "",
        title: "",
        description: "",
    });
    const router = useRouter();

    useEffect(() => {
        const getPost = async () => {
            const postId = router.query.id;
            // console.log(router)
            // console.log("post id: " + postId);
            const url = `${process.env.NEXT_PUBLIC_API_HOST}/posts?id=${postId}`;
            const response = await axios.get(url);
            setPost(response.data[0]);
        };
        getPost();
    }, [router.query]);

    return (
        <Layout>
            <div
                css={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    fontSize: "18px",
                    textAlign: "center",
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "1000px"
                }}
            >
                <div>
                    <h1>{post.title}</h1>
                </div>
                <div css={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan={2}>
                                <img src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/full/0${post.id}01.png`}
                                     width="300px" height="300px" alt="post"/>
                            </td>
                        </tr>
                        <tr>
                            <td>{post.description} 타입</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div css={{display: "flex", justifyContent: "center", alignItems: "end"}}>
                    <h4 onClick={router.back}
                        css={{textDecoration: "none", fontWeight: "900", cursor: "pointer"}}>Home</h4>
                </div>
            </div>
        </Layout>
    );
};

export default DetailPage;
