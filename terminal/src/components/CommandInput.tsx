import styled from "styled-components";
import { HiArrowSmRight } from "react-icons/hi";
import React from "react";

const CommandInputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: green;
`;

const Input = styled.input`
  background: none;
  border: none;
  padding: 5px;
  font-size: 15px;
  flex: 1;
  color: green;
  &:focus {
    outline: none;
  }
  &:before {
    content: "\\2192";
  }
`;

interface Props {
  inputValue: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CommandInput = ({ inputValue, changeHandler, submitHandler }: Props) => {
  return (
    <CommandInputWrapper>
      <HiArrowSmRight />
      <form onSubmit={(e) => submitHandler(e)}>
        <Input
          type="text"
          autoFocus={true}
          value={inputValue}
          onChange={(e) => changeHandler(e)}
        />
      </form>
    </CommandInputWrapper>
  );
};

export default CommandInput;
