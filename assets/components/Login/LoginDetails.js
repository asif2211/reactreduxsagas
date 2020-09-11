import React, { Component, useState } from "react";
import { View, Text, TextInput, Image, Button, Alert, ImageBackground , TouchableOpacity} from "react-native";
import HomeScreens from "../../Screens/HomeScreens";
import PropTypes from "prop-types";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import Logo from "../logo/Logo";
import firebase from 'firebase';
class LoginDetails extends React.Component {
  
  state = {
    email:'',
    password:'',
    error:'',
    loading:false
    
    
  }

  onButtonPress= ()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      .then(this.onLoginSuccess)
      .catch(err=>{
        this.setState({
          error:err.message
        })
      })
  }

  onLoginSuccess = ()=>{
    this.setState({
      error:'',
      loading:false
    })
  }
  render() {
    return (
    <ImageBackground source={require('../../images/background.jpg')} style={{width:'100%', height:'100%'}}>
      <View style={styles.container}>
        
        <Text style={styles.text}>PLEASE LOGIN </Text>
        <View style={styles.inputcontainer}>

          <Input
            
            inputStyle={styles.loginText}
            placeholder="Enter Email"
            value={this.state.email}
            onChangeText={email=>this.setState({email})}
            leftIcon={{
              type: "font-awesome",
              name: "chevron-left",
              color: "white",
            }}
          />

          <Input
          secureTextEntry
            inputStyle={styles.loginText}
            placeholder="Enter Password"
            value={this.state.password}
            onChangeText={password=>this.setState({password})}
            leftIcon={
              <Icon name="user" size={24} color="black" color="white" />
            }
          />
        <TouchableOpacity onPress={this.onButtonPress} style={styles.button}>
         <Text style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>
          <Text style={styles.error}>
            {this.state.error}
          </Text>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

export default LoginDetails;
