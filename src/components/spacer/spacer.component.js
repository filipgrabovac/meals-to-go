import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const sizeVariants = {
  small: "4",
  medium: "8",
  large: "16",
};

const positionVariants = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const getVariant = (position, size) =>
  `${positionVariants[position]}:${sizeVariants[size]}px;`;

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
