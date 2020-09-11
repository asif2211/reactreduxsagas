import PropTypes from "prop-types";
import {View , Image} from 'react-native';
import { styles } from "../ReverseCurrancy";
import React from 'react';
const Icons = ({checkmark, visible,iconBackground})=>{
const iconstyle= [styles.icon];
if(visible)
{   
    
        iconstyle.push(styles.iconvisiable);    
    
    
}

if (iconBackground) {
    iconstyle.push({backgroundColor:iconBackground}); 
}
return <View style={iconstyle}>
    {checkmark ? <Image style={styles.checkicon} resizeMode='contain' source={require('../Icon/check.png')}/>:null}
</View>
};
Icons.prototype={
    checkmark:PropTypes.bool,
    visible:PropTypes.bool,
    iconBackground:PropTypes.string,
}

export default Icons;   