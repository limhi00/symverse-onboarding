import React from "react";
import styled from "@emotion/styled";

type OptionProps = {
    value: string | number;
    innerText: string;
}
export type SelectProps = {
    options: OptionProps[];
    onChange: React.ChangeEventHandler;
}

const DefaultSelect = styled.select`
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  background-color: #f0f5f9;
  color: #52616a;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 10px;
  text-align: center;
`

const Select = ({ options, onChange }: SelectProps) => {

    return (
        <DefaultSelect onChange={ onChange }>
            { options.map((option) => (
                <option key={ option.value } value={ option.value }>{ option.innerText }</option>
            ))}
        </DefaultSelect>
    )
}

export default Select;