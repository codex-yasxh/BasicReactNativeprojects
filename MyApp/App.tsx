import React from 'react';
import type {JSX, PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App() : JSX.Element {
  return (
    <View>
      <Text style = {{fontSize: 30}}> Hello React Native </Text>
      <Text style = {{fontSize: 30}}> Hello KMP </Text>
      <Text style = {{fontSize: 30}}> Hello Compose </Text>
    </View>
  );
};

export default App;
