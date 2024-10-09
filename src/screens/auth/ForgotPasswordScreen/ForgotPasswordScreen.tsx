import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { RootStackParamList } from '../../../router/Router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useResteNavigationSucess } from '../../../hooks/useResetNavigationSuccess';

import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPasswordSchema, forgotPasswordSchema } from './forgotPasswordSchema';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResteNavigationSucess();

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const submitForm = (values:ForgotPasswordSchema) => {
    //TODO submit form
    console.log(values);

    reset({
      title: `Enviamos as instruções ${'\n'} para seu e-mail`,
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRoun',
        color: 'primary',
      },
    });
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" marginBottom="s16">Esqueci minha senha</Text>
      <Text preset="paragraphLarge" marginBottom="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Type your e-mail"
        boxProps={{ mb: 's40' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar Senha"
      />
    </Screen>
  );
}

