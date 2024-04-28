import { View, Text, Image, StyleSheet,useWindowDimensions } from "react-native";
import { Colors } from "../constants/colors";

export default function Home_buttons({ image, title }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width / 5, height: height / 3 }]}>
      <Image
        source={image}
        style={[styles.image, { width: width / 5, height: height / 3 }]}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent:'center'
  },
  image: {
    resizeMode: 'contain',
    position:'absolute',
    borderRadius:20
  },
  text: {
    fontSize: 15,
    color:Colors.yellow,
  },
})
