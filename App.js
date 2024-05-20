import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.navbar}>
          <Text>search</Text>
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "green",
    padding: 20,
  },
  list: {
    backgroundColor: "blue",
    padding: 20,
    flex: 1,
  },
});
