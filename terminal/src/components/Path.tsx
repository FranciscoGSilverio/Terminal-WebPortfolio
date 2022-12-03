import styled from "styled-components";

interface Props {
  path: string;
}

const Span = styled.span`
    color: aliceblue;
    padding: 5px;
    display: flex;
    min-width: 100%;
  }
`;

const Path = ({ path }: Props) => {
  return <Span>User in {path}</Span>;
};

export default Path;
