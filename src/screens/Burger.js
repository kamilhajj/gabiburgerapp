import { View, Text, ScrollView,Pressable,StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global_styles';
import GameRow_2 from '../components/GameRow_2';
import { Colors } from '../constants/colors';
import { useGlobalContext } from "../constants/GlobalContext";
import { Burger_list } from '../constants/Burgers';
import { Burgers } from '../constants/Burgers';

export default function Burger({ navigation }) {
    const {updateGlobalValue } = useGlobalContext();
    const {updateGlobalDescription } = useGlobalContext();
    const {updateGlobalTutorialVideo } = useGlobalContext();
    const {updateGlobalTrailerVideo } = useGlobalContext();
    
    return(
<View style={globalStyles.mainGamesContainer}>
      <ScrollView>
        {Burger_list.map((burger, index) => (
          <Pressable
            key={index} // Provide a unique key for each Pressable element
            style={({ pressed }) => [
              pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
            ]}
            onPress={() => {
              navigation.navigate('Description');
              updateGlobalValue(Burgers[burger][0]);
              updateGlobalDescription(Burgers[burger][2]);
              updateGlobalTutorialVideo(Burgers[burger][3])
            }}
          >
            <GameRow_2
              key={index} // Provide a unique key for each burgerRow_2 element
              theme={index}
              name={Burgers[burger][0]}
              duration={Burgers[burger][1]}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
    );

}
