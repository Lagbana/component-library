import React from "react";
import { List, ListItem } from "./List";

export default {
  title: "List",
};

const namesList: string[] = ["Adam", "Brahim", "Charles", "Debo", "Eddy"];

export const VerticalList = () => (
  <List
    backgroundColor={"red"}
    color={"white"}
    flexDirection={"column"}
    width={"15%"}
  >
    <ListItem
      order={3}
      flexBasis={"15vh"}
      backgroundColor={"blue"}
      alignItems={"center"}
    >
      1. Banana
    </ListItem>
    <ListItem
      order={1}
      flexBasis={"15vh"}
      backgroundColor={"blue"}
      alignItems={"center"}
    >
      2. Apple
    </ListItem>
    <ListItem order={2} flexBasis={"15vh"} backgroundColor={"orange"}>
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
    height={"5vh"}
  >
    <ListItem alignSelf={"center"} flexBasis={"100%"} backgroundColor={"blue"}>
      Bananas
    </ListItem>
    <ListItem flexBasis={"100%"}>Apples</ListItem>
    <ListItem flexBasis={"100%"}>Oranges</ListItem>
  </List>
);

export const DynamicList = () => {
  const listItems = namesList.map((item, index) => (
    <ListItem key={index.toString()} color={"#000"} flexBasis={"5vh"}>
      {item}
    </ListItem>
  ));
  return (
    <List flexDirection={"column"} backgroundColor={"#c4c4c4"} width={"20vw"}>
      {listItems}
    </List>
  );
};
