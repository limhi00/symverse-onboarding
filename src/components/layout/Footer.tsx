import React from "react";
import { css } from "@emotion/react";

const FooterComponent = () => {

    return (
        <div
            css={{
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                backgroundColor: "#dfdaee",
                color: "#35338d",
                fontWeight: "100",
                padding: "10px 50px",
                textAlign: "end",
                appearance: "none",
                userSelect: "none",
                height: "100%",
                bottom: "0"
            }}
        >
            <p>writer: limhi</p>
        </div>
    )
}

export default FooterComponent;