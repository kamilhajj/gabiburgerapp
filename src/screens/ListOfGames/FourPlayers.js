import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_styles';
export default function FourPlayers({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Four Players</Text>
    </View>
  );
}
