import React from "react";
import styled from "@emotion/styled";

    const LoginButton = styled.button`
      background-color: #dfdaee;
      color: #35338d;
      border-radius: 6px;
      border: 1px solid rgba(27, 31, 36, 0.15);
      height: 82px;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      padding: 5px 16px;
      margin: 20px;
    `
    const LoginInput = styled.input`
      display: grid;
      border-radius: 6px;
      border: 1px solid rgba(27, 31, 36, 0.15);
      width: 90%;
      padding: 10px;
    `

    const InputDiv = styled.div`
      display: grid;
      gap: 8px;
      height: 100%;
      margin: auto;
    `

    const InnerDiv = styled.div`
      display: flex;
      fontSize: 18px;
      fontWeight: 300;
      padding: 40px;
      margin: auto;
      justifyContent: center;
      alignItems: center;
    `

    const OuterDiv = styled.div`
      display: grid;
      width: 500px;
      border: 1px solid #dfdaee;
      borderRadius: 10px;
      backgroundColor: #fff;
      color: #444;
      fontSize: 18px;
      fontWeight: 300;
      padding: 40px;
      margin: auto;
      justifyContent: center;
      alignItems: center;
    `

    const MainDiv = styled.form`
      fontFamily: -apple-system, BlinkMacSystemFont, sans-serif;
      height: 1200px;
      display: grid;
    `
export const LoginStyle = () => {


    return {
        LoginButton,
        LoginInput,
        InputDiv,
        InnerDiv,
        OuterDiv,
        MainDiv,
    }
}