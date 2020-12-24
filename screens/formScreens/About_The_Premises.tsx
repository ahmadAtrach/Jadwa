import React from "react";
import { styles } from "../../constants/Style";

import { ScrollView, View } from "react-native";
import {
  Button,
  Input,
  Text,
  Layout,
  Icon,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function AboutThePremises({
  navigation,
}: StackScreenProps<RootStackParamList, "NewProject">) {
  function onPressLearnMore() {
    navigation.navigate("NewProject");
  }
  const premises_types = [
    "Fully Owned",
    "Partially Owned",
    "Rented",
    "Indulgence",
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
  const renderOption = (title: any) => <SelectItem key={title} title={title} />;


  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_5}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>
            About The Premises
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
              selectedIndex={pretOwnership}
              onSelect={(index) => setPreOwnership(index)}
            >
              {premises_types.map(renderOption)}
            </Select>
            {/* premises ownership field end  */}
            {(premises_types_Value == "Partially Owned" ? true : false) && (
              <View>
                {/* this is Number of Shares field  */}
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  Number of Shares
                </Text>
                <Input
                  placeholder="Number of Shares"
                  keyboardType="numeric"
                  onChangeText={(shares) => setNumberOfSHares(parseInt(shares))}
                />
                {/* Number of Shares field end  */}
              </View>
            )}
            {(premises_types_Value == "Rented" ? true : false) && (
              <View>
                {/* this is monthly rent field  */}
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  Monthly rent fees in $$
                </Text>
                <Input
                  placeholder="monthly rent fees in $$"
                  keyboardType="numeric"
                  onChangeText={(fees) => setMonthlyRent(parseInt(fees))}
                />
                {/* monthly rent field end  */}
                {/* this is rent period field  */}
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  Rent period
                </Text>
                <Input
                  placeholder="Rent period"
                  onChangeText={(period) => setMonthlyRent(parseInt(period))}
                />
                {/* rent period field end  */}
              </View>
            )}
            {/* this is Land Surrounding field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Land Surrounding
            </Text>
            <Input
              placeholder="Land Surrounding"
              onChangeText={(surronding) => setLandSurrounding(surronding)}
            />
            {/* Land Surrounding field end  */}
            {/* this is Land soil description field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Land Soil Description
            </Text>
            <Input
              placeholder="Land Soil Description"
              onChangeText={(surronding) => setLandSoilDescription(surronding)}
            />
            {/*Land soil description field end  */}
            {/* this is Land soil description field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Land Nature Description
            </Text>
            <Input
              placeholder="Land Nature Description"
              onChangeText={(land) => setLandNatureDescription(land)}
            />
            {/*Land soil description field end  */}
            <Layout style={[styles.center_container, styles.mt_1, styles.mb_1]}>
              <Button
                size="medium"
                status="info"
                accessoryRight={StarIcon}
                onPress={onPressLearnMore}
              >
                Next
              </Button>
            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </View>
  );
}

export default AboutThePremises;
