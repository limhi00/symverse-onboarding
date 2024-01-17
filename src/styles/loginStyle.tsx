import React from "react";
import styled from "@emotion/styled";

export const LoginButton = styled.button`
  background-color: #f0f5f9;
  color: #52616a;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  height: 82px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  padding: 5px 16px;
  margin: 20px;
`
export const LoginInput = styled.input`
  display: grid;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  width: 90%;
  padding: 10px;
`

export const InputDiv = styled.div`
  display: grid;
  gap: 8px;
  height: 100%;
  margin: auto;
`

export const InnerDiv = styled.div`
  display: flex;
  font-size: 18px;
  Font-weight: 300;
  padding: 40px;
  margin: auto;
  justify-content: center;
  align-items: center;
`

export const OuterDiv = styled.div`
  display: grid;
  width: 500px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 300;
  padding: 40px;
  margin: auto;
  justify-content: center;
  align-items: center;
`

export const MainDiv = styled.form`
  height: 1200px;
  display: grid;
`