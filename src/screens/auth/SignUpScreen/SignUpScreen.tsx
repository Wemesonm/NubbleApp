import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../router/Router';
import { useResteNavigationSucess } from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResteNavigationSucess();

  const submitForm = () => {
    //TODO

    reset(
      {
        title:'Sua conta foi criada com sucesso!',
        description:"Agora 'e so fazer login na nossa plataforma",
        icon:{
          name:'CheckRound',
          color:'sucess',
        },
      }
    );
  };

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">Criar uma conta</Text>
      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />
      <PasswordInput
        label="New Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button onPress={submitForm} title="Criar minha conta" />
    </Screen>
  );
}
