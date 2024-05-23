import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

export const StyledSearchBar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
  border-width: 0.5px;
  border-color: ${(props) => props.theme.colors.ui.secondary};
  background-color: white;
`;

export const StyledList = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;
export const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
