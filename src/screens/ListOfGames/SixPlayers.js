import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_styles';
export default function SixPlayers({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Six Players</Text>
    </View>
  );
}
