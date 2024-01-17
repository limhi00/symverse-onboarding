import React, {useEffect} from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {useLoginHook} from "@/src/hooks/useLoginHook";

type PostsProps = {
    posts: PostProps[];
}
type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const PostDiv = styled.div`
  display: block;
  text-align: center;
  margin: 100px auto;
`

const PostUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 70px auto;
  padding: 0;
`

const Post = ({posts}: PostsProps) => {

    const router = useRouter();
    const {accessToken} = useLoginHook();

    const detailView = (postId: number) => {
        if (!accessToken()) {
            router.push('/login');
        } else {
            router.push(`/pokemon/detail/${postId}`);
        }
    }

    return (
        <PostDiv>
            <PostUl>
                {posts.map((post) => (
                    <li key={post.id} onClick={() => detailView(post.id)}>
                        <img src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/full/0${post.id}01.png`}
                             width="300px" height="300px"/>
                        <h4>{post.id}. {post.title}</h4>
                    </li>
                ))}
            </PostUl>
        </PostDiv>
    );
}

export default Post;