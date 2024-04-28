import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global_styles';
import GameRow_2 from '../../components/GameRow_2';
import { useGlobalContext } from '../../constants/GlobalContext';
import { TwoPlayerGames } from '../../constants/Games';
import { Games } from '../../constants/Games';

export default function TwoPlayer({ navigation }) {
  const { globalValue, updateGlobalValue } = useGlobalContext();
  const { globalDescription, updateGlobalDescription } = useGlobalContext();

  return (
    <View style={globalStyles.mainGamesContainer}>
      <ScrollView>
        {TwoPlayerGames.map((game, index) => (
          <Pressable
            key={index} // Provide a unique key for each Pressable element
            style={({ pressed }) => [
              pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
            ]}
            onPress={() => {
              navigation.navigate('Description');
              updateGlobalValue(Games[game][0]);
              updateGlobalDescription(Games[game][3]);
            }}
          >
            <GameRow_2
              key={index} // Provide a unique key for each GameRow_2 element
              theme={index}
              name={Games[game] ? Games[game][0] : ''}
              category={Games[game] ? Games[game][1] : ''}
              duration={Games[game][2]}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
