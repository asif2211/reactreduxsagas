import { Text, View, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";
import React from "react";
import Colors from "../Color/Color";
import Icons from "./Icons";

const ListItem = ({ text, onPress, selected,checkmark=true ,visible=true, iconBackground}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.Row}>
      <Text style={styles.text}>{text}</Text>

      {selected  && <Icons checkmark={checkmark} visible={visible} iconBackground={iconBackground}/> }
    </View>
  </TouchableHighlight>
);
ListItem.prototype = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark:PropTypes.bool,
  visiable:PropTypes.bool,
  iconBackground:PropTypes.string,
};
export default ListItem;
