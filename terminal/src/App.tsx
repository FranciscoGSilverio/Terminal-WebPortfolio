import "./App.css";
import styled, { keyframes, css } from "styled-components";
import Terminal from "./components/Terminal";
import { QueryClient, QueryClientProvider } from "react-query";
import { useTheme } from "./hooks/useTheme";

const drunk = keyframes`

0%{
  filter: blur(0.5px);
}
25%{
  filter: blur(1.5px);
  
}
50%{
  filter: blur(0.75px);
  
  }
75%{
  filter: blur(1.5px);
  
    }
100%{
  filter: blur(0.5px);
}
`;

const Wrapper = styled.div`
  background: #282c34;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  ${(props) =>
    props.theme === "drunk" &&
    css`
      animation: ${drunk} 10s linear infinite;
    `}
`;

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper theme={theme}>
        <Terminal />
      </Wrapper>
    </QueryClientProvider>
  );
};

export default App;
