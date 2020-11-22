import React from "react";
import {styles} from '../constants/Style';
import {Image,Text,View,ScrollView,TouchableHighlight,} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
function SectorsScreen({ 
  navigation,
}:StackScreenProps<RootStackParamList, 'Form'>) {
    function onPressLearnMore() {
        navigation.navigate('Form');
    }
    return (
        <ScrollView style={[styles.container]}>
            <View style={styles.progress_bar}></View>
            <View style={styles.center_container}><Text style={styles.title_text}>JADWA</Text></View>
            <View style={[styles.center_container]}><Text style={[styles.header_text,styles.mt_1]}>Choose The Sector</Text></View>
           
            <View style={[styles.center_container,styles.sector]}>
                <TouchableHighlight onPress={onPressLearnMore} style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Honey Manufacturing </Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
             <View style={[styles.center_container,styles.sector,styles.mt_1]}>
                <View style={[styles.sector,styles.bg_primary,styles.w_90,styles.rounded_borders_5, styles.mt_1]}>
                    <View style={[styles.flex,styles.sector_child]}>
                        <Image style={styles.sector_icon} source={require("../assets/pictures/sector_icon.png")}/>
                        <View style={styles. p_1}>
                            <Text style={styles.sector_title}>Farming</Text>
                            <Text style={[styles.sector_paragraph,]} numberOfLines={3}>Lorem ipsum dolor  dolor um dolor  dolor Lo Lorem ipsum dolor sit amet consectetur sit amet consectetur amet consectetur amet consectetur</Text>
                        </View>
                    </View>
                </View>
            </View>
        
        </ScrollView>
    );
    }
export default SectorsScreen;
