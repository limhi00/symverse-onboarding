import React from "react";

type OptionProps = {
    value: string | number;
    innerText: string;
}
type SelectProps = {
    options: OptionProps[];
    onChange: React.ChangeEventHandler;
}

const Select = ({ options, onChange }: SelectProps) => {

    return (
        <select
            css={{
                borderRadius: "6px",
                border: "1px solid rgba(27, 31, 36, 0.15)",
                backgroundColor: "#d8dcf0",
                color: "#003d94",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                padding: "5px 10px",
                textAlign: "center",
            }}
            onChange={ onChange }
        >
            { options.map((option) => (
                <option key={ option.value } value={ option.value }>{ option.innerText }</option>
            ))}
        </select>
    )
}

export default Select;