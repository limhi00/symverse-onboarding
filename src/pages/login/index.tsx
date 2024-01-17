import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

import Layout from "@/src/components/layout/Layout";
import {LoginButton, LoginInput, InputDiv, OuterDiv, MainDiv, InnerDiv} from "@/src/styles/loginStyle";
import {useLoginHook} from "@/src/hooks/useLoginHook";


const user = {
    accessUserId: "limhi",
    accessUserPwd: "1111",
    accessUserName: "lim"
}

const LoginPage = () => {

    const router = useRouter();
    const [inputId, setInputId] = useState<string>('');
    const [inputPwd, setInputPwd] = useState<string>('');

    const {login} = useLoginHook()

    const saveUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputId(event.target.value);
    }
    const saveUserPwd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPwd(event.target.value);
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputId == user.accessUserId && inputPwd == user.accessUserPwd) {
            login(user.accessUserId, user.accessUserName);
            router.back();
            return false;
        } else {
            // sign in denied
            router.reload();
        }
    }
    return (
        <MainDiv onSubmit={handleLogin}>
            <OuterDiv>
                <InnerDiv>
                    <InputDiv>
                        <LoginInput type="text" placeholder="ID" value={inputId} onChange={saveUserId}/>
                        <LoginInput type="password" placeholder="PWD" value={inputPwd} onChange={saveUserPwd}/>
                    </InputDiv>
                    <LoginButton type="submit">login</LoginButton>
                </InnerDiv>
            </OuterDiv>
        </MainDiv>
    )
}

export default LoginPage;