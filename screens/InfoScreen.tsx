import React from "react";
import colors from "../constants/Colors";
import {styles} from '../constants/Style';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
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
export default InfoScreen;
