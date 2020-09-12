import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  font: "utopia_seriff";
  font-family: "utopia_seriff", "courier new";
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <ToggleContainer
      lightTheme={isLight}
      onClick={toggleTheme}
    ></ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
};

export default Toggle;
