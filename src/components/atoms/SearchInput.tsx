import React, {useState} from "react";
import { css } from "@emotion/react";

import Input from "@/src/components/features/Input";
import Button from "@/src/components/features/Button";

const SearchInput = () => {

    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    };

    return (
        <div
            css={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                margin: "50px auto"
            }}
        >
            <Input type={ "text" } defaultValue={ searchKeyword } placeholder={ "검색어를 입력하세요" } onChange={ handleSearch }/>
            {/*<Button innerText={ "search" } />*/}
        </div>
    );
}

export default SearchInput;