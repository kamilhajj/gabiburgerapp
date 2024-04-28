import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { Colors } from '../constants/colors';
import { globalStyles } from '../styles/global_styles';
import dyceSymbole from '../../assets/Dyce-Symbol.png';
import gameImage from '../../assets/game-menu.jpg';
import foodImage from '../../assets/food-menu.jpeg';
import Home_buttons from './Home_buttons';
export default function Home({navigation}) {

  return (
    <View style={globalStyles.screenContainer}>
      <View style={styles.homeScreenContainer}>
        <Image source={dyceSymbole} style={styles.logo} />
        <Text style={{ color: Colors.black }}>
          "Where every move is a winning move"
        </Text>
        <View style={styles.buttonsContainer}>
          <Pressable onPress={() => navigation.navigate('NumberOfPlayers')}>
            <Home_buttons image={gameImage} title={'Games'} />
          </Pressable>
          <Home_buttons image={foodImage} title={'Menu'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    borderRadius: 20,
    backgroundColor: Colors.light,
    width: '90%',
    height: '80%',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    margin: 5,
    width: '12%',
    height: '26%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop:10
  },
});
