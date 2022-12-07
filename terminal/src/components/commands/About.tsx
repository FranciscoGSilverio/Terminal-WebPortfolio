import * as React from "react";
import styled from "styled-components";

const About = () => {
  const AboutWrapper = styled.div`
    font-size: 12px;
  `;

  return (
    <AboutWrapper>
      <p>
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
        code or contact me, use the <code>source</code>, <code>social</code> or
        <code>connect</code> commands
      </p>
      <p>
        In case you have any doubts on the commands type help to display a list
        of commands and their description
      </p>
    </AboutWrapper>
  );
};

export default About;
