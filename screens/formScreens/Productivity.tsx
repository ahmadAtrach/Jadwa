import React, { useState } from "react";
import { styles } from "../../constants/Style";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import {
  Button,
  Input,
  Text,
  Layout,
  Datepicker,
  Icon,
  Divider,
  List,
  ListItem,
  IndexPath,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
const PlusIcon = (props: any) => <Icon {...props} name="plus" />;
const MinusIcon = (props: any) => <Icon {...props} name="minus" />;
const data = new Array(1).fill({
  title: "Season Period ",
  description: "Season hive",
});
const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function Productivity({
  navigation,
}: StackScreenProps<RootStackParamList, "MarketAnalysis">) {
  function onPressLearnMore() {
    navigation.navigate("MarketAnalysis");
  }
  const renderItem = ({ item, index }: any) => (
    <ListItem
      key={index}
      title={`Period of season ${index} is ${item.title} month`}
      description={`Productivity per hive of season ${index} is ${item.description} ${pro_types_Value} `}
      accessoryRight={() => renderItemAccessory(index)}
    />
  );
  const pro_type = ["Liter", "Kg", "G", "Ton", "Head", "Piece"];
  let other_income = {
    number_of_beehivees: 0,
    p_unit: "",
    is_sales_seasonel: true,
    seasons: new Array(),
    other_items: "",
  };
  //declration form variables
  // pro stand here for productivity
  const [numOfBeehives, setNumOfBeehives] = React.useState(0);
  const [proUnit, setProUnit] = React.useState(new IndexPath(0));
  const [isSeasonal, setIsSeasonal] = React.useState(0);
  const [seasonPeriod, setSeasonPeriod] = React.useState("");
  const [seasonQuantity, setSeasonQuantity] = React.useState(0);
  const [seasonData, setSeasonData] = React.useState(data);
  const [switcherData, setSwitcherData] = React.useState(true);
  const [otherItems, setOtherItems] = React.useState("");
  const pro_types_Value = pro_type[proUnit.row];
  const [hourCounter, setHourCounter] = React.useState(0);
  const renderOption = (title: any) => <SelectItem key={title} title={title} />;
  const renderItemAccessory = (props: any) => (
    <View>
      {(props != 0 ? true : false) && (
        <Button
          onPress={() => deleteSeasonRow(props)}
          accessoryRight={MinusIcon}
          size="tiny"
        ></Button>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_7}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>Productivity</Text>
        </Layout>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <Layout
            style={[styles.center_container, styles.d_block, styles.ml_r_1]}
          >
            {/* this is Number of Beehivesfield   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Number of Beehives
            </Text>
            <Input
              placeholder="Number of Beehives"
              onChangeText={(info) => setNumOfBeehives(parseInt(info))}
            />
            {/* Number of Beehives field end  */}
            {/* this Productivity Unit   field */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Level of Education
            </Text>
            <Select
              value={pro_types_Value}
              selectedIndex={proUnit}
              onSelect={(index) => setProUnit(index)}
            >
              {pro_type.map(renderOption)}
            </Select>
            {/* premises ownership field end  */}
            {/* this is seasonal field  */}
            <React.Fragment>
              <Text style={[styles.mt_1, styles.secondary_color]}>
                Are you sales seasonal?
              </Text>
              <RadioGroup
                selectedIndex={isSeasonal}
                onChange={(bool) => setIsSeasonal(bool)}
              >
                <Radio status="danger">Yes</Radio>
                <Radio status="danger">No</Radio>
              </RadioGroup>
            </React.Fragment>
            {/* seasonal field end  */}
            {/* this is equipments filed field   */}
            {(isSeasonal == 0 ? true : false) && (
              <View>
                <Text
                  style={[
                    styles.mt_1,
                    styles.secondary_color,
                    styles.header_text_3,
                  ]}
                >
                  Add Seasons Details
                </Text>
                <List
                  data={switcherData ? listData() : data}
                  ItemSeparatorComponent={Divider}
                  renderItem={renderItem}
                />
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  What is the period of season (season {data.length}) ? (Months)
                </Text>
                <Input
                  keyboardType="numeric"
                  placeholder="Period of Season"
                  onChangeText={(name) => setSeasonPeriod(name)}
                />
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  Productivity per hive {pro_types_Value} (season {data.length})
                  ?
                </Text>
                <Input
                  keyboardType="numeric"
                  placeholder="Productivity Per Hive"
                  onChangeText={(quantity) =>
                    setSeasonQuantity(parseInt(quantity))
                  }
                />
                <Button
                  style={styles.mt_1}
                  size="medium"
                  status="warning"
                  accessoryRight={PlusIcon}
                  onPress={addEquipments}
                >
                  Add
                </Button>
              </View>
            )}

            {/* equipments field end  */}
            {/* this is Other Items field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What other items are you selling?
            </Text>
            <Input
              placeholder="Other Items "
              onChangeText={(info) => setNumOfBeehives(parseInt(info))}
            />
            {/* Number of other Items field end  */}

            <Layout style={[styles.center_col_container]}>
              <Layout
                style={[styles.center_container, styles.mt_1, styles.mb_1]}
              >
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
      </KeyboardAvoidingView>
    </View>
  );
  function deleteSeasonRow(index: any) {
    setSwitcherData(true);
    data.splice(index, 1);
    setSeasonData(data);
    console.log(index);
  }
  function addEquipments() {
    let newData = data;
    let equipment = {
      title: seasonPeriod,
      description: seasonQuantity,
    };
    newData.push(equipment);
    setSwitcherData(true);
    setSeasonData(newData);
  }
  function listData() {
    if (switcherData == true) {
      setSwitcherData(false);
      return seasonData;
    } else {
      return data;
    }
  }
}

export default Productivity;
