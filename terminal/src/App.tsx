import "./App.css";
import styled from "styled-components";
import Terminal from "./components/Terminal";

const Wrapper = styled.div`
  background: #282c34;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Terminal />
    </Wrapper>
  );
};

export default App;
