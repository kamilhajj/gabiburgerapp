import React from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { useGlobalContext } from '../constants/GlobalContext';

const YouTubeTutorialScreen = ({ navigation }) => {
  const { globalTutorialVideo } = useGlobalContext();

  // // Disable Android back button while video is playing
  // React.useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => true // Prevent default back behavior
  //   );
  //   return () => backHandler.remove();
  // }, []);

  return (
    <>
      <WebView
        source={{ uri: {globalTutorialVideo} }}
        style={{ flex: 1 }}
      />
    </>
  );
};

export default YouTubeTutorialScreen;
