import HomeScreens from "./assets/Screens/HomeScreens";
import MealsNavigators from "./assets/Navigation/MealsNavigators";
import * as Font from "expo-font";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./assets/reducers";
import mySaga from "./assets/sagas/sagas";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { YellowBox } from "react-native";
import React, { Component } from "react";
import LoginDetails from "./assets/components/Login/LoginDetails";

import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";

import styles from "./assets/components/Login/style";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import firebase from "firebase";
YellowBox.ignoreWarnings(["Require cycles"]);
console.disableYellowBox = true;
console.disableYellowBox = true;
import Constants from "expo-constants";
import { render } from "react-dom";
import { store } from "./assets/store";
import CurrancyList from "./assets/Screens/CurrancyList";
import Navigation from './assets/Navigation/Navigation'
export default class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    isLoggedIn: null,
  };
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDO1p9-UXQamSs5FyxEfg3Riwbhet8Yc5U",
      authDomain: "my-project-1494926905457.firebaseapp.com",
      databaseURL: "https://my-project-1494926905457.firebaseio.com",
      projectId: "my-project-1494926905457",
      storageBucket: "my-project-1494926905457.appspot.com",
      messagingSenderId: "960349712042",
      appId: "1:960349712042:web:235584fb29dd9e0bddaad3",
      measurementId: "G-S5E5FYCK1H",
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLoggedIn: true,
        });
      } else {
        this.setState({
          isLoggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    switch (this.state.isLoggedIn) {
      case false:
        return <LoginDetails />;

      case true:
        return <Navigation/>
        // return (
         
            
        //    <CurrancyList />
          
        // );
    }
  };
  render() {
    return  <Provider store={store}>{this.renderContent()}</Provider>;
  }
}
