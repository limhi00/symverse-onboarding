import React from "react";
import Input, {InputProps} from "@/src/components/atoms/inputs/Input";
import Button from "@/src/components/atoms/buttons/Button";
import Select, {SelectProps} from "@/src/components/atoms/selects/Select";

import {SearchForm} from "@/src/styles/contentStyle";

export type SearchFormProps = {
    onSubmit: React.FormEventHandler;
    selectProps: SelectProps;
    inputProps: InputProps;
}

const Search = ({onSubmit, selectProps, inputProps}: SearchFormProps) => {

    /// <SearchForm
    //      onSubmit={handleSearchAction}>
    //      <Select options={options} onChange={handleSearchSelect}></Select>
    //      <Input type={"text"} defaultValue={searchValue} placeholder={"검색어를 입력하세요"}
    //             onChange={handleSearchKeyword}/>
    //      <Button type={"submit"} innerText={"search"}/>
    //  </SearchForm>

    return (
        <div>
            <SearchForm onSubmit={onSubmit}>
                <Select options={selectProps.options} onChange={selectProps.onChange}></Select>
                <Input type={"text"} defaultValue={inputProps.defaultValue} placeholder={"검색어를 입력하세요"}
                       onChange={inputProps.onChange}/>
                <Button type={"submit"} innerText={"search"}/>
            </SearchForm>
        </div>
    )
}

export default Search;