import React from "react";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import Star from "../../../../../../assets/star.js";
import openSign from "../../../../../../assets/open.js";
import { Spacer } from "../../../../spacer/spacer.component.js";
import { Text } from "../../../../typography/text.component.js";
import {
  RestaurantCard,
  StyledImage,
  Info,
  Adress,
  Rating,
  Row,
  InfoWrapper,
} from "./restaurants-info-card.styles.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <StyledImage source={{ uri: photos[0] }}></StyledImage>
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={Star} width={20} height={20} />
            ))}
          </Rating>
          <InfoWrapper>
            {isClosedTemporarily ? (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            ) : isOpenNow ? (
              <SvgXml xml={openSign} width={20} height={20} style={{}} />
            ) : null}

            <Spacer position="left" size="medium">
              <Image width={15} height={15} source={{ uri: icon }} />
            </Spacer>
          </InfoWrapper>
        </Row>
        <Adress>100 random street</Adress>
      </Info>
    </RestaurantCard>
  );
};
