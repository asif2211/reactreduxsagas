import React, { Component, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  keyboardType,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import Home from "../Home";
import Logo from "../components/logo/Logo";
import styles from "../style";
import InputWithButton from "../components/textInput/InputWithButton";
import ReverseButton from "../components/ReverseCurrancy/ReverseButton";
import LastConverted from "../components/Text/LastConverted";
import Setting from "../components/Setting/Setting";
import { ConversionContext } from "../components/ConversionContext/ConversionContext";
import Moment from "moment";
const HomeScreens = ({ navigation, route }) => {
  const [getvalue, setGetValue] = useState(100);
  const [conversion, setConversion] = useState(.84);
  const TEMP_BASE_PRICE = "100";

  const TEMP_CONVERTED_RATE = 0.8345;
  const TEMP_CONVERSION_DATE = new Date();

  const conversionRate = ".84";
  
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    currancyvalue,
    setCurrancyValue,
    swap,
  } = useContext(ConversionContext);
  // console.log(route.params.data[quoteCurrency])
  return (
    // this is api data in the form of home
    // <Home/>
    <View style={styles.HomeScreenContainer}>
      <StatusBar translucent={false} barStyle="light-content" />

      <Setting
        onPress={() => navigation.navigate("Options", { name: "Jane" })}
      />
      <Logo />
      <InputWithButton
        buttonText={baseCurrency}
        keyboardType="numeric"
        defaultValue={TEMP_BASE_PRICE}
        value={getvalue}
        onChangeText={(text) => setGetValue(text)}
        onPress={() =>
          navigation.push("CurrancyList", {
            title: "Base Currency",
            activeCurrancy: baseCurrency,
            onChange: (currency) => setBaseCurrency(currency),
            isBaseCurrancy:true,
          })
        }
      />

      <InputWithButton
        buttonText={quoteCurrency}
        editable={false}
        value={
          getvalue && `${(parseFloat(getvalue) * conversionRate).toFixed(2)}`
        }
        onPress={() =>
          navigation.push("CurrancyList", {
            title: "Quote Currency",
            activeCurrancy: quoteCurrency,
            onChange: (currency) => setQuoteCurrency(currency),
            isBaseCurrancy:false,
          })
        }
      />
      {/* <LastConverted
        base={baseCurrency}
        data={TEMP_CONVERSION_DATE}
        qoute={quoteCurrency}
        converionRate={route.params && route.params.data}
      /> */}
      <Text style={styles.text}>
      
    {getvalue} {baseCurrency} = {route.params&&route.params.data[quoteCurrency]}  {quoteCurrency} as of { Moment(TEMP_CONVERSION_DATE).format('MMMM D, YYYY')}}
          
    </Text>
    

      <ReverseButton text="reverse currancy" onPress={() => swap()} />
    </View>
  );
};

export default HomeScreens;
