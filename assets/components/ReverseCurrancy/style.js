import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Color/Color";;
export default StyleSheet.create({
    container: {
    alignItems: "center",
  },
  wraper: {
    flexDirection: "row",
    alignItems: "center",
     
  },
  
  text: {
    
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    paddingVertical: 20,
  },
  icon:{
    backgroundColor:'transparent',
    width:30,
    height:30,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:6,
    },
    iconvisiable:{
      backgroundColor:Colors.Blue ,
    },
    checkicon:{
      width:18,
    },
    reverseImg:{
      width:17,
      marginHorizontal:8,
    }
});
