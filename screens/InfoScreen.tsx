import React from "react";
import colors from "../constants/Colors";
import {Svg} from "expo";
import {
  Image,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableHighlight,
  Platform,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
function InfoScreen({ 
  navigation,
}:StackScreenProps<RootStackParamList, 'Sectors'>) {
  function onPressLearnMore() {
     navigation.navigate('Sectors');
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.center_container}><Text style={styles.title_text}>JADWA</Text></View>
        <View style={[styles.center_container, styles.mt_5]}>
          <Image style={styles.Info_pic} source={require("../assets/pictures/info_pic-280x155.png")} />
        </View>
        <View style={styles.center_container}><Text style={[styles.mt_1,styles.title_text,styles.w_80,styles.text_center]}>Creating a complete business plan will take just 5 minutes by filing all the required Filed</Text></View>
        <View style={styles.cus_button}>
          <TouchableHighlight
            style={styles.button_next}
            onPress={onPressLearnMore}>
            <Text style={{ color: colors.white, fontSize: 20 }}>
              Next
            </Text>
          </TouchableHighlight>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text_center:{
    textAlign:"center"
  },
  mt_5:{
    marginTop:"30%"
  },
  mt_1:{
    marginTop:"5%"
  },
  w_80:{
    width:"80%"
  },
  Info_pic:{
    height :155,
    width : 280
  },
  title_text :{
    fontSize:17,
    color : colors.secondary,
    fontFamily:'righteous-regular'
  },
  container: {
    marginTop: Platform.OS === "android"? 20 : 0,
    flex: 1,
    flexDirection: "column",
    backgroundColor:colors.white
  },
  center_container:{
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column-reverse",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },
  cus_button: {
    flex:1,
    flexDirection:"column-reverse",
    alignItems: "center",
    width: "100%",
    marginBottom: 120,
  },
  button_next:{
    height: 75,
    marginTop: 10,
    width: 180,
    backgroundColor: colors.primary,
    borderRadius: 68,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default InfoScreen;
