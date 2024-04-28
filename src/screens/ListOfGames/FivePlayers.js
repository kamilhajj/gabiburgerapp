import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_styles';
export default function FivePlayers({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Five Players</Text>
    </View>
  );
}
