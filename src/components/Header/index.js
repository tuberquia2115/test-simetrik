import React from "react";
import { StyledHeader } from "./styles";

export const Header = ({ title }) => {
  return (
    <StyledHeader>
        {title}
    </StyledHeader>
  );
};
