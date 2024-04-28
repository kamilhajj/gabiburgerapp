import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_styles';
export default function EightPlayers({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Eight Players</Text>
    </View>
  );
}
