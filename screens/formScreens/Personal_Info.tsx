import React, { useState } from "react";
import { styles } from "../../constants/Style";

import { ScrollView, TextInput, View } from "react-native";
import {
  Button,
  Input,
  Text,
  Layout,
  Datepicker,
  Icon,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

import { createAndSavePDF } from "../../hooks/helper";
import { Alert } from "react-native";
import { simpleHtml } from "../../hooks/html";
const CalendarIcon = (props: any) => <Icon {...props} name="calendar" />;
const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function FormScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "OtherIncome">) {
  function onPressLearnMore() {
    navigation.navigate("OtherIncome");
  }
  let personal_info = {
    name: "",
    age: 0,
    gender: "",
    martial_status: "",
    number_of_children: "",
    level_of_education: "",
    major: "",
    university: "",
    industry: "",
    years_of_experience: 0,
  };
  const martial_status = ["Single", "Married", "Divorced", "Widowed"];
  const level_of_education = [
    "PhD",
    "Masters",
    "BS/BA",
    "High School",
    "Technical School",
  ];
  const now = new Date();
  const min: Date = new Date(
    now.getFullYear() - 100,
    now.getMonth(),
    now.getDate()
  );
  const [name, setValue] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectemartial, setIndexmartial] = React.useState(new IndexPath(0));
  const [selecteNOC, setselecteNOC] = React.useState(new IndexPath(0));
  const [
    selectenumber_of_children,
    setSelectenumber_of_children,
  ] = React.useState(0);
  const [major, setMajor] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [years_of_experience, setYears_of_experience] = React.useState(0);
  const renderOption = (title: any) => <SelectItem key={title} title={title} />;
  const martial_status_value = martial_status[selectemartial.row];
  const level_of_education_Value = level_of_education[selecteNOC.row];

  // this is a function that create the PDF to call this function you should call it like this createPdf(simpleHtml(personal_info)
  // note that the simpleHtml funciton is the htmlFactory required by the below function
  // simpleHtml here is imported from the hooks folder in the project
  const createPdf = (htmlFactory: () => any) => async () => {
    try {
      const html = await htmlFactory();
      if (html) {
        await createAndSavePDF(html);
        Alert.alert("Success!", "Document has been successfully saved!");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "Something went wrong...");
    }
  };
  //the function end
  return (
    <ScrollView style={styles.container}>
      <Layout style={styles.progress_bar_2}></Layout>
      <Layout style={styles.center_container}>
        <Text style={styles.title_text}>JADWA</Text>
      </Layout>
      <Layout style={[styles.center_container]}>
        <Text style={[styles.header_text, styles.mt_1]}>Personal Info </Text>
      </Layout>
      <Layout style={[styles.center_container, styles.d_block, styles.ml_r_1]}>
        <Layout style={[styles.center_col_container]}>
          {/* this is name field  */}
          <Text style={[styles.mt_1, styles.secondary_color]}>Full Name:</Text>
          <Input onChangeText={(nextValue) => setValue(nextValue)} />
          {/* name field end  */}
          {/* this is birthday field  */}
          <Text style={[styles.mt_1, styles.secondary_color]}>
            Your Birthday:
          </Text>
          <Datepicker
            placeholder="Pick Date"
            date={date}
            min={min}
            max={now}
            onSelect={(nextDate) => setDate(nextDate)}
            accessoryRight={CalendarIcon}
          />
          {/* birthday field end  */}
          {/* this is gender field  */}
          <React.Fragment>
            <Text style={[styles.mt_1, styles.secondary_color]}>Gender:</Text>
            <RadioGroup
              selectedIndex={selectedIndex}
              onChange={(gender) => setSelectedIndex(gender)}
            >
              <Radio status="danger">Male</Radio>
              <Radio status="danger">Female</Radio>
            </RadioGroup>
          </React.Fragment>
          {/* gender field end  */}
          {/* this is martial_status field  */}
          <Text style={styles.mt_1}>Select Your status:</Text>
          <Select
            value={martial_status_value}
            selectedIndex={selectemartial}
            onSelect={(index) => setIndexmartial(index)}
          >
            {martial_status.map(renderOption)}
          </Select>
          {/* martial_status  field end  */}

          {/* this is number of children  */}
          {(martial_status_value != "Single" ? true : false) && (
            <View>
              <Text style={[styles.mt_1, styles.secondary_color]}>
                Number Of children
              </Text>
              <Input
                keyboardType="numeric"
                onChangeText={(nextValue) =>
                  setSelectenumber_of_children(parseInt(nextValue))
                }
              />
            </View>
          )}
          {/* number of children  field end  */}
          {/* this is level_of_education field */}
          <Text style={[styles.mt_1, styles.secondary_color]}>
            Level of Education
          </Text>
          <Select
            value={level_of_education_Value}
            selectedIndex={selecteNOC}
            onSelect={(index) => setselecteNOC(index)}
          >
            {level_of_education.map(renderOption)}
          </Select>
          {/* level_of_education field end  */}

          {/* this is Major field  */}
          <Text style={[styles.mt_1, styles.secondary_color]}>Major</Text>
          <Input onChangeText={(nextValue) => setMajor(nextValue)} />
          {/* Major field end  */}

          {/* this is University field  */}
          <Text style={[styles.mt_1, styles.secondary_color]}>University</Text>
          <Input onChangeText={(nextValue) => setUniversity(nextValue)} />
          {/* University field end  */}

          {/* this is Industry field  */}
          <Text style={[styles.mt_1, styles.secondary_color]}>Industry</Text>
          <Input onChangeText={(nextValue) => setIndustry(nextValue)} />
          {/* Industry  field end  */}

          {/* this is nYears Of Experience field  */}
          <Text style={[styles.mt_1, styles.secondary_color]}>
            Years Of Experience
          </Text>
          <Input
            keyboardType="numeric"
            onChangeText={(nextValue) => setIndustry(nextValue)}
          />
          {/* Years Of Experience  field end  */}
          <Layout style={[styles.center_container, styles.mt_1, styles.mb_1]}>
            <Button
              size="medium"
              status="primary"
              accessoryRight={StarIcon}
              onPress={onPressLearnMore}
            >
              Next
            </Button>
          </Layout>
        </Layout>
      </Layout>
    </ScrollView>
  );
}

export default FormScreen;