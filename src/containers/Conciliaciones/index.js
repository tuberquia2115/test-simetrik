import React from "react";
import { ItemConciliacion } from "../../components/ItemConciliacion";
import { List } from "../../components/List";

export const Conciliaciones = ({ list }) => {
  return (
      <List list={list} ItemComponent={ItemConciliacion} />
  );
};
