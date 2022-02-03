import React from "react";
import { Button } from "./Button";

export default {
  title: "MyButton",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "MyButton",
};
export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "MyButton",
};
