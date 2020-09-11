import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  ScrollView,
  Picker,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Alert,
  
} from "react-native";
import Separator from "../components/List/Separator";
import { Entypo } from "@expo/vector-icons";
import Color from "../components/Color/Color";
// import styles from "./style";
import firebase from "firebase";
import ListItem from "../components/List/ListItem";

const Theme = (navigation) => {
  openLink = (url) =>
    Linking.openURL(url).catch(() =>
      Alert.alert("Sorry, something went wrong.", "Please try again later.")
    );
  //onPress={() => this.openLink("https://www.npmjs.com/package/react-native-vector-icons")}
 const handleThemePress = (color)=>{
   console.log('press theme', color)
 }
 const blue = Color.Blue;
 const green = Color.green;
 const orange = Color.orange;
 const red = Color.red;
 
  return (  
    <ScrollView>
      <SafeAreaView>
        <ListItem text="Blue"  selected = {blue} onPress={()=>handleThemePress(blue)} checkmark={false} iconBackground={blue} />

        <Separator />

        <ListItem  text="Orang"  selected onPress={()=>handleThemePress(green)} checkmark={false} iconBackground={green} />

        <Separator />
        <ListItem  text="Green"  selected onPress={()=>handleThemePress(orange)} checkmark={false} iconBackground={orange}/>
        <Separator />
        <ListItem text="red"  selected onPress={()=>handleThemePress(red)} checkmark={false} iconBackground={red} />
        <Separator />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Theme;

const style = StyleSheet.create({
  // $blue:Color.Blue,
  // $green:Color.green,
  // $orange:Color.orange,
  // $purple:Color.orange,
  

  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  title: {
    color: Color.darkText,
    fontSize: 16,
  },
})