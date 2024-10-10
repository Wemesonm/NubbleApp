import React from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Screen,
  Icon,
  Text,
  Button,
} from '@components';
import { RootStackParamList } from '@router';


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
