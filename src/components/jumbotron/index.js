import React from "react";
import {
  Container,
  Image,
  Title,
  Inner,
  Pane,
  SubTitle,
  Item,
} from "./styles/jumbotron";

export const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProp }) {
  return <Pane {...restProp}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProp }) {
  return <Title {...restProp}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProp }) {
  return <SubTitle {...restProp}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProp }) {
  return <Image {...restProp}>{children}</Image>;
};

export default Jumbotron;
