import { View, StyleSheet,Text,Image, Pressable, Linking} from "react-native";
import { globalStyles } from "../styles/global_styles";
import { Colors } from "../constants/colors";
import { useGlobalContext } from "../constants/GlobalContext";
import Burger from "../../assets/crispytower.jpeg";
import { ScrollView } from "react-native-gesture-handler";

export default function Description({ navigation }) {
  const { globalValue, updateGlobalValue } = useGlobalContext();
  const { globalDescription, updateGlobalDescription } = useGlobalContext();
  const { globalTutorialVideo, setGlobalTutorialVideo } = useGlobalContext();

 const openYouTubeTutorialVideo = () => {
      navigation.navigate('YouTubeTutorialScreen');
  };
   const openYouTubeTrailerVideo = () => {
     navigation.navigate('YouTubeTrailerScreen');
   };

  return (
    <ScrollView>
    <View style={[globalStyles.screenContainer, { flexDirection: 'row' }]}>
      <View style={styles.leftContainers}>
        <Text style={styles.gameName}>{globalValue}</Text>
        <Image source={globalTutorialVideo} style={{resizeMode:'contain', width:300,height:300}}/>
        <Text style={styles.multilineText}>{globalDescription}</Text>
      </View>
      
    </View>
    </ScrollView>
  );
}
  
const styles = StyleSheet.create({
  leftContainers: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainers: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameName: {
    fontSize: 45,
    color: Colors.yellow,
  },
  multilineText: {
    width: 600, // Set a specific width for wrapping
    height: 150,
    fontSize: 25,
    borderRadius: 10,
    padding: 10,
    fontStyle:"italic",
    //backgroundColor: Colors.yellow,
    color: Colors.yellow,
  },
  buttons: {
    backgroundColor: Colors.black,
    borderWidth: 1,
    borderColor: Colors.yellow,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    marginBottom: 20,
    width: 200,
    height: 100,
    alignItems:'center',
  },
  buttonText: {
    fontSize: 50,
    color:Colors.yellow,
  }
});