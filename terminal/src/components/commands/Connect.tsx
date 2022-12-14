import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Command } from "../../styles/common";
import { socialMedia } from "./Social";

interface Props {
  social: string;
}

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  .error {
    color: #ff8b8b;
    font-weight: bold;
    line-height: 2em;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
`;

const Spinner = styled.span`
  margin-left: 1em;
  animation: ${rotate} 2s linear infinite;
`;

const Connect = ({ social }: Props) => {
  const [feedBack, setFeedBack] = useState({
    loading: false,
    error: false,
  });

  const rendersRef = useRef(0);

  const findUrl = () => {
    if (social?.toLowerCase() === "repository") {
      return "https://github.com/FranciscoGSilverio/Terminal-WebPortfolio";
    } else {
      const redirectUrl = socialMedia.find(
        (item) => item.site.toLowerCase() === social?.toLowerCase()
      )?.url;

      return redirectUrl;
    }
  };

  const redirect = () => {
    const redirectUrl = findUrl();

    if (redirectUrl) {
      setFeedBack({ loading: true, error: false });

      const redirectionTimeout = setTimeout(() => {
        window.open(redirectUrl);
      }, 2000);
    } else {
      setFeedBack({ loading: false, error: true });
    }
  };

  useEffect(() => {
    if (rendersRef.current === 0) {
      rendersRef.current = 1;
    } else {
      redirect();
    }
  }, []);

  return (
    <>
      {feedBack.error && (
        <ErrorContainer>
          <span className="error">
            Error while connecting to the given social media!
          </span>
          <span>
            Remember to pass a valid social media as parameter to the
            <Command>connect</Command> command, like this:
          </span>
          <span>
            E.g: <Command>connect instagram</Command>
          </span>
          <span>
            To see the list of available social media, type
            <Command>social</Command>,
          </span>
          <span>
            To see the list of all available commands, type
            <Command>help</Command>
          </span>
        </ErrorContainer>
      )}
      {feedBack.loading && (
        <LoadingContainer>
          <span>Connecting to {social}</span>
          <Spinner>+</Spinner>
        </LoadingContainer>
      )}
    </>
  );
};

export default Connect;
