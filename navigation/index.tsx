import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import 'react-native-gesture-handler';
import InfoScreen from '../screens/InfoScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import SectorsScreen from '../screens/SectorsScreen';
import FormScreen from '../screens/formScreens/Personal_Info';
import OtherIncome from '../screens/formScreens/Other_Income';
import AboutTheBusiness from '../screens/formScreens/About_The_Business';
import AboutThePermises from '../screens/formScreens/About_The_Premises';
import NewProject from '../screens/formScreens/New_Project';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    
    //this is the navegator responsible for linking bottom navigator and tabOne and tabTwo
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="Sectors" component={SectorsScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="OtherIncome" component={OtherIncome} />
      <Stack.Screen name="AboutTheBusiness" component={AboutTheBusiness} />
      <Stack.Screen name="AboutThePremises" component={AboutThePermises} />
      <Stack.Screen name="NewProject" component={NewProject} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
