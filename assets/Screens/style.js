import {StyleSheet,Dimensions} from 'react-native';
import Color from '../components/Color/Color';

export default StyleSheet.create({
  
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Color.white,
      },
      title: {
        color: Color.darkText,
        fontSize: 16,
      },});
