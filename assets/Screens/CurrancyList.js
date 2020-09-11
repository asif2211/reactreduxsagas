import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewPropTypes,
  Picker,
  keyboardType,
  FlatList,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../action";
import Constant from "expo";
import { TextInput } from "react-native-gesture-handler";
import ListItem from "../components/List/ListItem";
import { ThemeConsumer } from "react-native-elements";
import Separator from "../components/List/Separator";
const TEMP_CURRENT_CURRANCY = "AUD";
import { ConversionContext } from "../components/ConversionContext/ConversionContext";

class CurrancyList extends React.Component {
  

  componentDidMount = () => {
    this.props.requestApiData();
  };
  

  _renderItem = ({ item, index }) => {
    const { navigation, route } = this.props;

    // console.log(this.props.data.rates[route.params.activeCurrancy]);
    // console.log(route.params.value)
    
    return (
      <ListItem
        text={item}
        selected={route.params.activeCurrancy === item}
        onPress={() => {
          // console.log(route.params.activeCurrancy);
          route.params.onChange(item);

          navigation.navigate("Home",{data:this.props.data.rates});
        }}
      />
    );
  };
  loadData() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item) => item}
        />
        <Text>{this.currancy.baseCurrency}...</Text>
      </View>
    );
  }
  onValueChange1 = (value) => {
    alert(value);
    this.setState({
      selectLabel1: value,
      result: this.props.data.rates[value] * this.state.amount,
    });
  };

  onValueChange2 = (value) => {
    this.setState({
      selectLabel2: value,
      result: this.props.data.rates[value] * this.state.amount,
    });
  };
  onHandleInput = (text) => {
    this.setState({
      amount: text,
    });
  };

  onHandleInput2 = (text) => {
    this.setState({
      TextFiled2Value: this.state.selectLabel1,
    });
  };
  getData = () => {
    if (this.props.data.rates) {
      // results = this.props.data.rates.EUR;

      const results = Object.keys(this.props.data.rates);
      return results;
    }
  };
  render() {
    // const rates = Object.keys(this.props.data.rates);
    debugger;
    return true ? (
      <View>
        <FlatList
          data={this.getData()}
          renderItem={this._renderItem}
          ItemSeparatorComponent={Separator}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrancyList);
