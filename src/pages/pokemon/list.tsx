import React, {Suspense, useEffect, useState} from "react";

import ListComponent from "@/src/components/views/pokemon/List";
import {InputProps} from "@/src/components/atoms/inputs/Input";
import {SelectProps} from "@/src/components/atoms/selects/Select";
import {usePostHook} from "@/src/hooks/usePostHook";
import {Container} from "@/src/styles/contentStyle";
import Search from "@/src/components/features/Search";

export type PostProps = {
    id: number;
    img: string;
    title: string;
    description: string;
}

const PokemonListPage = () => {

    return (
        <Suspense fallback={<div>...loading</div>}>
            <PokemonList/>
        </Suspense>
    );
}

const PokemonList = () => {

    const {
        posts,
        searchValue,
        handleSearchSelect,
        handleSearchKeyword,
        handleSearchAction
    } = usePostHook();

    const selectProps: SelectProps = {
        options: [{'value': 'title_like', 'innerText': '제목'}, {'value': 'description_like', 'innerText': '내용'}],
        onChange: handleSearchSelect
    };

    const inputProps: InputProps = {
        defaultValue: searchValue,
        onChange: handleSearchKeyword
    };

    return (
        <Container>
            <h1 css={{textAlign: "center", margin: "20px 0"}}>Pokémon List</h1>
            <Search onSubmit={handleSearchAction} selectProps={selectProps}
                    inputProps={inputProps} />
            <div>
                <div id={"listContainer"}>
                    <ListComponent posts={posts}/>
                </div>
            </div>
        </Container>
    )
}

export default PokemonListPage;