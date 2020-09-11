import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../Logout/style";
import React from "react";
import firebase from 'firebase';
const Logout = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={()=>{
          firebase.auth().signOut();
        }}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  </View>
);

export default Logout;
