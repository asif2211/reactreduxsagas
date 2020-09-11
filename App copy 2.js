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
import Constants from 'expo-constants';
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
import firebase from 'firebase';
YellowBox.ignoreWarnings(["Require cycles"]);
console.disableYellowBox = true;
console.disableYellowBox = true;
import Constants from "expo-constants";
const config = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};
firebase.initializeApp(config);
export default class App extends React.Component {
  // // create the saga middleware
  // const sagaMiddleware = createSagaMiddleware();
  // // mount it on the Store
  // const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  // // then run the saga
  // sagaMiddleware.run(mySaga);
  constructor() {
    super();
    this.state = {
      message: "",
      messages: [],
      isLoggedIn: true,
    };
    this.AddItem = this.AddItem.bind(this);
  }
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("messages")
      .once("value", (snapshot) => {
        const data = snapshot.val();
        if (snapshot.val()) {
          const InitMessage = [];
          Object
          .keys(data)
          .forEach((message) =>
            InitMessage.push(data[message])
          );
          this.setState({
            messages: InitMessage,
          });
        }
      });

      firebase
        .database()
        .ref()
        .child("messages")
        .on("child_added", snapshot => {
          const data = snapshot.val();
          if (data) {
            this.setState(prevState => ({
              messages: [data, ...prevState.messages],
            }));
          }
        });
  }
  AddItem() {
    //sfeesfsd
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <Text style={styles.text}>PLEASE LOGIN </Text>
            <View style={styles.inputcontainer}>
              <Input
                inputStyle={styles.loginText}
                placeholder="Enter Email"
                leftIcon={{
                  type: "font-awesome",
                  name: "chevron-left",
                  color: "white",
                }}
              />

              <Button
                buttonStyle={styles.button}
                title="Login"
                onPress={this.props.onLogoutPress}
              />
    
              <FlatList
                data={this.state.messages}
                renderItem={({ item }) => 
                  <View>
                    <Text style={{ color: "white", backgroundColor:'red'}}>{item}</Text>
                  </View>
                }
              />
            </View>
          </View>
        </ImageBackground>
      );
    } else
      return (
        <HomeScreens onLoginPress={() => this.setState({ isLoggedIn: true })} />
      );
  }
}
