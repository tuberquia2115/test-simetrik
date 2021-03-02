import React from "react";
import "./styles.js";
import { List, StyledItem, StyledTitle } from "./styles.js";

export const Tabs = ({ listTabs, tab, setTab }) => {
  console.log("lista que llega", listTabs);
  console.log("tab;:", tab);
  return (
    <div>
      <StyledTitle className="title">Modulos</StyledTitle>
      <List>
        {Array.isArray(listTabs) &&
          listTabs.map((elm) => (
            <StyledItem
              active={elm.type === tab}
              onClick={() => setTab(elm.type)}
            >
              {elm.name}
            </StyledItem>
          ))}
      </List>
    </div>
  );
};
