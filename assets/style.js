import {StyleSheet,Dimensions} from 'react-native';

const ImageWidth = Dimensions.get('window').width/2;
export default StyleSheet.create({
  
  containerImage: {
    
    justifyContent: "center",
    alignItems: "center",
    width:ImageWidth,
    height:ImageWidth,
    marginLeft:30,
  },
  image:{
      width:ImageWidth/2,
  },
  title: {
    fontWeight:'600',
    color: "#fff",
    fontSize: 26,
    letterSpacing:-0.5,
    marginTop:15,
    
    
  },
  HomeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#4F6D7B'
  },
  text:{
    
    fontSize:13,
    fontWeight: "600",
    color: "white",
  }
});
