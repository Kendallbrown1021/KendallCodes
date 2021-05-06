import React from "react";
import {
  HeaderContainer,
  HeaderHeroCont,
  HeaderMainText,
  HeaderSecondaryText,
} from "./../../../styles/Header/header.styles";
function Header() {
  return (
    <HeaderContainer>
      <HeaderHeroCont>
        <HeaderMainText>
          Kendall <br />
          <span>Codes</span>
        </HeaderMainText>
        <HeaderSecondaryText>
          Web Developement
          <span className="dot" />
          For Your Needs
        </HeaderSecondaryText>
      </HeaderHeroCont>
    </HeaderContainer>
  );
}

export default Header;
