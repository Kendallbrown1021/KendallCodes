import styled from "styled-components";

import { Link } from "react-scroll";
export const Nav = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 5;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  height: 80px;
  width: 75%;

  @media screen and (max-width: 960px) {
    width: 100%;
    align-itmes: center;
    text-align: center;
  }
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  height: 8rem;
  width: 8rem;
  object-fit: contain;
  .logo {
    height: 80px;
    width: auto;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  transition: all 0.3s;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-150%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #555b6e;
    justify-content: center;
  }
`;
export const NavItems = styled.li`
  :not(:last-child) {
    margin-right: 12rem;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    position: relative;
    align-items: center;
    top: -150px;
    justify-content: center;
    &:hover {
      border: none;
    }
  }
`;
export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.primaryLight2};
  padding-bottom: 1rem;
  font-size: 2rem;

  /* margin-right: 2rem; */

  &:hover {
    transition: 0.1s ease;
    color: ${({ theme }) => theme.primaryLight3};
    border-bottom: 2px solid #a2d0ac;
  }
  @media screen and(max-width:960px) {
    color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 2rem;
    width: 100%;
    /* display: table; */
  }
`;
