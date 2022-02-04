import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card card={args} />;

export const CardStarter = Template.bind({});
CardStarter.args = {
  title: "title",
  description: "description",
  image:
    "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};
