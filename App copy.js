import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreens from "./assets/Screens/HomeScreens";
import MealsNavigators from "./assets/Navigation/MealsNavigators";
import * as Font from "expo-font";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./assets/reducers";
import mySaga from "./assets/sagas/sagas";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import {YellowBox} from 'react-native';
import LoginDetails from './assets/components/Login/LoginDetails'

YellowBox.ignoreWarnings(['Require cycles'])
console.disableYellowBox = true;
export default function App() {

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  // then run the saga
  sagaMiddleware.run(mySaga);

  const fetchFonts = () => {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
  };
  const [fontLoaded, setFontLoaded] = useState(false);
  console.disableYellowBox = true;
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <HomeScreens />
    </Provider>
  );
}
