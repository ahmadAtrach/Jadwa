import React, { useState } from "react";
import { styles } from "../../constants/Style";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import {
  Button,
  Input,
  Text,
  Layout,
  Icon,
  Divider,
  List,
  SelectItem,
  Card,
  IndexPath,
  Select,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { Value } from "react-native-reanimated";
const PlusIcon = (props: any) => <Icon {...props} name="plus" />;
const MinusIcon = (props: any) => <Icon {...props} name="minus" />;
const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function SalesForecast({
  route,navigation,
}: StackScreenProps<RootStackParamList, "Productivity">) {
  function onPressLearnMore() {
    navigation.navigate("MarketAnalysis");
  }

  interface product {
    product_unit: String;
    quanity: String;
    selling_prices:[];
  }
  let market_analysis = {
    product_unit: "",
    quality: "",
    selling_prices: [],
  };
  //declration form variables
  const pro_type = ["Liter", "Kg", "G", "Ton", "Head", "Piece"];
  const [SellingUnit, setSellingUnit] = React.useState("");
  const [quantity, setquantity] = React.useState("");
  const [proUnit, setProUnit] = React.useState(new IndexPath(0));
  const pro_types_Value = pro_type[proUnit.row];
  const renderOption = (title: any) => <SelectItem key={title} title={title} />;
  const [seasonData, setSeasonData] = React.useState(
    market_analysis.selling_prices
  );
  const [switcherData, setSwitcherData] = React.useState(true);
  const renderOptionPrice = (title: any) => (
    <SelectItem key={title} title={title} />
  );
  const renderOptionQuality = (title: any) => (
    <SelectItem key={title} title={title} />
  );

  const renderItemHeader = (headerProps: any, info: any) => (
    <View {...headerProps}>
      <View style={styles.flex}>
        <Text style={[{ fontSize: 18 }, styles.title_text]}>
          Product {info.index+1}
        </Text>
        <Button
          style={[styles.ml_auto]}
          size="tiny"
          accessoryRight={MinusIcon}
          onPress={() => deleteSeasonRow(info.index)}
        ></Button>
      </View>
    </View>
  );
let data = new Array(route.params?.itemId?.seasons?.length-1).fill({
  
});

  const renderItem = (info: any) => (
    <Card
      key={info.index}
      style={styles.mt_1}
      status="danger"
      header={(headerProps) => renderItemHeader(headerProps, info)}
    >
      <Text style={[styles.header_text, { fontSize: 16 }]}>Quantity</Text>
      <Text>{info.item.competitor_main_strenght}</Text>
      <Divider style={styles.mt_1} />
      <Text style={[styles.header_text, { fontSize: 16 }]}>Selling Unit</Text>
      <Text>{info.item.competitor_name}</Text>
      <Divider style={styles.mt_1} />
      <Text style={[styles.header_text, { fontSize: 16 }]}>Product Prices</Text>
      {info?.item?.prices?.map((el: any, index: any) => (
        <View key={index}>
          <Text>
            {el.prices?.price} $$ in season {index + 1}{" "}
          </Text>
        </View>
      ))}
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
          <Text style={[styles.header_text, styles.mt_1]}>Sales Forcast</Text>
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
            <Text
              style={[
                styles.mt_1,
                styles.secondary_color,
                styles.header_text_3,
              ]}
            >
              Add Products
            </Text>
            <List
              style={styles.container}
              data={listData()}
              renderItem={renderItem}
            />
            {/* this Productivity Unit   field */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Selling Unit
            </Text>
            <Select
              value={pro_types_Value}
              selectedIndex={proUnit}
              onSelect={(index: any) => setProUnit(index)}
            >
              {pro_type.map(renderOption)}
            </Select>
            {/* premises ownership field end  */}
            {/* this is Competitor Strengths field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>Quantity</Text>
            <Input
              keyboardType='numeric'
              multiline={true}
              placeholder="Quantity"
              onChangeText={(string) => setquantity(string)}
            />
            {/* Competitor Strengths field end  */}

            {data.map((el, index) => (
              <View>
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  Selling Price (season {index + 1})
                </Text>
                <Input
                  keyboardType='numeric'
                  key={index}
                  placeholder="Competitor Name"
                  onChangeText={(number) => setPrices(parseInt(number), index)}
                />
              </View>
            ))}
            {/* Competitor Weaknesses  field end  */}
            <Button
              style={styles.mt_1}
              size="medium"
              status="info"
              accessoryRight={PlusIcon}
              //   onPress={onPressLearnMore}
              onPress={addEquipments}
            >
              Add
            </Button>
          </Layout>
          <Layout style={[styles.center_col_container]}>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
  function deleteSeasonRow(index: any) {
    setSwitcherData(true);
    seasonData.splice(index, 1);
    setSeasonData(seasonData);
    console.log(index);
  }
  function addEquipments() {
    let competitor = {
      competitor_name: pro_types_Value,
      competitor_main_strenght: quantity,
      prices: data,
    };
    seasonData.push(competitor);
    setSwitcherData(true);
  }
  function listData() {
    if (switcherData == true) {
      setSwitcherData(false);
      return seasonData;
    } else {
      return seasonData;
    }
  }
  function setPrices(number:number, index:number){
    console.log(number, index);
    let prices = {
      id: index,
      price: number,
    };

    //console.log(data);
    data[index] = { prices };
    market_analysis.selling_prices[index] = prices;
  }
}

export default SalesForecast;
