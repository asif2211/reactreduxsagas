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
  Linking, Alert 
} from "react-native";
import Separator from "../components/List/Separator";
import { Entypo } from "@expo/vector-icons";
import Color from "../components/Color/Color";
import styles from '../Screens/style';
import firebase from 'firebase';
const Options = ({navigation}) =>{
  const openLink = url =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );
  //onPress={() => this.openLink("https://www.npmjs.com/package/react-native-vector-icons")}
  
    return (
      <ScrollView>
        <SafeAreaView>
          <TouchableOpacity onPress={() =>
          navigation.push("Theme")} style={styles.row}>
            <Text style={styles.title}>Themes</Text>
            <Entypo name="chevron-right" size={20} color={Color.Blue} />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity style={styles.row}>
            <Text style={styles.title}>Fixer.io</Text>
            <Entypo name="export" size={20} color={Color.Blue} />
          </TouchableOpacity>

          <Separator />

          <TouchableOpacity onPress={()=>{
          firebase.auth().signOut();
        }} style={styles.row}>
            <Text style={styles.title}>Logout</Text>
            <Entypo name="export" size={20} color={Color.Blue} />
          </TouchableOpacity>
        </SafeAreaView>
        
      </ScrollView>
    );
  
}



export default Options;
