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
  Card,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
const PlusIcon = (props: any) => <Icon {...props} name="plus" />;
const MinusIcon = (props: any) => <Icon {...props} name="minus" />;
// const data = new Array(8).fill({
//   title: "Season Period ",
//   description: "Season hive",
// });
const data = new Array(8).fill({
  title: "Item",
  hello: "test",
});


//  const renderItemAccessory = (props: any) => (
//    <View>
//      {(props != 0 ? true : false) && (
//        <Button
//          onPress={() => deleteEquipmentRow(props)}
//          accessoryRight={MinusIcon}
//          size="tiny"
//        ></Button>
//      )}
//    </View>
//  );

const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function MarketAnalysis({
  navigation,
}: StackScreenProps<RootStackParamList, "Productivity">) {
  function onPressLearnMore() {
    navigation.navigate("Productivity");
  }
//   const renderItem = ({ item, index }: any) => (
//     <ListItem
//       key={index}
//       title={`Period of season ${index} is ${item.title} month`}
//       description={`Productivity per hive of season ${index} is ${item.description} ${pro_types_Value} `}
//       accessoryRight={() => renderItemAccessory(index)}
//     />
//   );
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
  const renderItemHeader = (headerProps: any, info: any) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps: any) => (
    <Text {...footerProps}>By Wikipedia</Text>
  );

  const renderItem = (info: any) => (
      
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}
    >
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_8}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>Market Analysis</Text>
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
            <List
              style={styles.container}
              data={data}
              renderItem={renderItem}
            />
            <Layout style={[styles.center_col_container]}>
              <Layout
                style={[styles.center_container, styles.mt_1, styles.mb_1]}
              >
                <Button
                  size="medium"
                  status="info"
                  accessoryRight={StarIcon}
                  //   onPress={onPressLearnMore}
                  onPress={() => console.log(renderItem)}
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

export default MarketAnalysis;
