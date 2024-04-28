import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_styles';
export default function SevenPlayers({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Seven Players</Text>
    </View>
  );
}
