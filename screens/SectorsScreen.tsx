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
import { color } from "react-native-reanimated";
function SectorsScreen() {
     var progress =30;
    function onPressLearnMore() {
        console.log("hahaha");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.progress_bar}></View>
            <View style={styles.center_container}><Text style={styles.title_text}>JADWA</Text></View>
            <View style={[styles.flex,styles.w_80]}>
                <View style={[styles.center_container]}><Text style={[styles.header_text,styles.mt_1]}>Choose the Sector</Text></View>
                <View style={[styles.round,styles.mt_1]}><Text>O</Text></View>
            </View>
        </SafeAreaView>
    );
    }
const styles = StyleSheet.create({
    flex:{
        flex:1,
        flexDirection:"row"
    },
    round:{
        borderRadius : 1000,
        height:72,
        width:72,
        backgroundColor:'red'
    },
    progress_bar:{
    height:5,
    backgroundColor:colors.primary,
    width:'10%'
    },
    header_text:{
    color: colors.primary,
    fontFamily:'rubik',
    fontSize:25
    },
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

export default SectorsScreen;
