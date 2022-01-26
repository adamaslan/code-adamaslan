import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import styled from "styled-components";
import "./index.css";
import Statey1 from "./components/Statey1";
import MeTimer from "./components/MeTimer";

const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    "nav nav2 nav3"
    "asideLeft main asideRight"
    "leftFooter Footer rightFooter";
  grid-template-rows: 1fr 8fr 1fr auto 1fr;
  grid-template-columns: 1fr 5fr 2fr 1fr 1fr;

  @media screen and (max-width: 600px) {
    grid-template-areas:
      "nav2"
      "main"
      "asideLeft" "   asideRight1";
    grid-template-rows: 1fr 8fr 1fr auto 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: auto 1fr 1fr;
  }
`;

const Nav = styled.nav`
  grid-area: nav;
  font-size: calc(20px + 0.25em);
  border-right: 10px solid;
`;
const Nav2 = styled.nav`
  grid-area: nav2;
  font-size: calc(20px + 0.25em);
`;
const Nav3 = styled.nav`
  grid-area: nav3;
  font-size: calc(20px + 0.25em);
  border-right: 10px solid;
`;
const AsideLeft = styled.aside`
  grid-area: asideLeft;

  transform: rotate(-5deg);
  border-right: 25px solid;
`;
const AsideRight = styled.aside`
  grid-area: asideRight;
  font-weight: bolder;
  writing-mode: vertical-rl;
  transform: rotate(-20deg);
  border-right: 18px solid;
`;
const Main = styled.main`
  border-top: 15px solid;
  border-bottom: 15px solid;
  grid-area: main;
`;
const Footer = styled.footer`
  border-top: 20px solid;
  grid-area: footer;
  font-size: calc(10px + 0.25em);
  border-bottom: 40px solid;
`;

// For Mobile
const AsideRight1 = styled.aside`
  grid-area: asideRight1;
  font-weight: bolder;
  writing-mode: vertical-rl;
  transform: rotate(-80deg);
  border-right: 18px solid;
  justify-content: end;
`;

//put code here for timer

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

  // Return the layout based on the current theme (needed)
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <GridLayout>
          <Nav />
          <Nav2>
            <h1> Adam Aslan - {"> "}Front - End Developer </h1>{" "}
          </Nav2>{" "}
          <Nav3>
            <h1> </h1>{" "}
          </Nav3>{" "}
          <AsideLeft> {} </AsideLeft>{" "}
          <Main>
            {" "}
            <button onClick={toggleTheme}>
              Click here to change to Dark or Light Mode{" "}
            </button>{" "}
            <h2>
              Hey there, my name is Adam Aslan. I am very interested in the
              intersection of art, design, and front end development with a
              focus on creating art via code.{" "}
            </h2>{" "}
            <br></br>
            <Statey1 />
            <br></br>
            <MeTimer />
            <h1>
              {" "}
              <a
                download="utopia_seriff.ttf"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/adamaslan/"
              >
                Visit my linked in page :)
              </a>{" "}
            </h1>{" "}
          </Main>{" "}
          <AsideRight>
            <p>
              This is my custom font Utopia_Seriff. <br /> You can have it for{" "}
              <span> </span>
              <a
                download="utopia_seriff.ttf"
                target="_blank"
                href="./fonts/utopia_seriff.ttf"
                rel="noopener noreferrer"
                aria-describedby="font download"
              >
                free!
              </a>
              <a />
            </p>{" "}
          </AsideRight>{" "}
          <Footer>
            <h1> Thanks for visiting! </h1>
          </Footer>
        </GridLayout>{" "}
      </>{" "}
    </ThemeProvider>
  );
}

export default App;
