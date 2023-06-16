import React from "react";
import styled from "@emotion/styled";

type InputProps = {
    type: string;
    defaultValue: string | number;
    placeholder: string;
    onChange: React.ChangeEventHandler;
}

const StyleInput = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #fff;
  color: #003d94;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  width: 30%;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  padding: 7px 10px;
`

const Input = ( { type, defaultValue, placeholder, onChange }: InputProps ) => {

    return (
        <StyleInput type={ type }
            placeholder={ placeholder }
            defaultValue={ defaultValue }
            onChange={ onChange }
        />
    );
}

export default Input;