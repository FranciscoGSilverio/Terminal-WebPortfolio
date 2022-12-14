import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  width: 100%;
  line-height: 1.8em;
  padding: 0;
`;

const Item = styled.li`
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
  .command {
    width: 20%;
  }
  .pipe {
    width: 10%;
  }
  .description {
    width: 70%;
  }
`;

const items = [
  {
    command: "song",
    pipe: "|",
    description: "plays a random song from spotify",
  },
  {
    command: "cat",
    pipe: "|",
    description: "displays a picture of a cute cat",
  },
  {
    command: "help",
    pipe: "|",
    description: "displays the list of available commands",
  },
  {
    command: "github",
    pipe: "|",
    description: "### Does something with the github api ###",
  },
  { command: "clear", pipe: "|", description: "clears the console" },
  {
    command: "echo",
    pipe: "|",
    description: "prints a message to the console",
  },
  {
    command: "about",
    pipe: "|",
    description: "displays information about the developer",
  },
  {
    command: "social",
    pipe: "|",
    description: "displays the list of the developer social media",
  },
  {
    command: "connect",
    pipe: "|",
    description: "redirects towards my profile in the given social media",
  },
  {
    command: "source",
    pipe: "|",
    description: "opens the source code on the github repository",
  },
];

const Help = () => {
  return (
    <List>
      {items.map((item, index) => (
        <Item key={index}>
          <span className="command">{item.command}</span>
          <span className="pipe">{item.pipe}</span>
          <span className="description">{item.description}</span>
        </Item>
      ))}
    </List>
  );
};

export default Help;
