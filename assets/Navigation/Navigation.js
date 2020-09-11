import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import HomeScreens from "../Screens/HomeScreens";
import Home from "../Home";
import Options from "../Screens/Options";
import Theme from "../Screens/Theme";
import CurrancyList from "../Screens/CurrancyList";
import { TouchableOpacity } from "react-native";
import Colors from "../components/Color/Color";
import { ConversionContextProvider } from "../components/ConversionContext/ConversionContext";
const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator // headerMode="none"   initialRouteName="Homeapi"
  >
    <MainStack.Screen
      name="Home"
      component={HomeScreens}
      options={{ headerShown: false }}
    />
      
    {/* <MainStack.Screen name="Homeapi" component={Home} /> */}
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen name="Theme" component={Theme} />
  </MainStack.Navigator>
);
const ModalStack = createStackNavigator();
const ModalStackScreens = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />

    <ModalStack.Screen
      name="CurrancyList"
      component={CurrancyList}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
      <ModalStackScreens />
    </ConversionContextProvider>
  </NavigationContainer>
);
