import { View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { styles } from ".";

const ReverseButton = ({ text, onPress,DolarcurrentPrice }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wraper}>
      <Image style={styles.reverseImg} source={require("../../images/icon.png")} 
      resizeMode='contain'/>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ReverseButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  DolarcurrentPrice:PropTypes.string,
};

export default ReverseButton;
