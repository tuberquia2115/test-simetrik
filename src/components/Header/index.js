import React from "react";
import { StyledHeader } from "./styles";

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <div>
        <h4>{title}</h4>
      </div>
    </StyledHeader>
  );
};
