import { View, Text,StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from "../constants/colors";
import { globalStyles } from "../styles/global_styles";


export default function PlayerNumber({ iconName, iconText }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={65} color={Colors.yellow} style={styles.iconStyle} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: Colors.black,
  },
  iconStyle: {
    marginBottom: -20,
    //opacity:0.8
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  }
});