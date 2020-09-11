import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '@/screens/InitialScreen';

const Stack = createStackNavigator();

const RootStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="initial" component={InitialScreen} />
  </Stack.Navigator>
);

export default RootStackNavigator;
