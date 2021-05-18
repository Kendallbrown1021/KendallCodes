import React from "react";
import {
  AboutCardCont,
  AboutContent,
  AboutLeft,
  AboutRight,
  IconContianer,
  AboutLeftHeading,
  AboutHeaderBox,
  SkillsButton,
  AboutRightHeading,
  AboutRightContent,
  AboutRightContainer,
} from "./../../styles/Cards/aboutcard.styles";
import aboutImage from "./../../assets/images/Untitled.png";
import { ReactComponent as Twitter } from "./../../assets/logo/logo-twitter (1).svg";
import { ReactComponent as LinkedIn } from "./../../assets/logo/logo-linkedin.svg";
import { ReactComponent as Instagram } from "./../../assets/logo/logo-instagram.svg";
import { ReactComponent as GitHub } from "./../../assets/logo/logo-github.svg";

function AboutCard() {
  return (
    <AboutCardCont>
      <AboutContent>
        <AboutLeft>
          <AboutHeaderBox>
            <AboutLeftHeading>
              Kendall <br />
              Brown
            </AboutLeftHeading>
          </AboutHeaderBox>

          <img src={aboutImage} alt=" About me " />
          <IconContianer>
            <a href="/">
              <Twitter className="logo" />
            </a>
            <a href="/">
              <LinkedIn className="logo" />
            </a>
            <a href="/">
              <Instagram className="logo" />
            </a>
            <a href="/">
              <GitHub className="logo" />
            </a>
          </IconContianer>
          <SkillsButton> See Skills</SkillsButton>
        </AboutLeft>
        <AboutRight>
          <AboutRightHeading>Hello!</AboutRightHeading>
          <AboutRightContainer>
            <AboutRightContent>
              My name is Kendall and I am a six year navy veteran and a self
              taught web developer. I got into developement because I truly
              enjopy solving problems through both logical and creative
              solutions! I am passionate about code, as well as my family, my
              cat, and of course video games 😎. <br /> <br /> After my time in
              the military I found that another way that I could contribute to
              the world is by bringing the absolute most value I can to my
              clients through simple easy to use websites that convert visitors
              into customers for the client. After all my success depends on the
              value that I bring to you!
            </AboutRightContent>
          </AboutRightContainer>
        </AboutRight>
      </AboutContent>
    </AboutCardCont>
  );
}

export default AboutCard;
