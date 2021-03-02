import React from "react";
import { StyledList } from "./styles.js";

export const List = ({ list, ItemComponent }) => {
  return (
    <StyledList >
      {Array.isArray(list) && list.map((elm) => <ItemComponent {...elm} key={elm._id} />)}
    </StyledList>
  );
};
