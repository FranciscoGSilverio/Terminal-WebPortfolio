import * as React from "react";
import styled from "styled-components";
import { Command } from "../../styles/common";

const List = styled.ul`
  list-style: none;
  width: 100%;
  line-height: 1.8em;
  padding-left: 0;
`;

const Item = styled.li`
  display: flex;
  width: 70%;
  .site {
    width: 30%;
  }

  .url {
    width: 70%;
    color: #50fa7b;
    font-weight: bold;
  }
`;

export const socialMedia = [
  {
    site: "LinkedIn",
    url: "https://www.linkedin.com/in/francisco-silverio/",
  },
  {
    site: "GitHub",
    url: "https://github.com/FranciscoGSilverio",
    repo: "https://github.com/FranciscoGSilverio/Terminal-WebPortfolio",
  },
  {
    site: "Twitter",
    url: "https://twitter.com/FranciscoSilvr8",
  },
  {
    site: "Instagram",
    url: "https://www.instagram.com/francisco_gsilverio/",
  },
];

const Social = () => {
  return (
    <>
      <List>
        {socialMedia.map((item, index) => (
          <Item key={index}>
            <span className="site">{item.site}:</span>
            <a className="url" href={item.url}>
              {item.url}
            </a>
          </Item>
        ))}
      </List>

      <span>
        A shortcut to open any of the social media listed above is the
        <Command>connect</Command> command. Try it out!
      </span>
    </>
  );
};

export default Social;
