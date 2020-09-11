import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Keyboard,
  
} from "react-native";
import styles from "./style";

class Logo extends React.Component{
  constructor(){
    super();
    // this.mainImageSize = new Animated.Value(styles.containerImageSize)
    // this.logoImageSize = new Animated.Value(styles.ImageSize);

  }
//   componentDidMount(){
//     Keyboard.addListener("keyboardWillShow", this.keyboardMount);
//     Keyboard.addListener("keyboarwillHide", this.keyboardUnmount);
//   }

//   componentWillMount(){
//     Keyboard.removeListener("keyboardWillShow", this.keyboardMount);
//     Keyboard.removeListener("keyboarwillHide", this.keyboardUnmount);
//   }
//  keyboardMount (){
//    console.log('keyboard mount here')
//  } 

//  keyboardUnmount (){
//   console.log('keyboard Unmount here')
// } 

  render(){
    
    return(
      <View>
      <ImageBackground
        source={require("../../images/backgroundlogo.png")}
        resizeMode="contain"
        style={styles.containerImage}
      >
        <Image
          source={require("../../images/internallogo.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </ImageBackground>
      <Text style={styles.title}>Currancy Converter</Text>
    </View>
    )
  }
}

export default Logo;
