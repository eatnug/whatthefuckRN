/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootStackNavigator from './naviagtions';
import styled from 'styled-components/native';

const App = () => (
  <NavigationContainer>
    <StyledSafeAreaView>
      <RootStackNavigator />
    </StyledSafeAreaView>
  </NavigationContainer>
);

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

export default App;
