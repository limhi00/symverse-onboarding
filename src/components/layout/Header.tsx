import React, {useEffect, useState} from "react";
// import { cookies } from "next/headers";
import { css } from "@emotion/react";
import Link from "next/link";

const HeaderComponent = () => {

    const [checkLogin, setCheckLogin] = useState<string>('Login');

    // useEffect(() => {
    //     const checkCookie = () => {
    //         const cookieList = cookies();
    //         const cookie: string = cookieList.get('signInInfo') == undefined ? '' : cookieList.get('signInInfo');
    //         if(cookie != '') {
    //             setCheckLogin('Logout');
    //         }
    //     }
    //     checkCookie();
    // }, []);


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
                <Link href="/login" css={{textDecoration: "none"}}>{ checkLogin }</Link>
            </div>
        </div>
    );
}

export default HeaderComponent;