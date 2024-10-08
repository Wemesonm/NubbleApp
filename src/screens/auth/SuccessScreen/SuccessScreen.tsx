import React from 'react-native';
import { Screen } from '../../../components/Screen/Screen';
import { Icon } from '../../../components/icon/Icon';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../router/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({route, navigation}:ScreenProps) {

  const goBackToBegin = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Icon {...route.params.icon}/>
      <Text preset="headingLarge" marginTop="s24">{route.params.title}</Text>
      <Text preset="paragraphLarge" marginTop="s16">{route.params.description}</Text>
      <Button onPress={goBackToBegin} title="Voltar ao inicio" marginTop="s40"/>
    </Screen>
  );
}
