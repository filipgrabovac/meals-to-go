import { Card } from "react-native-paper";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  borderradius: ${(props) => props.theme.sizes[0]};
  paddingbottom: ${(props) => props.theme.space[0]};
  background-color: white;
`;

export const StyledImage = styled(Card.Cover)`
  border-bottom-right-radius: ${(props) => props.theme.space[0]};
  border-bottom-left-radius: ${(props) => props.theme.space[0]};
  margin: 16px;
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Adress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoWrapper = styled(View)`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
