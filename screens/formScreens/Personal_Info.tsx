  import React, { useState } from "react";
import {styles} from '../../constants/Style';

import {
  Button,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import { Formik, useFormik } from 'formik';
import { Input, Text,Layout, Datepicker, Icon, RadioGroup, Radio, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

import { createAndSavePDF } from "../../hooks/helper";
import { Alert } from "react-native";
import { simpleHtml } from "../../hooks/html";
const CalendarIcon = (props:any) => (
  <Icon {...props} name='calendar'/>
);


function FormScreen({ 
  navigation,
}:StackScreenProps<RootStackParamList, 'Info'>) {
  const now = new Date();
  const min:Date = new Date(now.getFullYear()-100, now.getMonth(), now.getDate() );
  
  const [name, setValue] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectemartial, setIndexmartial] = React.useState(new IndexPath(0));
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
let personal_info= {
    name : "",
    age: 0,
    gender: "",
    martial_status: "",
    number_of_children : 0,
    level_of_education: "",
    major: "",
    university: "",
    industry: "",
    years_of_experience:0
};
const martial_status = [
  'Developer',
  'Designer',
  'Product Manager',
];
  return (
    <ScrollView style={styles.container}>
            
            <Layout style={styles.progress_bar_2}></Layout>
            <Layout style={styles.center_container}><Text style={styles.title_text}>JADWA</Text></Layout>
            <Layout style={[styles.center_container]}><Text style={[styles.header_text,styles.mt_1]}>Personal Info </Text></Layout>
            <Layout style={[styles.center_container,styles.d_block,styles.ml_r_1]}>
            
              <Layout style={[styles.center_col_container]}>
            {/* this is name field  */}
                <Text style={[styles.mt_1,styles.secondary_color]}>
                    Full Name
                </Text>
                <Input
                  value={personal_info.name}
                  onChangeText={nextValue => setValue(nextValue)}
                />
            {/* name field end  */}
              <Text style={[styles.mt_1,styles.secondary_color]}>
                  Your Birthday
              </Text>
              <Datepicker
              placeholder='Pick Date'
              date={date}
              min={min}
              max={now}
              onSelect={nextDate => setDate(nextDate)}
              accessoryRight={CalendarIcon}
              />
              <React.Fragment>

                <Text style={[styles.mt_1,styles.secondary_color]}>
                  {`Gender: ${now.getFullYear() - date.getUTCFullYear() }`}
                </Text>
                <RadioGroup
                  selectedIndex={selectedIndex}
                  onChange={gender => setSelectedIndex(gender)}>
                  <Radio>Male</Radio>
                  <Radio>Female</Radio>
                </RadioGroup>

              </React.Fragment>
              <Text style={styles.mt_1}>
                {`Select Your status: ${selectedIndex == 0?  'Male':'Female' }`}
              </Text>
              {/* <Select
                style={styles.mt_1}
                selectedIndex={selectemartial}
                onSelect={status => setIndexmartial(status)}>
                <SelectItem title='Single'/>
                <SelectItem title='Married'/>
                <SelectItem title='Divorced'/>
                <SelectItem title='Widowed'/>
              </Select> */}
              <Layout style={[styles.center_container,styles.mt_5]}>
               <Button
                title="Generate a PDF file"
                onPress={createPdf(simpleHtml(personal_info))}
              />
              </Layout>
              </Layout>
            </Layout>
            
    </ScrollView>
  );

}

export default FormScreen;
