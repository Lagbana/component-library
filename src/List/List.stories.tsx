import React from "react";
import { List, ListItem } from "./List";

export default {
  title: "List",
};

export const VerticalList = () => (
  <List
    backgroundColor={"red"}
    color={"white"}
    flexDirection={"column"}
    width={"15%"}>
    <ListItem
      order={3}
      flexBasis={"100px"}
      backgroundColor={"blue"}
      alignItems={"center"}>
      1. Banana
    </ListItem>
    <ListItem
      order={1}
      flexBasis={"100px"}
      backgroundColor={"blue"}
      alignItems={"center"}>
      2. Apple
    </ListItem>
    <ListItem order={2} flexBasis={"100px"} backgroundColor={"orange"}>
      3. Orange
    </ListItem>
  </List>
);

export const HorizontalList = () => (
  <List
    backgroundColor={"red"}
    color={"white"}
    flexDirection={"row"}
    justifyContent={"space-evenly"}
    width={"15vw"}
    height={"5vh"}>
    <ListItem
      alignSelf={"center"}
      flexBasis={"100px"}
      backgroundColor={"blue"}>
      Bananas
    </ListItem>
    <ListItem flexBasis={"100px"}>Apples</ListItem>
    <ListItem flexBasis={"100px"}>Oranges</ListItem>
  </List>
);
