import colors from './Colors';
import {StyleSheet,Platform} from "react-native";
import { block } from 'react-native-reanimated';
export const  styles = StyleSheet.create({
    d_block:{
        flex:1,
        flexDirection:"column",
    },
    sector_paragraph:{
        fontSize:12,
        fontFamily:'rubik', 
        flexWrap:'wrap',
        width:220,
        color:colors.white
    },
    sector_title:{
        color:colors.white,
        fontFamily:'rubik',
        fontSize:20
    },
    sector_child:{
        flex:1,
        flexDirection:"row",
        padding:15,
        justifyContent:"center",
        alignContent:"center"
    },
    sector:{
        height:100,
    },
    sector_icon:{
        height:64,
        width:64
    },
    bg_primary:{
        backgroundColor:colors.primary
    },
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
    rounded_borders_5:{
        borderRadius : 5,
    },
    progress_bar:{
        height:5,
        backgroundColor:colors.primary,
        width:'10%'
    },
    progress_bar_2:{
        height:5,
        backgroundColor:colors.primary,
        width:'20%'
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
    p_1:{
        padding:"1%"
    },
    w_80:{
        width:"80%"
    },
    w_90:{
        width:'90%'
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
        marginTop: Platform.OS === "android"? 25 : 0,
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
        marginBottom: 140,
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
