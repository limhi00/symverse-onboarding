import React, {MouseEvent, useEffect, useState} from "react";
import Link from "next/link";
import {useAtom} from "jotai";
import {accessTokenAtom} from "@/src/stories/auth";
import {useRouter} from "next/router";

type loginStatus = 'login' | 'logout';

const HeaderComponent = () => {

    const router = useRouter();
    const [loginStatus, setLoginStatus] = useState<loginStatus>('login');
    const [authToken, setAuthToken] = useAtom(accessTokenAtom);

    useEffect(() => {
        const handleLoginStatus = () => {
            if (authToken != undefined) {
                setLoginStatus('logout');
            }
        }
        handleLoginStatus();
    }, []);

    const handleLogout = (event: MouseEvent<HTMLElement>) => {
        if (loginStatus == 'logout') {
            setAuthToken(undefined);
            setLoginStatus('login');
            router.reload();
        } else {
            router.push('/login');
        }
    }


    return (
        <div
            css={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                backgroundColor: "#dfdaee",
                color: "#35338d",
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 50px",
                userSelect: "none"
            }}
        >
            <div
                css={{
                    display: "flex",
                    fontSize: "60px",
                    fontWeight: "800",
                    cursor: "pointer"
                }}
            >
                <Link href="/" css={{textDecoration: "none"}}><div>👾 Yee</div></Link>
            </div>
            <div
                css={{
                    display: "flex",
                    alignItems: "end"
                }}
            >
                <p css={{ cursor: "pointer" }} onClick={ handleLogout }>{ loginStatus }</p>
            </div>
        </div>
    );
}

export default HeaderComponent;