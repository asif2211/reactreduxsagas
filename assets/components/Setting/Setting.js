import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import React from "react";

const Setting = (props) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <View>
        <Image
          style={styles.icon}
          source={require("../../images/gear.png")}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default Setting;
