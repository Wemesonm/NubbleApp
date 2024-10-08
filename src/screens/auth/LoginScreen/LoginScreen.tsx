import React from 'react';

import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../router/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {

  const navigationToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">Hello!</Text>
      <Text marginBottom="s40" preset="paragraphLarge">Insert your e-mail and password!</Text>
      <TextInput
        errorMessage="Mensagem de Erro"
        label="E-mail"
        placeholder="Type your e-mail"
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput
        label="Password"
        placeholder="Type your password"
        boxProps={{ mb: 's10' }}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        bold
        preset="paragraphSmall"
        color="primary">
        I forgot my password
      </Text>
      <Button marginTop="s48" title="Enter" />
      <Button onPress={navigationToSignUpScreen} preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}
