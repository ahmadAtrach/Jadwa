import React, { useState } from "react";
import { styles } from "../../constants/Style";

import { ScrollView, View } from "react-native";
import {
  Button,
  Input,
  Text,
  Layout,
  Datepicker,
  Icon,
  RadioGroup,
  Radio,
  IndexPath,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
const CalendarIcon = (props: any) => <Icon {...props} name="calendar" />;

const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function AboutThePremises({
  navigation,
}: StackScreenProps<RootStackParamList, "AboutTheBusiness">) {
  function onPressLearnMore() {
    navigation.navigate("AboutTheBusiness");
  }
  const premises_types = [
    "PhD",
    "Masters",
    "BS/BA",
    "High School",
    "Technical School",
  ];
  let premises = {
    location: "",
    plot_number: 0,
    plot_area: 0,
    premises_ownership: "",
    number_of_shared:0,
    monthly_rent:0,
    rent_period:"",
    land_surrounding:"",
    land_soil_description:"",
    land_nature_description:"" 
  };
  //note that pt stand for plot and pre stand for premises 
  //declration form variables 
  const [location, setLocation] = React.useState("");
  const [ptNumber, setPtNumber] = React.useState(0);
  const [ptArea, setPtArea] = React.useState(0);
  const [pretOwnership, setPreOwnership] = React.useState(new IndexPath(0));
  const [numberOfSHares, setNumberOfSHares] = React.useState(0);
  const [monthlyRent, setMonthlyRent] = React.useState(0);
  const [rentPeriod, setRentPeriod] = React.useState("");
  const [landSurrounding, setLandSurrounding] = React.useState("");
  const [landSoilDescription, setLandSoilDescription] = React.useState("");
  const [landNatureDescription, setLandNatureDescription] = React.useState("");
  const premises_types_Value = premises_types[pretOwnership.row];

  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_3}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>
            About The Premises{" "}
          </Text>
        </Layout>
      </View>
      <ScrollView>
        <Layout
          style={[styles.center_container, styles.d_block, styles.ml_r_1]}
        >
          <Layout style={[styles.center_col_container]}>
            {/* this is Loaction field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>Loaction</Text>
            <Input
              placeholder="Location"
              onChangeText={(location) => setLocation(location)}
            />
            {/* Loaction field end  */}
            {/* this is Plot Number field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Plot Number
            </Text>
            <Input
              placeholder="Plot Number"
              keyboardType="numeric"
              onChangeText={(plotNumber) => setPtNumber(parseInt(plotNumber))}
            />
            {/* Plot Number field end  */}
            {/* this is Plot Area field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Plot Area in sqm
            </Text>
            <Input
              placeholder="Plot Area"
              keyboardType="numeric"
              onChangeText={(plotArea) => setPtNumber(parseInt(plotArea))}
            />
            {/* Plot Plot Area field end  */}
            {/* this premises ownership  field */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Level of Education
            </Text>
            <Select
              value={premises_types_Value}
              selectedIndex={selecteNOC}
              onSelect={(index) => setselecteNOC(index)}
            >
              {premises_types.map(renderOption)}
            </Select>
            {/* premises ownership field end  */}
          </Layout>
        </Layout>
      </ScrollView>
    </View>
  );
}

export default AboutThePremises;
