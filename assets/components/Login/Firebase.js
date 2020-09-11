import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';



export default class Firebase extends PureComponent {
  constructor(callback) {
    super();
    this.init(callback)
  }
  
  render() {
    return (
      <View>
        <Text> componentText </Text>
      </View>
    );
  }
}
