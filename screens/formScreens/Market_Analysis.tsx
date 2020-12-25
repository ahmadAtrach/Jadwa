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
  IndexPath,
  Select,
  SelectItem,
  Card,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
const PlusIcon = (props: any) => <Icon {...props} name="plus" />;
const MinusIcon = (props: any) => <Icon {...props} name="minus" />;
const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function MarketAnalysis({
  navigation,
}: StackScreenProps<RootStackParamList, "SalesForecast">) {
  function onPressLearnMore() {
    navigation.navigate("SalesForecast");
  }
  interface competitor {
    competitor_name: String;
    competitor_main_strenght: String;
    competitor_main_weakness: String;
  }
  let market_analysis = {
    competitors: [],
    advantage:"",
    Weaknesses:"",
    quality: 0,
    price: 0,
  };
  const qualities = ["1", "2", "3", "4", "5"];
  const prices = ["1", "2", "3", "4", "5"];
  //declration form variables
  const [competitorName, setCompetitorName] = React.useState("");
  const [competitorMainS, setCompetitorMainS] = React.useState("");
  const [competitorMainW, setCompetitorMainW] = React.useState("");
  const [yourAdv, SetYourAdv] = React.useState("");
  const [yourWea, SetyourWea] = React.useState("");
  const [competitosData, setCompetitorData] = React.useState(
    market_analysis.competitors
  );
  const [switcherData, setSwitcherData] = React.useState(true);
  const [price, setPrice] = React.useState(new IndexPath(0));
  const [quality, setQuality] = React.useState(new IndexPath(0));
  const renderOptionPrice = (title: any) => (
    <SelectItem key={title} title={title} />
  );
  const renderOptionQuality = (title: any) => (
    <SelectItem key={title} title={title} />
  );
  const priecValue = prices[price.row];
  const qualityValue = qualities[quality.row];

  const renderItemHeader = (headerProps: any, info: any) => (
    <View {...headerProps}>
      <View style={styles.flex}>
        <Text style={[{ fontSize: 18 }, styles.title_text]}>
          {info.item.competitor_name}
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

  const renderItem = (info: any) => (
    <Card
      key={info.index}
      style={styles.mt_1}
      status="danger"
      header={(headerProps) => renderItemHeader(headerProps, info)}
    >
      <Text style={[styles.header_text, { fontSize: 16 }]}>
        Competitor strengths
      </Text>
      <Text>{info.item.competitor_main_strenght}</Text>
      <Divider style={styles.mt_1} />
      <Text style={[styles.header_text, { fontSize: 16 }]}>
        Competitor weaknesses
      </Text>
      <Text>{info.item.competitor_main_weakness}</Text>
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
            <Text
              style={[
                styles.mt_1,
                styles.secondary_color,
                styles.header_text_3,
              ]}
            >
              Add Competitors
            </Text>
            <List
              style={styles.container}
              data={listData()}
              renderItem={renderItem}
            />
            {/* this is competitor name field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              what is the name of your competitor
            </Text>
            <Input
              placeholder="Competitor Name"
              onChangeText={(string) => setCompetitorName(string)}
            />
            {/* competitor name field end  */}
            {/* this is Competitor Strengths field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What are his main strengths?
            </Text>
            <Input
              multiline={true}
              placeholder="Competitor Strengths "
              onChangeText={(string) => setCompetitorMainS(string)}
            />
            {/* Competitor Strengths field end  */}
            {/* this is Competitor Weaknesses field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What are his main weaknesses?
            </Text>
            <Input
              multiline={true}
              placeholder="Competitor Weaknesses "
              onChangeText={(string) => setCompetitorMainW(string)}
            />
            {/* Competitor Weaknesses  field end  */}
            <Button
              style={styles.mt_1}
              size="medium"
              status="info"
              accessoryRight={PlusIcon}
              onPress={addEquipments}
            >
              Add
            </Button>
            {/* this is competitor name field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What are your strengths?
            </Text>
            <Input
              placeholder="Your Strengths"
              onChangeText={(string) => SetYourAdv(string)}
            />
            {/* competitor name field end  */}
            {/* this is competitor name field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What are your weaknesses?
            </Text>
            <Input
              placeholder="Your Weaknesses"
              onChangeText={(string) => SetyourWea(string)}
            />
            {/* competitor name field end  */}
            {/* this price field */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              How do you scale your price (5 is highest)
            </Text>
            <Select
              value={priecValue}
              selectedIndex={price}
              onSelect={(index) => setPrice(index)}
            >
              {prices.map(renderOptionPrice)}
            </Select>
            {/* price field end  */}
            {/* this price field */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              How do you scale your quality (5 is highest)
            </Text>
            <Select
              value={qualityValue}
              selectedIndex={quality}
              onSelect={(index) => setQuality(index)}
            >
              {qualities.map(renderOptionQuality)}
            </Select>
            {/* price field end  */}
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
    competitosData.splice(index, 1);
    setCompetitorData(competitosData);
    console.log(index);
  }
  function addEquipments() {
    let competitor: competitor = {
      competitor_name: competitorName,
      competitor_main_strenght: competitorMainS,
      competitor_main_weakness: competitorMainW,
    };
    competitosData.push(competitor);
    setSwitcherData(true);
  }
  function listData() {
    if (switcherData == true) {
      setSwitcherData(false);
      return competitosData;
    } else {
      return competitosData;
    }
  }
}

export default MarketAnalysis;
