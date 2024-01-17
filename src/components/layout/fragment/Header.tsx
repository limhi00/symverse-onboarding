import React, {MouseEvent, useEffect, useState} from "react";
import Link from "next/link";
import {useAtom} from "jotai";
import {accessTokenAtom} from "@/src/stores/login/auth";
import {useRouter} from "next/router";
import {GnbDiv, GnbLi, GnbUl, HeaderDiv, LogoDiv} from "@/src/styles/layoutStyle";

type LoginStatus = 'login' | 'logout';

const Header = () => {

    const router = useRouter();
    const [loginStatus, setLoginStatus] = useState<LoginStatus>('login');
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
        <HeaderDiv>
            <GnbDiv>
                <LogoDiv>
                    <Link href="/">
                        <img src="/star.jpg" width="80px" />
                    </Link>
                </LogoDiv>
                <GnbUl>
                    <GnbLi><Link href="/pokemon/list">pokémon</Link></GnbLi>
                    <GnbLi><Link href="/journal/list">Journals</Link></GnbLi>
                    <GnbLi onClick={ handleLogout }><Link href="#">{ loginStatus }</Link></GnbLi>
                </GnbUl>
            </GnbDiv>
        </HeaderDiv>
    );
}

export default Header;