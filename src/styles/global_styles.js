import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: Colors.black,
  },

  playerContainer: {
    flex: 1,
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    //justifyContent:,
  },
  pressableStyle: {
    opacity: 1,
  },
  pressedStyle: {
    opacity: 0.8,
  },
  mainGamesContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 15,
  },
  pressableStyle: {},
  pressedStyle: {
    opacity: 0.8,
  },
});