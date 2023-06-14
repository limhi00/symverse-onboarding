import React, {useEffect} from "react";
import {useRouter} from "next/router";
import { useLoginHook } from "@/src/hooks/useLoginHook";

type ListProps = {
    posts: PostProps[];
}
type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const ListComponent = ({ posts }: ListProps) => {

    const router = useRouter();
    const { accessToken } = useLoginHook();

    const detailView = (postId: number) => {
        if (!accessToken()) {
            router.push('/login');
        } else {
            router.push(`/detail/${postId}`);
        }
    }

    return (
        <div
            css={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                color: "#444",
                display: "block",
                textAlign: "center",
                margin: "100px auto"
            }}
        >
            <ul
                css={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "30px",
                    margin: "70px auto",
                    padding: "0"
                }}
            >
                {posts.map(( post ) => (
                    <li key={post.id} onClick={ () => detailView(post.id) }>
                        <img src={"https://data1.pokemonkorea.co.kr/newdata/pokedex/full/0"+post.id+"01.png"} width="300px" height="300px"/>
                        <h4>{post.id}. {post.title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListComponent;