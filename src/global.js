import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

p {

  font-size: 30px;
}
  body {
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    font-family: "utopia_seriff", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  footer {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
 
    font-family: "utopia_seriff";
    background-color: red;
    font-size: 24px;
    border-radius: 25%;
    border: 2px solid yellow;
  }
  .button:hover {
  background-color: red;
  color: white;
  a {
    color: ${({ theme }) => theme.text};
  }
`;
