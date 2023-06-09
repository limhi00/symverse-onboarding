import React from "react";
import { css } from "@emotion/react";

type ListProps = {
    subTitle: string;
    posts: PostProps[];
}
type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const ListComponent = ({ subTitle, posts }: ListProps) => {

    const detailView = (postId: number) => {
        window.location.href = "/detail?id="+postId.toString();
    }

    return (
        <div
            css={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                color: "#444",
                display: "block",
                width: "1260px",
                textAlign: "center",
                margin: "100px auto"
            }}
        >
            <h1>{ subTitle }</h1>
            <ul
                css={{
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    margin: "70px auto",
                    padding: "0"
                }}
            >
                {posts.map(( post ) => (
                    <li key={post.id} onClick={ () => detailView(post.id) }>
                        <img src={post.img} width="400px" height="400px"/>
                        <h4>{post.title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListComponent;