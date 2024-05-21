import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RestaurantsScreen } from "./src/components/utils/features/Restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  let [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  let [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
