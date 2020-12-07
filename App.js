import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  Alert,
  View,
  TouchableNativeFeedback,
  Button,
  SafeAreaView,
  StatusBar,
  Platform
} from "react-native";

// import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks"

export default function App() {
  // const handlePress = () => console.log("Text clicked");
  
  // const {landscape}=useDeviceOrientation()
  // console.log(landscape)
  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>
        Hello World
      </Text> */}
      {/* <Button
        color="red"
        title="Click Me !"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes",onPress:()=>console.log("yes") },
            { text: "No" ,onPress:()=>console.log("No")},
          ])
        }
      /> */}
      {/* <Button
        color="blue"
        title="Click Me !"
        onPress={() =>
          Alert.prompt("My title", "My Message", (text) => console.log(text))
        }
      /> */}
      {/* <TouchableNativeFeedback onPress={() => console.log("Touched")}>
        <Image source={{
        width:200,
        height:300, 
        uri:"https://picsum.photos/id/237/200/300"}} />
        <View
          style={{ height: 90, width: 200, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback> */}
      {/* <View style={{backgroundColor:"blue",width:"100%",height:landscape?"100%":"30%"}}>
      
      </View> */}
      <View style={{backgroundColor:"blue",width:100,height:100}}/>
      <View style={{backgroundColor:"gold",width:100,height:100 }}/>
      <View style={{backgroundColor:"tomato",width:100,height:100}}/>
      {/* <View style={{backgroundColor:"grey",width:100,height:100}}/> */}
      {/* <View style={{backgroundColor:"green",width:100,height:100}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    // flexWrap:"wrap",
    // alignContent:"center"
  },
});
