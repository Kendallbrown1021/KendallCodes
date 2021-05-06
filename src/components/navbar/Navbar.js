import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import styled from 'styled-components'
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLink,
} from "./../../styles/Navbar/navbar.styles";

import { Link } from "react-scroll";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#bee3db", size: "2.5rem" }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItems>
                <NavLink>
                  <Link to="about" spy={true} smooth={true}>
                    ABOUT
                  </Link>
                </NavLink>
              </NavItems>
              <NavItems>
                <NavLink>
                  <Link to="services" spy={true} smooth={true}>
                    SERVICES
                  </Link>
                </NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/" spy={true} smooth={true}>
                  PROJECTS
                </NavLink>
              </NavItems>

              <NavItems>
                <NavLink to="/" spy={true} smooth={true}>
                  CONTACT
                </NavLink>
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
