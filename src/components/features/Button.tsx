import React from "react";
import { css } from "@emotion/react";

type ButtonProps = {
    innerText: string;
    onClick: React.MouseEventHandler;
}

const Button = ( { innerText, onClick }: ButtonProps ) => {
    return (
        <button type="button"
            css={{
                borderRadius: "6px",
                border: "1px solid rgba(27, 31, 36, 0.15)",
                backgroundColor: "#d8dcf0",
                color: "#003d94",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: "600",
                lineHeight: "20px",
                fontSize: "14px",
                padding: "5px 16px",
                textAlign: "center",
                cursor: "pointer",
                appearance: "none",
                userSelect: "none",
            }}
            onClick={ onClick }
        >
            {innerText}
        </button>
    );
}

export default Button;