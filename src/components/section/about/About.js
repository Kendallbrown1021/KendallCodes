import React from "react";
import {
  AboutSection,
  AboutCardContainer,
} from "./../../../styles/About/about.styles";

import AboutCard from "./../../Card/AboutCard";

function About() {
  return (
    <AboutSection>
      <AboutCardContainer>
        <AboutCard />
      </AboutCardContainer>
    </AboutSection>
  );
}

export default About;
