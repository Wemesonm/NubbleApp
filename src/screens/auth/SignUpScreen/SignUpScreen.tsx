import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../router/Router';
// import { useResteNavigationSucess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';

import { signUpSchema, SignUpSchema } from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
  // const { reset } = useResteNavigationSucess();
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = (formValue: SignUpSchema) => {
    //TODO
    console.log(formValue);
    // reset(
    //   {
    //     title: 'Sua conta foi criada com sucesso!',
    //     description: "Agora 'e so fazer login na nossa plataforma",
    //     icon: {
    //       name: 'CheckRound',
    //       color: 'sucess',
    //     },
    //   }
    // );
  };

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

      <FormTextInput
        control={control}
        name="userName"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Type your e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Password"
        placeholder="Type your password"
        boxProps={{ mb: 's48' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
