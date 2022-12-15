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
import Quote from "./commands/Quote";
import { useLocalStorage } from "../hooks/useLocalStorage";
import DrunkMode from "./commands/DrunkMode";
import { useTheme } from "../hooks/useTheme";

const rotate = keyframes`
  0%{
    
    filter: blur(2px);
    
    }

	10%{
    	filter: blur(1px);
        
    }
    50%{
    	filter: blur(4px);
        transform: rotate(2deg);
    }
    
    65%{
    	filter: blur(6px)
    }
    
    80%{
    	filter: blur(2px);
        
    }
    
    100%{
    	filter:blur(1px);
    }
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;
  width: 70%;

  ${(props) =>
    props.theme === "drunk" &&
    css`
      animation: ${rotate} 10s linear infinite;
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

  const componentKeyRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [commandsHistory, setCommandsHistory] = useLocalStorage(
    "commandsHistory",
    []
  );

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

    componentKeyRef.current += 1;

    console.log(componentKeyRef.current);

    switch (key.toLowerCase()) {
      case "about":
        return <About key={componentKeyRef.current} />;

      case "help":
        return <Help key={componentKeyRef.current} />;

      case "clear":
        setCommandsHistory([]);
        break;

      case "echo":
        return <Echo message={argument} key={componentKeyRef.current} />;

      case "social":
        return <Social key={componentKeyRef.current} />;

      case "connect":
        return <Connect social={argument} key={componentKeyRef.current} />;

      case "source":
        return <Connect social="repository" key={componentKeyRef.current} />;

      case "github":
        return <GitHub key={componentKeyRef.current} />;

      case "drunkmode":
        return <DrunkMode />;

      default:
        componentKeyRef.current -= 1;
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
          <div key={index}>
            <Path path="~/home" />
            <CommandInput
              inputValue={item}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
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
