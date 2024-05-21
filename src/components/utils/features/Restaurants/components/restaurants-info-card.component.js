import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import Star from "../../../../../../assets/star.js";
import openSign from "../../../../../../assets/open.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
  `;

  const RestaurantCard = styled(Card)`
    borderradius: ${(props) => props.theme.sizes[0]};
    paddingbottom: ${(props) => props.theme.space[0]};
    background-color: white;
  `;

  const SyledImage = styled(Card.Cover)`
    border-bottom-right-radius: ${(props) => props.theme.space[0]};
    border-bottom-left-radius: ${(props) => props.theme.space[0]};
    margin: 16px;
  `;
  const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const Adress = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;

  const {
    name = "somerest",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    ],
    address = "myAdress",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
  `;

  const Row = styled(View)`
    flex-direction: row;
    justify-content: space-between;
  `;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <SyledImage source={{ uri: photos[0] }}></SyledImage>
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={Star} width={20} height={20} />
            ))}
          </Rating>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {isClosedTemporarily ? (
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            ) : isOpenNow ? (
              <SvgXml xml={openSign} width={20} height={20} />
            ) : null}
            <Image width={15} height={15} source={{ uri: icon }} />
          </View>
        </Row>
        <Adress>100 random street</Adress>
      </Info>
    </RestaurantCard>
  );
};
