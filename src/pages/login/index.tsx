import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

import Layout from "@/src/components/layout/Layout";
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
            router.push('/');
            return false;
        } else {
            // sign in denied
            router.reload();
        }
    }
    return (
        <Layout>
        <form onSubmit={handleLogin}>
            <div
                css={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    height: "1200px",
                    display: "grid"
                }}
            >
                <div css={{
                    display: "grid",
                    width: "500px",
                    border: "1px solid #dfdaee",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    color: "#444",
                    fontSize: "18px",
                    fontWeight: "300",
                    padding: "40px",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div
                        css={{
                            display: "flex",
                            color: "#444",
                            fontSize: "18px",
                            fontWeight: "300",
                            padding: "40px",
                            margin: "auto",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <div>
                            <input type="text"
                                   css={{
                                       display: "grid",
                                       border: "1px solid #35338d",
                                       borderRadius: "5px",
                                       width: "180px",
                                       padding: "10px",
                                       marginBottom: "7px"
                                   }}
                                   placeholder="ID"
                                   value={inputId}
                                   onChange={saveUserId}
                            />
                            <input type="password"
                                   css={{
                                       display: "grid",
                                       border: "1px solid #35338d",
                                       borderRadius: "5px",
                                       width: "180px",
                                       padding: "10px"
                                   }}
                                   placeholder="PWD"
                                   value={inputPwd}
                                   onChange={saveUserPwd}
                            />
                        </div>
                        <div>
                            <button type="submit"
                                    css={{
                                        height: "82px",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(27, 31, 36, 0.15)",
                                        backgroundColor: "#dfdaee",
                                        color: "#35338d",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        padding: "5px 16px",
                                        margin: "20px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        appearance: "none",
                                        userSelect: "none",
                                    }}
                            >login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </Layout>
    )
}

export default LoginPage;