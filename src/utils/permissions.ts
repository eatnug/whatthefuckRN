import { Alert, Linking } from 'react-native';
import {
  request,
  RESULTS,
  AndroidPermission,
  IOSPermission
} from 'react-native-permissions';

type PERMISSIONTYPE = AndroidPermission | IOSPermission;

export const DENIED_ERROR = Error('권한을 허용하지 않고 계속합니다.');
export const UNAVAILBLE_ERROR = Error('해당 서비스 이용이 불가능합니다.');
export const NEVER_ASK_AGAIN_ERROR = Error('설정에서 권한을 허용해주세요.');

export const requestPermission = async (permissionType: PERMISSIONTYPE) => {
  const permission = await request(permissionType);
  switch (permission) {
    case RESULTS.DENIED:
      throw DENIED_ERROR;
    case RESULTS.UNAVAILABLE:
      throw UNAVAILBLE_ERROR;
    case RESULTS.BLOCKED:
      throw NEVER_ASK_AGAIN_ERROR;
  }
};

export const handlePermissionError = (error: Error) => {
  switch (error) {
    case UNAVAILBLE_ERROR:
      Alert.alert('현재 해당 서비스 제공이 불가능한 상태입니다.');
      return true;
    case NEVER_ASK_AGAIN_ERROR:
      Alert.alert(
        '원활한 서비스 이용을 위해 권한을 허용해주세요.',
        '설정으로 이동하시겠습니까?',
        [
          { text: '설정으로 이동하기', onPress: Linking.openSettings },
          { text: '그냥 진행하기' }
        ]
      );
      return true;
  }
  return false;
};
