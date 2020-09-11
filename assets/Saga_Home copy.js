import React from "react";
import { View, Text, StyleSheet, ViewPropTypes } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./action";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }
  person = (x, i) => (
    <View>
      <Text key={x.date.value}></Text>
      <Text>{x.gender}</Text>
      <Text>{x.name.first}</Text>
      
    </View>
  );
  render() {
    const { results = [] } = this.props.data;
  
    return results.length ? (

      <View>
      {results.map(this.person)}
      </View>
    ) : (
      <View style={styles.screen}>
        <Text>loading ....</Text>
      </View>
    );
    
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
