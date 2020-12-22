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
  ListItem
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
const CalendarIcon = (props: any) => <Icon {...props} name="calendar" />;
const PlusIcon = (props: any) => <Icon {...props} name="plus" />;
const MinusIcon = (props: any) => <Icon {...props} name="minus" />;
const data = new Array(1).fill({
  title: "Item",
  description: "Description for Item",
});
const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function AboutTheBusiness({
  navigation,
}: StackScreenProps<RootStackParamList, "AboutTheBusiness">) {
  function onPressLearnMore() {
    navigation.navigate("AboutTheBusiness");
  }
  const renderItem = ({ item, index }: any) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      accessoryRight={() => renderItemAccessory(index)}
    />
  );
  let other_income = {
    business: "",
    brand_name: "",
    establishment_date: new Date(),
    number_beehives: 0,
    clients: "",
    annual_revenue: "",
    empoyment_date: "",
    fulltimres: [
      {
        id: 1,
        salary: "",
      },
      {
        id: 2,
        salary: "",
      },
    ],
    is_side_business: false,
    business_info: "",
    business_location: "",
    business_duration: 0,
    business_average_salary: "",
  };
  const now = new Date();
  const min: Date = new Date(
    now.getFullYear() - 100,
    now.getMonth(),
    now.getDate()
  );
  const [businessInfo, setBusinessInfo] = React.useState("");
  const [brandName, setBrandName] = React.useState("");
  const [establishmentDate, setEstablishmentDate] = React.useState(new Date());
  const [clients, setClients] = React.useState("");
  const [annualRevenue, setAnnualRevenue] = React.useState("");
  const [fullTimers, setFullTimers] = React.useState("");
  const [employeeJob, setEmployeeJob] = React.useState("");
  const [employeeSalary, setemployeeSalary] = React.useState("");
  const [equipmentName, setEquipmentName] = React.useState("");
  const [equipmentData, setEquipmentData] = React.useState(data);
  const [switcherData, setSwitcherData] = React.useState(true);
  const [hourCounter, setHourCounter] = React.useState(0);
  const renderItemAccessory = (props: any) => (
    <Button
      onPress={() => deleteData(props)}
      accessoryRight={MinusIcon}
      size="tiny"
    ></Button>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_4}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>
            About The Business
          </Text>
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
            {/* this is business info field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What is the business you run?
            </Text>
            <Input
              placeholder="Business Info "
              onChangeText={(info) => setBusinessInfo(info)}
            />
            {/* business info  field end  */}
            {/* this is brand name field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      What is the Brand Name?
                    </Text>
                    <Input
                      placeholder="Brand Name"
                      onChangeText={(name) => setBrandName(name)}
                    />
            {/* brand name field end  */}
            {/* this is Date of establishment field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Date of establishment:
            </Text>
            <Datepicker
              placeholder="Pick Date"
              date={establishmentDate}
              min={min}
              max={now}
              onSelect={(businessDate) => setEstablishmentDate(businessDate)}
              accessoryRight={CalendarIcon}
            />
            {/*  Date of establishment field end  */}
            {/* this is Full-timers field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              How many full-timers you have?
            </Text>
            <Input
              keyboardType="numeric"
              placeholder="Full-timers number"
              onChangeText={(number) => setFullTimers(number)}
            />
            {/* Full-timers field end  */}
            {/* this is job of the first field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What is the job of the first employee?
            </Text>
            <Input
              placeholder="Job of the first employee"
              onChangeText={(job) => setEmployeeJob(job)}
            />
            {/* job of the first field end  */}
            {/* this is Full-timers field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              What is the salary of the first employee?
            </Text>
            <Input
              keyboardType="numeric"
              placeholder="Salary of the first employee"
              onChangeText={(number) => setemployeeSalary(number)}
            />
            {/* Full-timers field end  */}

            {/* this is test field   */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Add Equipments
            </Text>
            <List
              data={switcherData ? listData() : data}
              ItemSeparatorComponent={Divider}
              renderItem={renderItem}
            />
            <Input
              value={!switcherData ? equipmentName : ""}
              placeholder="Equipment name"
              onChangeText={(name) => setEquipmentName(name)}
            />
            <Button
              style={styles.mt_1}
              size="medium"
              status="primary"
              accessoryRight={PlusIcon}
              onPress={addEquipments}
            >
              Add
            </Button>

            {/* test field end  */}

            <Layout style={[styles.center_col_container]}>
              <Layout style={[styles.center_container, styles.mt_5]}>
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
      </KeyboardAvoidingView>
    </View>
  );
  function deleteData (index:any){
    data.splice(index, data.length-1)
    console.log(index);
  }
  function addEquipments() {
     let newData = data;
     let equipment = {
       title: equipmentName,
       description: "Description for Item",
     };
     newData.push(equipment);
     setSwitcherData(true);
     setEquipmentData(newData);  
  }
  function listData(){
    if(switcherData==true){
      setSwitcherData(false);
      return equipmentData;
    }
    else {
      return data;
    }
    
  }
}

export default AboutTheBusiness;