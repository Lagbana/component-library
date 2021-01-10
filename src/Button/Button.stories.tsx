import React from "react";
import Button from "./index";

export default {
  title: "Button",
};

export const PrimaryButton = () => (
  <Button
    buttonColor="#003366"
    textColor="#fff"
    padding="0.5em 1em"
    style={{ margin: "1em" }}
    onClick={() => console.log("Button Clicked")}
  >
    Button
  </Button>
);
