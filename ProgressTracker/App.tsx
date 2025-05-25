

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import { Screen } from 'react-native-screens';


const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="projects" component={ProjectsScreen}/>
          {/* This creates a stack screen and links the screen name with navigation i.e. Navigation.navigate('name') */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
