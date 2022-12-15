import * as React from "react";
import { Command } from "../styles/common";
import styled, { keyframes } from "styled-components";

const Typing = keyframes`
    from{width:0%}
    to{width: 100%}
`;

const AnimatedCursor = keyframes`
    from, to { border-color: transparent }
  50% { border-color: aliceblue; }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  overflow: hidden;
  border-right: 0.15em solid aliceblue;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${Typing} 3.5s steps(40, end),
    ${AnimatedCursor} 0.75s step-end infinite;
  color: aliceblue;
`;

const Subtitle = styled.h4`
  overflow: hidden;
  border-right: 0.15em solid aliceblue;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${Typing} 3.5s steps(40, end),
    ${AnimatedCursor} 0.75s step-end infinite;
  color: aliceblue;
`;

const AnimatedTitle = () => {
  return (
    <Wrapper>
      <Title>Welcome to my web terminal!</Title>
      <Subtitle>
        Don't know where to start? Try the <Command>help</Command> command!
      </Subtitle>
    </Wrapper>
  );
};

export default AnimatedTitle;
