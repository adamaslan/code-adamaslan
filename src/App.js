// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";
import "./Title.css";

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav nav nav"
    "asideLeft main asideRight"
    "leftFooter footer rightFooter";
  grid-template-rows: 1fr 8fr 1fr 1fr;
  grid-template-columns: 1fr 5fr 2fr 1fr 1fr;
  @media screen and (max-width: 500px) {
    grid-template-areas:
      "nav"
      "nav"
      "nav"
      "asideLeft"
      "main"
      "asideRight"
      "leftFooter"
      "footer"
      "rightFooter";
  }
`;

const Nav = styled.nav`
  grid-area: nav;
  font-size: calc(20px + 0.25em);
  border-right: 10px solid;
`;
const AsideLeft = styled.aside`
  grid-area: asideLeft;

  transform: rotate(20deg);
  border-bottom: 25px solid;
  align-self: start;
`;
const AsideRight = styled.aside`
  grid-area: asideRight;
  font-weight: bolder;
  writing-mode: vertical-rl;
  transform: rotate(-20deg);
  border-right: 18px solid;
  justify-content: end;
`;
const Main = styled.main`
  border-top: 15px solid;
  grid-area: main;
`;
const Footer = styled.footer`
  border-top: 20px solid;
  grid-area: footer;
  font-size: calc(10px + 0.25em);
  border-bottom: 40px solid;
`;

// The function that toggles between themes
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <GridLayout>
          <Nav>
            <h1>
              {" "}
              Adam Aslan - {">"}
              Front - End Developer{" "}
            </h1>{" "}
          </Nav>{" "}
          <AsideLeft> {} </AsideLeft>{" "}
          <Main>
            {" "}
            <button onClick={toggleTheme}>
              Click to change to Dark or Light Mode{" "}
            </button>{" "}
            <h2>
              Hey there, my name is Adam Aslan. I am very interested in the
              intersection of art, design, and front end development with a
              focus on creating art via code.{" "}
            </h2>{" "}
          </Main>{" "}
          <AsideRight>
            <p>
              This is my custom font Utopia_Seriff. <br /> You can have it for{" "}
              <span> </span>
              <a
                download="utopia_seriff.ttf"
                target="_blank"
                href="./fonts/utopia_seriff.ttf"
              >
                free!
              </a>
              <a />
            </p>{" "}
          </AsideRight>{" "}
          <Footer>
            <h1> Thanks for visiting! </h1>{" "}
          </Footer>{" "}
        </GridLayout>{" "}
      </>{" "}
    </ThemeProvider>
  );
}

export default App;
