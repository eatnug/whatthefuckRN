import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootStackNavigator from '@/naviagtions';
import styled from 'styled-components/native';
import * as Sentry from '@sentry/react-native';
import { SENTRY_DSN } from '@/constants';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@/redux';

const { store, persistor } = configureStore();

const App = () => {
  useEffect(() => {
    Sentry.init({
      dsn: SENTRY_DSN
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StyledSafeAreaView>
            <RootStackNavigator />
          </StyledSafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

export default App;
