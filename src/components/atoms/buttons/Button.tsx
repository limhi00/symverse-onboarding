import React from "react";
import styled from "@emotion/styled";

export type ButtonProps = {
    type: "button" | "submit" | "reset" | undefined;
    innerText: string;
    onClick?: React.MouseEventHandler;
}

const DefaultButton = styled.button`
  background-color: #f0f5f9;
  color: #52616a;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  appearance: none;
  user-select: none;
`

const Button = ({type, innerText, onClick}: ButtonProps) => {

    return (
        <DefaultButton
            type={type}
            onClick={onClick}
        >
            {innerText}
        </DefaultButton>
    );
}

export default Button;