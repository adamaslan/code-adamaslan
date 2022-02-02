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
    "nav nav2 nav2 nav3 "
    "asideLeft main main asideRight"
    " . 1fr auto footer";
  grid-template-rows: 7rem 1fr . 1fr;
  grid-template-columns: 5rem 1fr 1fr 1fr;

  @media screen and (max-width: 600px) {
    grid-template-areas:
      "nav3"
      "nav2"
      "main"
      "asideLeft"
      "nav"
      "asideRight"
      "footer";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;

const Nav = styled.nav`
  grid-area: nav;
  font-size: 1rem;
  border-right: 10px solid;
  transform: rotate(10deg);
  margin: 1rem;
`;
const Nav2 = styled.nav`
  grid-area: nav2;
  font-size: 1rem;
`;
const Nav3 = styled.nav`
  grid-area: nav3;
  font-size: 1rem;
  border-top: 4px solid;
  border-color: grey;
  transform: rotate(20deg);
  padding: 1rem;
`;
const AsideLeft = styled.aside`
  grid-area: asideLeft;
  transform: rotate(-5deg);
  border-right: 25px solid;
  margin: 3rem;
`;
const AsideRight = styled.aside`
  grid-area: asideRight;

  writing-mode: vertical-rl;
  transform: rotate(-20deg);
  border-right: 18px solid;
  padding: 2rem;
  margin: 2rem;
`;
const Main = styled.main`
  border-top: 15px solid;
  border-bottom: 15px solid;
  grid-area: main;
  padding: 2rem;
  margin: 2rem;
`;
const Footer = styled.footer`
  border-top: 50px solid;
  grid-area: footer;
  font-size: 1rem;
  border-left: 20px solid;
  justify-content: right;
  text-align: left;
`;

// For Mobile
// const AsideRight1 = styled.aside`
//   grid-area: asideRight1;
//   font-weight: bolder;
//   writing-mode: vertical-rl;
//   transform: rotate(-80deg);
//   border-right: 18px solid;
//   justify-content: end;
// `;

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
            <h1>
              {" "}
              Adam Timur Aslan <br /> {"=> "}Frontend Developer{" "}
            </h1>{" "}
          </Nav2>{" "}
          <Nav3>
            <h2> {" - --> "}Hey!</h2>{" "}
          </Nav3>{" "}
          <AsideLeft> {} </AsideLeft>{" "}
          <Main>
            {" "}
            <button onClick={toggleTheme}>
              Click here to change to Dark or Light Mode{" "}
            </button>{" "}
            <p>
              Hey there, my name is Adam Timur Aslan. I am based in Brooklyn and
              have been very interested in the intersection of art, design, and
              front end development with a focus on creating art via code for
              over 8 years.{" "}
            </p>{" "}
            <Statey1 />
            <br></br>
            <MeTimer />
            <h2>
              {" "}
              <a
                download="utopia_seriff.ttf"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/adamaslan/"
              >
                {" --> "}Visit my linked in page :)
              </a>{" "}
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
                rel="noopener noreferrer"
                aria-describedby="font download"
              >
                free!
              </a>
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
