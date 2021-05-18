import styled, { createGlobalStyle, css } from "styled-components";

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

export const SecondaryHeading = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
`;
export const Button = styled.a`
  &,
  :link,
  :visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 0.4rem;
    transition: all 0.2s;
    position: relative;
    font-size: 2rem;

    //change fot <button>
    border: none;
    cursor: pointer;
  }
  :hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(#000, 0.3);
    ::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  :active,
  :focus {
    transform: translateY(-0.1rem);
    box-shadow: 0 5px 10px rgba(#000, 0.3);
  }
`;

const clearFix = css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Row = styled.div`
  max-width: ${({ theme }) => theme.gridWidth};

  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.gutterVertical};

    /* @include respond(tab-port) {
      margin-bottom: $gutter-vertical-small;
    }
  }

  @include respond(tab-port) {
    max-width: 50rem;
  } */

    ${clearFix}

    [class^="col-"] {
      float: left;
      &:not(:last-child) {
        margin-right: ${({ theme }) => theme.horizontalGutter};

        /* @include respond(tab-port) {
        margin-right: 0;
        margin-bottom: $gutter-vertical-small;
      }
    
*/
      }
      /* @include respond(tab-port) {
      width: 100% !important;
    } */
    }

    .col-1-of-2 {
      width: calc((100% - ${({ theme }) => theme.horizontalGutter}) / 2);
    }

    .col-1-of-3 {
      width: calc((100% - 2 * ${({ theme }) => theme.horizontalGutter}) / 3);
    }
    .col-2-of-3 {
      width: calc(
        2 * ((100% - 2 * ${({ theme }) => theme.horizontalGutter}) / 3) +
          (${({ theme }) => theme.horizontalGutter})
      );
    }
    .col-1-of-4 {
      width: calc((100% - 4 * ${({ theme }) => theme.horizontalGutter}) / 4);
    }
    .col-2-of-4 {
      width: calc(
        2 * ((100% - 3 * ${({ theme }) => theme.horizontalGutter}) / 4) +
          (${({ theme }) => theme.horizontalGutter})
      );
    }
    .col-3-of-4 {
      width: calc(
        3 * ((100% - 3 * ${({ theme }) => theme.horizontalGutter}) / 4) + 2 *
          (${({ theme }) => theme.horizontalGutter})
      );
    }
  }
`;

export default GlobalStyle;
