import React, { useEffect } from "react";
import { socialMedia } from "./Social";

interface Props {
  social: string;
}

const Connect = ({ social }: Props) => {

  const findUrl = () => {
    const redirectUrl = socialMedia.find(
      (item) => item.site.toLowerCase() === social.toLowerCase()
    )?.url;

    return redirectUrl;
  };

  const redirect = () => {
    const redirectUrl = findUrl();

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  useEffect(() => redirect(), []);

  return <></>;
};

export default Connect;
