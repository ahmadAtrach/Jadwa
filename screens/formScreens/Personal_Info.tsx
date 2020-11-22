import React from "react";
import {styles} from '../../constants/Style';
import {
  Button,
  ScrollView,
} from "react-native";
import { Input, Text,Layout } from '@ui-kitten/components';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

import Colors from "../../constants/Colors";
function FormScreen({ 
  navigation,
}:StackScreenProps<RootStackParamList, 'Info'>) {
  const [name, setValue] = React.useState('');
  function printC(){
    alert(name);
  }
  return (
    <ScrollView style={styles.container}>
            <Layout style={styles.progress_bar_2}></Layout>
            <Layout style={styles.center_container}><Text style={styles.title_text}>JADWA</Text></Layout>
            <Layout style={[styles.center_container]}><Text style={[styles.header_text,styles.mt_1]}>Personal Info </Text></Layout>
            <Layout style={[styles.center_container,styles.d_block,styles.w_80]}>
              <Input
                textStyle={{width:'90%'}}
                label={evaProps => <Text {...evaProps}>Full Name</Text>}
                onChangeText={nextValue => setValue(nextValue)}
              />
              <Input
                textStyle={{width:'90%'}}
                label={evaProps => <Text {...evaProps}>Full Name</Text>}
                onChangeText={nextValue => setValue(nextValue)}
              />
            </Layout>
    </ScrollView>
  );

}

export default FormScreen;
