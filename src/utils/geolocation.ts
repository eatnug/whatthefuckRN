import Geolocation from '@react-native-community/geolocation';
import { Alert, Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { handlePermissionError, requestPermission } from './permissions';

const getCurrentPositionAsync = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      result => {
        resolve(result);
      },
      error => {
        reject(error);
      }
    );
  });

export const getCurrentPosition = async () => {
  try {
    const permissionType = Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    });
    await requestPermission(permissionType!);
    const location = await getCurrentPositionAsync();
    return location;
  } catch (error) {
    const fullyHandled = handlePermissionError(error);
    if (!fullyHandled) Alert.alert(error.message);
  }
};
