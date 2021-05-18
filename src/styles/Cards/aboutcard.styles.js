import styled from "styled-components";
import { keyframes } from "styled-components";
import { SecondaryHeading } from "./../../global";
import { Button } from "./../../global";

const bounce = keyframes`

        0%   { transform: scale(1,1)      translateX(0); }
        10%  { transform: scale(1.1,.9)   translateX(0); }
        30%  { transform: scale(.9,1.1)   translateX(3rem); }
        50%  { transform: scale(1.05,.95) translateX(0); }
        57%  { transform: scale(1,1)      translateX(.7rem); }
        64%  { transform: scale(1,1)      translateX(0); }
        100% { transform: scale(1,1)      translateX(0); }



`;
export const AboutCardCont = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundLight};
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  overflow: hidden;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  display: table;
  overflow: hidden;
`;

export const AboutLeft = styled.div`
  width: 30%;

  display: table-cell;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.primaryLight};
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  object-fit: contain;

  position: relative;
  img {
    position: absolute;
    right: -40%;
    top: 55%;
    width: 95%;
    height: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2rem solid ${({ theme }) => theme.primaryLight};
    padding: 1rem;
  }
`;

export const AboutRight = styled.div`
  width: 70%;
  display: table-cell;
  vertical-align: middle;
`;

export const IconContianer = styled.div`
  height: 45%;
  width: 6rem;
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  a {
    .logo {
      height: 4rem;
      width: auto;
      fill: ${({ theme }) => theme.primaryGrey};
    }
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  svg {
    transition: all 0.3s ease;
    border: 2px solid ${({ theme }) => theme.primaryGrey};
    border-radius: 50%;
    padding: 0.5rem;
    backface-visibility: hidden;
  }
  svg:hover {
    fill: ${({ theme }) => theme.backgroundLight};
    border-color: ${({ theme }) => theme.backgroundLight};
    animation: ${bounce} 1s linear infinite;
  }
`;

export const AboutHeaderBox = styled.div`
  height: 22.5%;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const AboutLeftHeading = styled(SecondaryHeading)`
  font-size: 4rem;

  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDark};
`;
export const AboutRightHeading = styled(SecondaryHeading)`
  font-size: 4rem;
  position: relative;
  top: -15%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDark};
`;

export const AboutRightContainer = styled.div`
  height: 35rem;
  width: 50%;
  margin: 0 auto;
`;

export const AboutRightContent = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryDark};
  line-height: 135%;
  text-align: justify;
`;

export const SkillsButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryGrey};
  top: 19%;
  left: 25%;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primaryDark};
  box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.15);
`;
