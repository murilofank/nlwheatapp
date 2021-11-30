import React from 'react';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Apploading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <Apploading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}