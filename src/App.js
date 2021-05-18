import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import { theme } from "./theme";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/section/header.section/Header";
import About from "./components/section/about/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <Navbar />
          <Header />
          <About id="about" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
