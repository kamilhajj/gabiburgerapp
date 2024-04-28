import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigation';
import { GlobalProvider } from './src/constants/GlobalContext';
export default function App() {
  return (
    <GlobalProvider>
      <View style={{ flex: 1 }}>
        <RootNavigator />
        <StatusBar hidden={true} />
      </View>
    </GlobalProvider>
  );
}
