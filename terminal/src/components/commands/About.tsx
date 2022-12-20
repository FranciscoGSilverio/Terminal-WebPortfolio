import { Command } from "../../styles/common";
const About = () => {
  return (
    <>
      <p data-testid="About">
        <strong>Hi!</strong> My name is Francisco Silvério
      </p>
      <p>
        I'm a <strong>front-end developer</strong> currently working from home
      </p>
      <p>
        I'm taking my major in <strong>Software Engeneering</strong> and
        studying/working very hard on my software development skills in order to
        become a better developer
      </p>
      <p>
        If you liked this project and would like to take a look at the source
        code or contact me, use the <Command>source</Command>,
        <Command>social</Command> or
        <Command>connect "socialMedia"</Command> commands
      </p>
      <p>
        In case you have any doubts on the commands, type
        <Command>help</Command> to display a list of commands and their
        description
      </p>
    </>
  );
};

export default About;
