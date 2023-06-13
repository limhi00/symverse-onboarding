import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useAtom} from "jotai";
import {accessTokenAtom} from "@/src/stories/auth";

const HeaderComponent = () => {

    const [loginStatus, setLoginStatus] = useState<string>('login');
    const [authToken, setAuthToken] = useAtom(accessTokenAtom);

    useEffect(() => {
        const handleLoginStatus = () => {

        }
    }, []);


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
                    alignItems: "end",
                    marginBottom: "10px",
                    cursor: "pointer"
                }}
            >
                <Link href="/login" css={{textDecoration: "none"}}>{ loginStatus }</Link>
            </div>
        </div>
    );
}

export default HeaderComponent;