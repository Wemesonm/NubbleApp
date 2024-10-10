import {useNavigation} from '@react-navigation/native';

import {AuthStackParamList} from '@router';

export function useResteNavigationSucess() {
  const navigation = useNavigation();

  const reset = (params: AuthStackParamList['SuccessScreen']) => {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  };

  return {reset};
}
