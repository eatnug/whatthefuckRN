/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from '@/App';
import { name as appName } from './app.json';
import { SENTRY_DSN } from '@/constants';
import * as Sentry from '@sentry/react-native';

!__DEV__ &&
  Sentry.init({
    dsn: SENTRY_DSN
  });

AppRegistry.registerComponent(appName, () => App);
