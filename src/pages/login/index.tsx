import React, { useEffect, useState } from "react";

const Index = () => {

    const [idValue, setIdValue] = useState<string>('');
    const [pwdValue, setPwdValue] = useState<string>('');

    const saveUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdValue(event.target.value);
    };
    const saveUserPwd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwdValue(event.target.value);
    };

    const loginCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(idValue == "limhi" && pwdValue == "1111") {

            // document.cookie
            window.location.href = "/";
        } else {
            window.location.reload();
        }
    }

    return (
        <div
            css={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                height: "1200px",
                display: "grid"
            }}
        >
            <div
                css={{
                    width: "500px",
                    display: "flex",
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
                           defaultValue={idValue}
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
                           defaultValue={pwdValue}
                           onChange={saveUserPwd}
                    />
                </div>
                <div>
                    <button type="button"
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
                            onClick={ loginCheck }
                    >login</button>
                </div>
            </div>
        </div>
    )
}

export default Index;