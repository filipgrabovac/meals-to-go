import React from "react";
import { Text, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const Title = styled.Text`
    padding: 16px;
  `;

  const {
    name = "somerest",
    icon,
    photos = [
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    ],
    address = "myAdress",
    isOpenNow = true,
    rating = 0,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cardImage} />
      <Title style={styles.title}>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    paddingBottom: 0,
  },
  cardImage: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 16,
  },
});
