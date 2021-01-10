import React from "react";
import Header from "./Header";

export default {
  title: "Header",
};

export const PrimaryHeader = () => (
  <Header size='small' backgroundColor="blue" textColor="#fff">
    Header
  </Header>
);
export const SecondaryHeader = () => (
  <Header size='medium' backgroundColor="blue" textColor="#fff">
    Header
  </Header>
);
export const TertiaryHeader = () => (
  <Header size='large' backgroundColor="blue" textColor="#fff">
    Header
  </Header>
);
