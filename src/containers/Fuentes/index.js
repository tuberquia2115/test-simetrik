import React from "react";
import { ItemFuente } from "../../components/ItemFuente";
import { List } from "../../components/List";

export const Fuentes = ({ list }) => {
  return (
      <List list={list} ItemComponent={ItemFuente} />
  );
};