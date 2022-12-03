import styled from "styled-components";
import { HiArrowSmRight } from "react-icons/hi";

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
  font-size: 16px;
  flex: 1;
  color: green;
  &:focus {
    outline: none;
  }
  &:before {
    content: "\\2192";
  }
`;

const CommandInput = () => {
  return (
    <CommandInputWrapper>
      <HiArrowSmRight />
      <Input type="text" autoFocus={true} />
    </CommandInputWrapper>
  );
};

export default CommandInput;
