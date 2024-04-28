import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Garbage/Home';
import NumberOfPlayers from '../screens/NumberOfPlayers';
import OnePlayer from '../screens/ListOfGames/OnePlayer';
import TwoPlayers from '../screens/ListOfGames/TwoPlayers';
import ThreePlayers from '../screens/ListOfGames/ThreePlayers';
import FourPlayers from '../screens/ListOfGames/FourPlayers';
import FivePlayers from '../screens/ListOfGames/FivePlayers';
import SixPlayers from '../screens/ListOfGames/SixPlayers';
import SevenPlayers from '../screens/ListOfGames/SevenPlayers';
import EightPlayers from '../screens/ListOfGames/EightPlayers';
import GameDrawer from './GameDrawer';
import { Colors } from '../constants/colors';
import Home_2 from '../screens/Home_2';
import Description from '../screens/Description';
import YouTubeTutorialScreen from '../screens/YouTubeTutorialScreen';
import YouTubeTrailerScreen from '../screens/YouTubeTrailer';
import Burger from '../screens/Burger';
const HomeStack = createStackNavigator();
const HomeStackConfig = {
    
}
export default function StackNavigation() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home_2"
      screenOptions={{
        headerTintColor: Colors.yellow,
        headerBackTitleStyle: {
          alignItems: 'center',
          color: Colors.yellow,
        },
        headerStyle: {
          backgroundColor: Colors.black,
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Home_2"
        component={Home_2}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="NumberOfPlayers"
        component={NumberOfPlayers}
        options={{
          headerBackTitle: 'Home',
          headerTitleAlign: 'center',
        }}
        // headerTitleAlign: 'center'
      />
      <HomeStack.Screen
        name="Burger"
        component={Burger}
        options={{
          headerBackTitle: 'Burgers',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name="YouTubeTutorialScreen"
        component={YouTubeTutorialScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="YouTubeTrailerScreen"
        component={YouTubeTrailerScreen}
        options={{ headerShown: false }}
      />
 
      <HomeStack.Screen
        name="Description"
        component={Description}
        options={{
          headerBackTitle: 'Home',
          headerTitleAlign: 'center',
        }}
      />
    </HomeStack.Navigator>
  );
}
