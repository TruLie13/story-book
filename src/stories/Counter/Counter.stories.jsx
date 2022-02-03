import React from "react";
import Counter from "./Counter";
import decreaseCount from "./Counter";
import increaseCount from "./Counter";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter />;

export const CounterButtons = Template.bind({});
CounterButtons.args = {};

export const CounterCustomButtons = Template.bind({});
CounterCustomButtons.args = {
  label: decreaseCount.label,
  onClick: { decreaseCount, increaseCount },
};
