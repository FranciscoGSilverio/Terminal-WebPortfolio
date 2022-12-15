import { Command } from "../../styles/common";
import { useTheme } from "../../hooks/useTheme";
import { useEffect } from "react";
import styled from "styled-components";

const Hint = styled.p`
  &:after{
    content: '\\1F62C'
  }
`

const DrunkMode = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => setTheme("drunk"));

  return (
    <>
      <p>
        You turned on <Command>DrunkMode</Command>!
      </p>
      <p>
        To go back to normal, use the <Command>reset</Command> command
      </p>
      <Hint>
        Or go drink some wather! 
      </Hint>
    </>
  );
};

export default DrunkMode;
