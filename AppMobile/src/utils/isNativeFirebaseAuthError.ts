import { FirebaseAuthTypes} from '@react-native-firebase/auth'

export function isNativeFirebaseAuthError(
    obj: unknown,
    ): obj is FirebaseAuthTypes.isNativeFirebaseAuthError {
        return typeof obj === 'object' &&  obj != null && 'code' in obj;
    }