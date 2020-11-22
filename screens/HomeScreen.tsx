import React from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import colors from "../constants/Colors";
import {styles} from '../constants/Style';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableHighlight,
} from "react-native";

function HomeScreen({ 
  navigation,
}:StackScreenProps<RootStackParamList, 'Info'>) {

  function onPressLearnMore()  {
    console.log("worked");
    navigation.navigate('Info');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/pictures/home.png")}
        style={styles.image}
      >
        <View style={styles.cus_button}>
          <TouchableHighlight
            style={{
              height: 75,
              marginTop: 10,
              width: 281,
              backgroundColor: colors.secondary,
              borderRadius: 68,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onPressLearnMore}
          >
            <Text style={{ color: colors.white, fontSize: 20,fontFamily:'righteous-regular'}}>
              Create a Business Plan
            </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     flexDirection: "column-reverse",
//   },
//   cus_button: {
//     alignItems: "center",
//     width: "100%",
//     marginBottom: 120,
//   },
// });

export default HomeScreen;
