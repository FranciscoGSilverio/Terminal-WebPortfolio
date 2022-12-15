import "./App.css";
import styled from "styled-components";
import Terminal from "./components/Terminal";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";

const Wrapper = styled.div`
  background: #282c34;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Terminal />
      </Wrapper>
    </QueryClientProvider>
  );
};

export default App;
