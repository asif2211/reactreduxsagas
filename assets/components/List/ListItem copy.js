import { Text, View, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import styles from './style';
import React from 'react';
import Colors  from "../Color/Color";
import Icons from './Icons';

const ListItem = ({text, onPress, selected=false, checkmark= true, visible=true}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.Row}>
      <Text style={styles.text}>{text}</Text>
      
      {selected ? (<Icons checkmark={checkmark} visible={visible}/>):<Icons />}
    </View>
  </TouchableHighlight>
);
ListItem.prototype={
    text:PropTypes.string,
    onPress:PropTypes.func,
    selected:PropTypes.bool,
    checkmark:PropTypes.bool,
    visiable:PropTypes.bool,
}
export default ListItem;
