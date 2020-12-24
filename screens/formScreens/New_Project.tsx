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
  RadioGroup,
  Radio,
} from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { TapGestureHandler } from "react-native-gesture-handler";

const StarIcon = (props: any) => <Icon {...props} name="arrow-forward" />;
function NewProject({
  navigation,
}: StackScreenProps<RootStackParamList, "Productivity">) {
  function onPressLearnMore() {
    navigation.navigate("Productivity");
  }
  const grace_period = ["0", "6", "12", "18", "24", "30", "36"];
  // inv here stand for investment
  let premises = {
    inv: 0,
    nature_of_project: "",
    inv_term: 0,
    grace_period: "",
    project_contributing: 0,
    contributing_amount: "",
    contributing_covering: "",
  };
  //declration form variables
  const [inv, setInv] = React.useState(0);
  const [natureOfProject, setNatureOfProject] = React.useState("");
  const [invTerm, setInvTerm] = React.useState(0);
  const [gracePeriod, setGracePeriod] = React.useState(new IndexPath(0));
  const [projectContributing, setProjectContributing] = React.useState(0);
  const [contributingAmount, setContributingAmount] = React.useState("");
  const [contributingCovering, setontributingCovering] = React.useState("");
  const [isContributing, setIsContributing] = React.useState(false);
  const grace_period_value = grace_period[gracePeriod.row];
  const renderOption = (title: any) => <SelectItem key={title} title={title} />;

  return (
    <View style={styles.container}>
      <View style={styles.fixed_Top}>
        <Layout style={styles.progress_bar_6}></Layout>
        <Layout style={styles.center_container}>
          <Text style={styles.title_text}>JADWA</Text>
        </Layout>
        <Layout style={[styles.center_container]}>
          <Text style={[styles.header_text, styles.mt_1]}>New Project</Text>
        </Layout>
      </View>
      <ScrollView>
        <Layout
          style={[styles.center_container, styles.d_block, styles.ml_r_1]}
        >
          <Layout style={[styles.center_col_container]}>
            {/* this is Investment Needed field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Investment Needed
            </Text>
            <Input
              placeholder="Investment Needed"
              keyboardType="numeric"
              onChangeText={(investment) => setInv(parseInt(investment))}
            />
            {/* Investment Neededfield end  */}
            {/* this is Nature of Project field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Nature of Project
            </Text>
            <Input
              placeholder="Nature of Project"
              onChangeText={(nature) => setNatureOfProject(nature)}
            />
            {/* Nature of Project field end  */}
            {/* this is Investment Term field  */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Investment Term
            </Text>
            <Input
              placeholder="Investment Term"
              keyboardType="numeric"
              onChangeText={(investment) => setInvTerm(parseInt(investment))}
            />
            {/* Investment Term end  */}
            {/* this premises ownership  field */}
            <Text style={[styles.mt_1, styles.secondary_color]}>
              Level of Education
            </Text>
            <Select
              value={grace_period_value}
              selectedIndex={gracePeriod}
              onSelect={(index) => setGracePeriod(index)}
            >
              {grace_period.map(renderOption)}
            </Select>
            {/* premises ownership field end  */}
            {/* this is contributing to the project field  */}
            <React.Fragment>
              <Text style={[styles.mt_1, styles.secondary_color]}>
                Are you contributing to the project?
              </Text>
              <RadioGroup
                selectedIndex={projectContributing}
                onChange={(countributnig) =>
                  setProjectContributing(countributnig)
                }
              >
                <Radio status="primary">Yes</Radio>
                <Radio status="primary">No</Radio>
              </RadioGroup>
            </React.Fragment>
            {/* contributing to the project filed end  */}
            {(projectContributing == 0 ? true : false) && (
              <View>
                {/* this is Amount of Your Contribution? field  */}
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  What is the amount of your contribution?
                </Text>
                <Input
                  placeholder="Amount of Your Contribution? "
                  onChangeText={(amount) => setContributingAmount(amount)}
                />
                {/* Amount of Your Contribution? field end  */}
                {/* this is Contribution Covering field  */}
                <Text style={[styles.mt_1, styles.secondary_color]}>
                  What is your own contribution covering?
                </Text>
                <Input
                  placeholder="Contribution Covering"
                  onChangeText={(covering) => setontributingCovering(covering)}
                />
                {/* Contribution Covering field end  */}
              </View>
            )}
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

export default NewProject;
