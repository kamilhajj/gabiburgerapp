import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import { Colors } from '../constants/colors';
import dyceSymbole from '../../assets/Dyce-Symbol.png';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home_2({ navigation }) {
  return (
    <View style={styles.homeScreenContainer}>
      {/* Upper container*/}
      <View style={styles.upperContainer}>
        {/* <Image style={styles.logoStyle} source={dyceSymbole} /> */}
        <Text style={styles.titleText}>
          "Introducing a new Era"
        </Text>
      </View>

      {/* Lower container*/}
      <View style={styles.lowerContainer}>
        {/* <Pressable
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <Feather name="coffee" size={125} color={Colors.yellow} />

          <Text style={styles.buttonText}>Food & Drinks</Text>
        </Pressable> */}
        <Pressable
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
          onPress={() => navigation.navigate('Burger')}
        >
          <Ionicons name="restaurant" size={125} color={Colors.yellow} />
          <Text style={styles.buttonText}>Food</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <MaterialCommunityIcons
            name="help"
            size={125}
            color={Colors.yellow}
          />
          <Text style={styles.buttonText}>Need Help?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  upperContainer: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    resizeMode: 'contain',
    height: '100%',
    width: '20%',
    //flex: 1
  },
  pressableStyle: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    borderColor: Colors.yellow,
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 35,
    padding: 15,
  },
  pressedStyle: {
    opacity: 0.8,
  },
  titleText: {
    color: Colors.yellow,
    fontStyle: 'italic',
    alignSelf: 'center',
    // position: 'absolute',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.yellow,
    fontSize: 20,
  },
});
