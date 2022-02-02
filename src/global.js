import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }


  h2 {
  font-size: 2rem;
}
h1 {
  font-size: 3rem;
}
p {
  font-size: 2rem;
  font-weight: 600;
}


  body {
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    font-family: "utopia_seriff", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

 

  small {
    display: block;
  }

  ${
    "" /* a {
    color: ${({ theme }) => theme.text};
    
  } */
  }

  button {
 
    font-family: "utopia_seriff";
    background-color: red;
    font-size: 2rem;
    border-radius: 25%;
    border: 2px solid yellow;
  }
  .button:hover {
  background-color: red;
  color: white;}

`;
