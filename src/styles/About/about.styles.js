import styled from "styled-components";
import { Section } from "./../../global";
import { keyframes } from "styled-components";
import { Container } from "./../../global";
const rotate = keyframes`
  0% {
        
    transform: rotate(0deg) ;
  }

 
          100% {
         
    transform: rotate(360deg) ;
  }
`;

// svg {
//         transition: all 0.5s;
//       }
//       #circle {
//       }
//       svg:hover #circle {
//         animation: ${rotate} 1s linear infinite;
//         animation-fill-mode: forwards;
//         transform-origin: center;
//       }

export const AboutSection = styled(Section)`
  background-color: transparent;
  position: relative;
`;

export const AboutCardContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 65%;
`;
