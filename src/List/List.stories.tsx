import React from "react";
import { List, ListItem } from "./List";

export default {
  title: "List",
};

export const DefaultList = () => (
  <List>
    <ListItem>Bananas</ListItem>
    <ListItem>Apples</ListItem>
    <ListItem>Oranges</ListItem>
  </List>
);
