import React from "react";
import { css } from "@emotion/react";

import Button from "@/src/components/features/Button";

type InputProps = {
    type: string;
    defaultValue: string | number;
    placeholder: string;
    onChange: React.ChangeEventHandler;
}

const Input = ( { type, defaultValue, placeholder, onChange }: InputProps ) => {
    return (
        <input type={ type }
            css={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                borderRadius: "6px",
                border: "1px solid #bec6e8",
                width: "300px",
                backgroundColor: "#fff",
                color: "#444",
                fontWeight: "300",
                fontSize: "14px",
                textAlign: "center",
                padding: "7px 10px"
            }}
            placeholder={ placeholder }
            defaultValue={ defaultValue }
            onChange={ onChange }
        />
    );
}

export default Input;