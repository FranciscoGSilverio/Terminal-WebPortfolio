import * as React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const Author = styled.p`
  font-weight: bold;
`;

const Placeholder = styled.div`
  min-height: 50px;
`;

const Quote = () => {
  const quoteRequestHeader = {
    headers: {
      "X-Api-Key": process.env.REACT_APP_QUOTES_API_KEY || "",
    },
  };

  const quote = useQuery("quoteRequest", () =>
    fetch(
      "https://api.api-ninjas.com/v1/quotes?category=",
      quoteRequestHeader
    ).then((res) => res.json())
  );

  return (
    <>
      {!quote.isLoading ? (
        <>
          <p>"{quote?.data[0].quote}"</p>
          <Author>--By {quote?.data[0].author}--</Author>
        </>
      ) : (
        <Placeholder />
      )}
    </>
  );
};

export default Quote;
