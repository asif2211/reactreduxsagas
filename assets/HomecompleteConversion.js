import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewPropTypes,
  Picker,
  keyboardType,
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
      result: "",
      loading : true,
    };
  }

  componentDidMount() {
    this.props.requestApiData();
    
  }

  loadData() {
   

if(this.props.data.rates)
{
   const results = [this.props.data.base,...Object.keys(this.props.data.rates)]
      return (
        results&&
        results.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))
      
      );
   }

    

  }
  onValueChange1 = (value) => {
    
    alert(value)
      this.setState({
        selectLabel1: value,
        result:this.props.data.rates[value]*this.state.amount,
      });
      
   
    
  };

  onValueChange2 = (value) => {
    this.setState({
      selectLabel2: value,
      result:this.props.data.rates[value]*this.state.amount,
    });
  };
  onHandleInput = (text) => {
    this.setState(
      {
        amount: text,
      },
      
    );
  };

  onHandleInput2 = () => {
  
     this.state.result;
  };
 
  render() {
    // const rates = Object.keys(this.props.data.rates);
    if(this.props.data.rates)
    {
      results = this.props.data.rates.EUR;
      console.log(results)
    }
    
    return true?(
      <View style={styles.MainContainer}>
        <View style={styles.container}>
          <Picker
          value={this.props.data[2]}
            style={styles.picker}
            onValueChange={  this.onValueChange1.bind()}
            selectedValue={this.state.selectLabel1}
          >
            { this.loadData()}
          </Picker>

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.onHandleInput(text)}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.container}>
          <Picker
            value={this.props.data}
            style={styles.picker}
            onValueChange={this.onValueChange2.bind()}
            selectedValue={this.state.selectLabel2}
          >
            {this.loadData()}
          </Picker>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.onHandleInput2(text)}
            keyboardType="number-pad"
            value={this.onHandleInput2()}
            editable={false}
          />
        </View>
        <Text>{this.state.amount}</Text>
        <Text>{this.state.Fromamount}</Text>
        <Text>{this.state.result}</Text>
        <Text>{this.state.amount}: {this.state.selectLabel1}</Text>
        <Text>{this.state.selectLabel2}</Text>
      </View>
    ) :(<View><Text>Loading</Text></View>)
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
