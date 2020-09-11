import { View, Text} from "react-native";
import PropTypes from "prop-types";
import React from "react";
import  styles  from "./style";
import Moment from "moment";
import "moment-timezone";

const LastConverted = ({ date, base, qoute, converionRate }) =>(
  
    <Text style={styles.text}>
      
      {`1 ${base} = ${converionRate} ${qoute} as of ${ Moment(date).format('MMMM D, YYYY')}`}
          
    </Text>
    
);
LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  qoute : PropTypes.string,
  converionRate: PropTypes.number,
};


export default LastConverted;
