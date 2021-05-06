import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  //This defines what 1rem is
  font-size: 62.5%; //1rem = 10px

 
}

body {
  box-sizing: border-box;
background-color: ${({ theme }) => theme.primaryGrey};
  font-family: "Lato", sans-serif;
  padding: 2.5rem;
}


`;
export const Container = styled.div`
  width: 75%;
  margin: auto 0;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Section = styled.section`
  height: 90vh;
  width: 100%;
`;
export default GlobalStyle;
