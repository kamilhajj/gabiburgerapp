import React from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { useGlobalContext } from '../constants/GlobalContext';

const YouTubeTrailerScreen = ({ navigation }) => {
  const { globalTrailerVideo } = useGlobalContext();

  return (
    <>
      <WebView
        source={{ uri:{globalTrailerVideo} }}
        style={{ flex: 1 }}
      />
    </>
  );
};

export default YouTubeTrailerScreen;
