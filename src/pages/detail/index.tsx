import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import axios from "axios";

import HeaderComponent from "@/src/components/layout/Header";
import FooterComponent from "@/src/components/layout/Footer";
import Button from "@/src/components/features/Button";

type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
};

const DetailComponent = () => {

    const [post, setPost] = useState<PostProps>({
        id: 0,
        img: "",
        title: "",
        description: "",
    });
    const [count, setCount] = useState<number>(0);

    const router = useRouter();
    useEffect(() => {
        const getPost = async () => {
            const postId = router.asPath.split("id=")[1];
            console.log("post id: " + postId);
            const url = `http://localhost:3001/posts?id=${postId}`;
            const response = await axios.get(url);
            setPost(response.data[0]);
        };
        getPost();
    }, [router.asPath]);

    const handleCount = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCount(count+1);
    }

    return (
        <div>
            <HeaderComponent />
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
                    <h1>{ post.title }</h1>
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan={2}>
                                <img src={ post.img } width="300px" height="300px" alt="post" />
                            </td>
                        </tr>
                        <tr>
                            <td>{ post.description }</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div css={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }} ><Button innerText={ "ㅋ" } onClick={ handleCount } /> <span>{ count }</span></div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default DetailComponent;
