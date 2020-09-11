import {StyleSheet,Dimensions} from 'react-native';

const ImageWidth = Dimensions.get('window').width/2;
const containerImageSize = ImageWidth;
const ImageSize = ImageWidth/2


export default StyleSheet.create({
  // main container image remain same but internal logo image width to half
  
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    width:containerImageSize,
    height:containerImageSize,
    marginHorizontal:20,
  },
  image:{
      width:ImageSize,
  },
  title: {
    fontWeight:'600',
    color: "#fff",
    fontSize: 26,
    letterSpacing:-0.5,
    marginTop:15,
    
    
  }
});
