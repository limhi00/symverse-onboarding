import React, {useEffect, useState} from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import {useAtom} from "jotai";
import {accessTokenAtom} from "@/src/stories/auth";

export const useLoginHook = () => {

    const [token, setToken] = useAtom(accessTokenAtom);

    const authTokenSave = (userId: string, userName: string) => {

        const secret = "secret_key"; //비밀 키 선언
        try {
            const accessToken = jwt.sign(
                {
                    memberId: userId, //payload에 담을 id
                    memberName: userName, //payload에 담을 name
                },
                secret,
                {
                    expiresIn: "30m", //토큰 유효 시간
                },
                (err, token) => {
                    console.log('accessToken = '+token, err);
                    setToken(token);
                }
            );
        } catch (err) {
            console.log(err);
        }
    }
    // checkAccessToken: () => {
    //
    // }
    return {
        login: authTokenSave,
        accessToken: () => {
            console.log(token)
            return token
        },
    }
}
