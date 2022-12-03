import styled from "styled-components";
import CommandInput from "./CommandInput";
import Path from "./Path";

const Window = styled.div`
  width: 50%;
  height: 60%;
  border: 1px solid #898aa6;
  box-shadow: #898aa6 0px 3px 8px;
  border-radius: 12px;
  padding: 10px;
  box-sizing: border-box;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2rem;
  align-items: center;
`;

const Terminal = () => {
  return (
    <Window>
      <Group>
        <Path path="~/home" />
        <CommandInput />
      </Group>
    </Window>
  );
};

export default Terminal;
