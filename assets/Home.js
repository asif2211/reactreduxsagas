import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewPropTypes,
  Picker,
  keyboardType,
  FlatList
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./action";
import Constant from "expo";
import { TextInput } from "react-native-gesture-handler";
import styles from "./components/textInput/style";
import { ThemeConsumer } from "react-native-elements";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectLabel1: "",
      selectLabel2: "",
      amount: "",
      result: [],
      loading: true,
      TextFiled2Value : ''
    };
  }

  componentDidMount() {
    this.props.requestApiData();
  }
  _renderItem = ({ item, index})=>{
    
    return(
      <View>
        <Text>{item}</Text>
      </View>
    )
  
  }
  loadData() {
    if (this.props.data.rates) {
      // const results = [
      //   this.props.data.base,
      //   ...Object.keys(this.props.data.rates),
      // ];

      const item = Object.keys(this.props.data.rates)
    console.log(item)
      return (
        
          <FlatList
          data={item}
          renderItem={({ item }) => {
          <Text></Text>
          }}
          keyExtractor={(item) => item}
        />
        
      );
    }
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
      TextFiled2Value:this.state.selectLabel1,
    });
  };
getData = ()=>{
  if (this.props.data.rates) {
    // results = this.props.data.rates.EUR;
    
    const results = Object.keys(this.props.data.rates)
    return results;
  }
}
  render() {
    // const rates = Object.keys(this.props.data.rates);
    debugger
      return true?(
        <View>
        <FlatList
        data={this.getData()}
        renderItem={this._renderItem}
        keyExtractor={(item,index)=>index.toString()}
      />
      </View>
      ):(<View><Text>fssdfsfdd</Text></View>)
      
      
      

    
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
