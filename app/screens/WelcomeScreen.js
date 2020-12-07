import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <div>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      ></ImageBackground>
    </div>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default WelcomeScreen;
