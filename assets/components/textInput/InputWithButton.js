import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import PropTypes from "prop-types";
import styles from "./style";

const buttonBgColor = "#E4F1FE";
const InputWithButton = (props) => {
  const { buttonText, onPress, editable = true } = props;
  
  const stylecontainer = [styles.container];
  if (editable === false) {
    stylecontainer.push(styles.containerDisable);
  }
  return (
    <View style={stylecontainer}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={buttonBgColor}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
      <Text></Text>
    </View>
  );
};
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,

};

export default InputWithButton;
