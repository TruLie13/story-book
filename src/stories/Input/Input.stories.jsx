import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const SimpleInput = Template.bind({});
SimpleInput.args = {};

export const InputWithInitialValue = Template.bind({});
InputWithInitialValue.args = {
  value: "Initial Value",
};

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  placeholder: "Start typing",
};

export const InputWithClearButton = Template.bind({});
InputWithClearButton.args = {
  clear: true,
};
