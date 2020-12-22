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
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
const CalendarIcon = (props: any) => <Icon {...props} name="calendar" />;

const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function OtherIncome({
  navigation,
}: StackScreenProps<RootStackParamList, "AboutTheBusiness">) {
  function onPressLearnMore() {
    navigation.navigate("AboutTheBusiness");
  }
  let other_income = {
    income: "",
    is_employed: false,
    employemnt_place: "",
    employemnt_job: "",
    employemnt_date: new Date(),
    employemnt_salary: "",
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
  const [income, setIncome] = React.useState(1);
  const [isEmployed, setIsEmployed] = React.useState(1);
  const [employemntPlace, SetEmployemntPlace] = React.useState("");
  const [employemntJob, setEmployemntJob] = React.useState("");
  const [employemntDate, setEmployemntDate] = React.useState(new Date());
  const [employemntSalary, setEmployemntSalary] = React.useState("");
  const [isSideBusiness, setIsSideBusiness] = React.useState(1);
  const [businessInfo, setBusinessInfo] = React.useState("");
  const [businessLocation, setBusinessLocation] = React.useState("");
  const [businessDuration, setBusinessDuration] = React.useState(new Date());
  const [businessAverageSalary, setBusinessAverageSalary] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_3}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>Other Income </Text>
        </Layout>
      </View>
      <ScrollView>
        <Layout
          style={[styles.center_container, styles.d_block, styles.ml_r_1]}
        >
          <Layout style={[styles.center_col_container]}>
            {/* this is income field  */}
            <React.Fragment>
              <Text style={[styles.mt_1, styles.secondary_color]}>
                Do you have other sources of income?
              </Text>
              <RadioGroup
                selectedIndex={income}
                onChange={(income) => setIncome(income)}
              >
                <Radio status="danger">Yes</Radio>
                <Radio status="danger">No</Radio>
              </RadioGroup>
            </React.Fragment>
            {/* gender income end  */}
            {/* this is number of children  */}
            {(income != 1 ? true : false) && (
              <View>
                <React.Fragment>
                  <Text style={[styles.mt_1, styles.secondary_color]}>
                    Are you employed?
                  </Text>
                  <RadioGroup
                    selectedIndex={isEmployed}
                    onChange={(isEmployed) => setIsEmployed(isEmployed)}
                  >
                    <Radio status="danger">Yes</Radio>
                    <Radio status="danger">No</Radio>
                  </RadioGroup>
                </React.Fragment>
                {(isEmployed != 1 ? true : false) && (
                  <View>
                    {/* this is employment location field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      Where are you employed
                    </Text>
                    <Input
                      placeholder="employment location "
                      onChangeText={(location) => SetEmployemntPlace(location)}
                    />
                    {/* employment location field end  */}

                    {/* this is job info field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      What is your job?
                    </Text>
                    <Input
                      placeholder="Job Info "
                      onChangeText={(location) => SetEmployemntPlace(location)}
                    />
                    {/*  job info field end  */}

                    {/* this is job date field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      How long have you been employed?
                    </Text>
                    <Datepicker
                      placeholder="Pick Date"
                      date={employemntDate}
                      min={min}
                      max={now}
                      onSelect={(employemntDate) =>
                        setEmployemntDate(employemntDate)
                      }
                      accessoryRight={CalendarIcon}
                    />
                    {/*  job info field end  */}
                    {/* this is job info field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      What is your monthly income?
                    </Text>
                    <Input
                      placeholder="Monthly Income"
                      onChangeText={(monthlyIncome) =>
                        setEmployemntSalary(monthlyIncome)
                      }
                    />
                    {/*  job info field end  */}
                  </View>
                )}
                <React.Fragment>
                  <Text style={[styles.mt_1, styles.secondary_color]}>
                    Do you run a side business?
                  </Text>
                  <RadioGroup
                    selectedIndex={isSideBusiness}
                    onChange={(IsSideBusiness) =>
                      setIsSideBusiness(IsSideBusiness)
                    }
                  >
                    <Radio status="danger">Yes</Radio>
                    <Radio status="danger">No</Radio>
                  </RadioGroup>
                </React.Fragment>
                {(isSideBusiness != 1 ? true : false) && (
                  <View>
                    {/* this is business info field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      What is the business you run?
                    </Text>
                    <Input
                      placeholder="Business Info "
                      onChangeText={(info) => setBusinessInfo(info)}
                    />
                    {/* business info  field end  */}

                    {/* this is Business Location field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      What is your business location?
                    </Text>
                    <Input
                      placeholder="Business Location"
                      onChangeText={(location) => setBusinessLocation(location)}
                    />
                    {/*  Business Location field end  */}

                    {/* this is business date field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      How long have you did you have the business ?
                    </Text>
                    <Datepicker
                      placeholder="Pick Date"
                      date={employemntDate}
                      min={min}
                      max={now}
                      onSelect={(employemntDate) =>
                        setBusinessDuration(employemntDate)
                      }
                      accessoryRight={CalendarIcon}
                    />
                    {/*  business field end  */}
                    {/* this is monthly revenue field   */}
                    <Text style={[styles.mt_1, styles.secondary_color]}>
                      What is your monthly revenue?
                    </Text>
                    <Input
                      placeholder="Monthly Revenue"
                      onChangeText={(monthlyRevenue) =>
                        setBusinessAverageSalary(monthlyRevenue)
                      }
                    />
                    {/*  job info field end  */}
                    
                  </View>
                )}
              </View>
            )}
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
    </View>
  );
}

export default OtherIncome;