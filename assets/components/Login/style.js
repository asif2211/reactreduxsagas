import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  // main container image remain same but internal logo image width to half

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  firebaseList:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  },
  inputcontainer: {
    width: "90%",
    color: "#FFF",
  },
  loginText: {
    color: "white",
    paddingHorizontal: 10,
    fontSize:20,
    fontWeight:'300',
    

  },
  input: {
    color: "#FFF",
  },
  errorMsg:{
      color:'red',
      justifyContent:'center',
      textAlign:'center',
      fontSize:20,
      fontWeight:'400',
      
  },
  button:{
      backgroundColor: 'white',
      width:'95%',
      height:40,
      borderRadius:10,
      borderColor:'white',
      marginHorizontal:12,
      paddingHorizontal:20,
  },
  text:{
    marginVertical:20,
    color: "white",
    paddingHorizontal: 10,
    fontSize:20,
    fontWeight:'300',
  },
  ButtonText:{
    textAlign:'center',
    color: "black",
    fontSize:30,
    fontWeight:'300',
    
    
  },
  error:{
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'300',
    fontSize:20,
    color:'red',
    textAlign:'center',

  }
});
