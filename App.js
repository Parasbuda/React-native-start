import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Alert,
  View,
  TouchableNativeFeedback,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked");
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World this is a very long text a very long text we are very long
      </Text>
      <Button
        color="red"
        title="Click Me !"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes",onPress:()=>console.log("yes") },
            { text: "No" ,onPress:()=>console.log("No")},
          ])
        }
      />
      <TouchableNativeFeedback onPress={() => console.log("Touched")}>
        {/* <Image source={{
        width:200,
        height:300, 
        uri:"https://picsum.photos/id/237/200/300"}} /> */}
        <View
          style={{ height: 90, width: 200, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
