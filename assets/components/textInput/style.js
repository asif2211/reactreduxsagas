import { StyleSheet, Dimensions } from "react-native";

const inputHeight = 48;

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: inputHeight,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 11,
    borderRadius: 4,
  },
  containerDisable: {
    backgroundColor: "#F0F0F0",
  },
  buttonContainer: {
    height: inputHeight,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  buttonText: {
    
    fontSize: 22,
    fontWeight: "600",
    color: "#2C3F51",
  },
  input: {
    height: inputHeight,
    fontSize: 22,
    color: "#ccc",
    paddingHorizontal: 16,
    flex: 1,
  },
  border: {
    height: inputHeight,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "#ccc",
    textDecorationLine: "none",
  },
});
