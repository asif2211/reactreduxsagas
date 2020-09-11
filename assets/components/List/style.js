import { StyleSheet, Dimensions } from "react-native";

import Colors from "../../components/Color/Color";

export default StyleSheet.create({
  // main container image remain same but internal logo image width to half

  
  Row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.white,
  },

  text: {
    fontSize: 18,
    color: Colors.darkText,
  },
  separator: {
    marginLeft: 20,
    backgroundColor: Colors.border,
    flex: 1,
    height: 1,
  },
});
