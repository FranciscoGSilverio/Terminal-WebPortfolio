import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import CommandInput from "./CommandInput";
import Path from "./Path";
import About from "./commands/About";
import Help from "./commands/Help";
import CommandNotFound from "./commands/CommandNotFound";
import Echo from "./commands/Echo";
import Social from "./commands/Social";
import Connect from "./commands/Connect";
import GitHub from "./commands/GitHub";
import { useLocalStorage } from "../hooks/useLocalStorage";
import DrunkMode from "./commands/DrunkMode";
import { useTheme } from "../hooks/useTheme";
import HistoryItems from "./HistoryItems";

const drunk = keyframes`

0%{
  filter: blur(0.5px);
}
25%{
  filter: blur(1.5px);
  transform: scale(1.01) rotate(2deg) translate(10px, 15px);
}
50%{
  filter: blur(0.75px);
  transform: scale(1.003) translate(5px, 20px) ; 
  }
75%{
  filter: blur(1.5px);
  transform: rotate(-3deg) translate(-18px, -10px) scale(0.99);
    }
100%{
  filter: blur(0.5px);
}
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;
  width: 70%;

  ${(props) =>
    props.theme === "drunk" &&
    css`
      animation: ${drunk} 10s linear infinite;
    `}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  background-color: #898aa6;
  box-sizing: border-box;
  position: sticky;
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

const Body = styled.div`
  height: 60vh;
  border: 3px solid #898aa6;
  box-shadow: #898aa6 0px 3px 8px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 1rem 1rem 1rem;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #474e68;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px grey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6B728E;
    border-radius: 15px;
    height: 2px;
  }
`;

const OutputWrapper = styled.div`
  font-size: 14px;
  color: aliceblue;
  padding-left: 2em;
`;

interface ButtonProps {
  color: string;
}

const Terminal = () => {
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<string>("");
  const [inputValue, setInputValue] = useState("");
  const [commandsHistory, setCommandsHistory] = useLocalStorage(
    "commandsHistory",
    []
  );
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processInputString = (command: string): string[] => {
    let input = command.split(" ");

    if (input.length > 2) {
      const cmd = input.splice(0, 1);

      const args = input.join(" ");
      return (input = [...cmd, args]);
    }

    return [...input];
  };

  const renderTerminalResponse = (command: string) => {
    const [key, argument] = processInputString(command);

    switch (key.toLowerCase()) {
      case "about":
        return <About />;

      case "help":
        return <Help />;

      case "clear":
        setCommandsHistory([]);
        break;

      case "echo":
        return <Echo message={argument} />;

      case "social":
        return <Social />;

      case "connect":
        return <Connect social={argument} />;

      case "source":
        return <Connect social="repository" />;

      case "github":
        return <GitHub />;

      case "drunkmode":
        return <DrunkMode />;

      case "reset":
        setCommandsHistory([]);
        setTheme("dracula");
        break;
      default:
        return <CommandNotFound />;
    }
  };

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [inputValue]
  );

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      processInputString(inputValue);
      setCommandsHistory([...commandsHistory, inputValue]);
      setInputValue("");
    },
    [inputValue, commandsHistory]
  );

  const clickHandler = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => setCommandsHistory([]), []);

  return (
    <Column theme={theme}>
      <Header>
        <MacOsButtons>
          <RoundedButton color="#ff605c" />
          <RoundedButton color="#ffbd44" />
          <RoundedButton color="#00ca4e" />
        </MacOsButtons>
        <TerminalTitle>{window.location.href}</TerminalTitle>
      </Header>
      <Body onClick={() => clickHandler()}>
        {commandsHistory.map((item: any, index: number) => (
          // <div key={index}>
          //   <Path path="~/home" />
          //   <CommandInput
          //     inputValue={item}
          //     changeHandler={changeHandler}
          //     submitHandler={submitHandler}
          //   />
          //   <OutputWrapper>{renderTerminalResponse(item)}</OutputWrapper>
          // </div>
          <div key={index}>
            <HistoryItems inputValue={item} />
            <OutputWrapper>{renderTerminalResponse(item)}</OutputWrapper>
          </div>
        ))}

        <Path path="~/home" />
        <CommandInput
          ref={inputRef}
          inputValue={inputValue}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </Body>
    </Column>
  );
};

export default Terminal;
