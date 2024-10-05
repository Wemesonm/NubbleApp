import React from 'react';

import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Icon } from '../../../components/icon/Icon';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text marginBottom="s8" preset="paragraphLarge">Hello!</Text>
      <Text marginBottom="s40" preset="paragraphLarge">Insert your e-mail and password!</Text>
      <TextInput
        errorMessage="Mensagem de Erro"
        label="E-mail"
        placeholder="Type your e-mail"
        boxProps={{ mb: 's20' }}
      />
      <TextInput
        label="Password"
        placeholder="Type your password"
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{ mb: 's10' }}
      />
      <Text
        bold
        preset="paragraphSmall"
        color="primary">
        I forgot my password
      </Text>
      <Button marginTop="s48" title="Enter" />
      <Button preset="outline" marginTop="s12" title="Enter" />
    </Screen>



  );
}
