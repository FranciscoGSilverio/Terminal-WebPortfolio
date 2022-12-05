import styled from "styled-components";
import CommandInput from "./CommandInput";
import Path from "./Path";

interface ButtonProps {
  color: string;
}

const Window = styled.div`
  width: 50%;
  height: 60%;
  border: 1px solid #898aa6;
  box-shadow: #898aa6 0px 3px 8px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 1rem 1rem 1rem;
  box-sizing: border-box;
  position: relative;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2rem;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  background-color: #898aa6;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeaderPlaceholder = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 0.5rem;
  display: block;
  border: 1px solid red;
`;

const MacOsButtons = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;

const RoundedButton = styled.div<ButtonProps>`
  width: 18px;
  height: 18px;

  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const TerminalTitle = styled.h1`
  font-size: 12px;
  
  justify-self: center;
  color: aliceblue;
  position: absolute;
  top: 0;
  left: 40%;
`;

const Terminal = () => {
  return (
    <Window>
      <HeaderPlaceholder />
      <Header>
        <MacOsButtons>
          <RoundedButton color="#ff605c" />
          <RoundedButton color="#ffbd44" />
          <RoundedButton color="#00ca4e" />
        </MacOsButtons>
        <TerminalTitle>{window.location.href}</TerminalTitle>
      </Header>
      <Group>
        <Path path="~/home" />
        <CommandInput />
      </Group>
    </Window>
  );
};

export default Terminal;
