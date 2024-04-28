import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Export a custom hook to use the context
export const useGlobalContext = () => useContext(GlobalContext);

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [globalValue, setGlobalValue] = useState('Catan');
  const [globalDescription, setGlobalDescription] = useState('');
  const [globalTutorialVideo, setGlobalTutorialVideo] = useState('');
  const [globalTrailerVideo, setGlobalTrailerVideo] = useState('');

  const updateGlobalValue = newValue => {
    setGlobalValue(newValue);
  };
  const updateGlobalDescription = newValue => {
    setGlobalDescription(newValue);
  };
  const updateGlobalTutorialVideo = newValue => {
    setGlobalTutorialVideo(newValue);
  };
  const updateGlobalTrailerVideo = newValue => {
    setGlobalTrailerVideo(newValue);
  };

  return (
    <GlobalContext.Provider
      value={{
        globalValue,
        updateGlobalValue,
        globalDescription,
        updateGlobalDescription,
        globalTutorialVideo,
        updateGlobalTutorialVideo,
        globalTrailerVideo,
        updateGlobalTrailerVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
