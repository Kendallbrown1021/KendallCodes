import styled from "styled-components";
import img from "./../../assets/images/HeaderBackground.jpg.jpg";
import { Section } from "./../../global";

export const HeaderContainer = styled(Section)`
  background-image: linear-gradient(
      180deg,
      rgba(53, 79, 82, 0.9) 50%,
      rgba(132, 169, 140, 0.9) 50%
    ),
    url(${img});
  background-size: cover;
  background-position: top;
  position: relative;
`;

export const HeaderHeroCont = styled.div`
  position: absolute;
  top: 52.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const HeaderMainText = styled.h1`
  font-size: 15rem;
  color: ${({ theme }) => theme.primaryLight2};
  text-shadow: 0rem 0rem 1rem ${({ theme }) => theme.primaryLight2};
  span {
    color: ${({ theme }) => theme.primaryDark};
    text-shadow: 0rem 0rem 1rem ${({ theme }) => theme.primaryDark};
  }
  text-transform: uppercase;
`;

export const HeaderSecondaryText = styled.h2`
  color: ${({ theme }) => theme.primaryDark};
  font-size: 3rem;
  text-transform: uppercase;
  text-shadow: 0rem 0rem 2rem ${({ theme }) => theme.primaryDark};
  }
  .dot {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryDark};
    display: inline-block;
    margin: 0.5rem 2rem;
  }
`;
