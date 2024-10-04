import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from './src/components/Text/Text';

import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/icon/Icon';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text marginBottom="s8" preset="paragraphLarge">Hello!</Text>
          <Text marginBottom="s40" preset="paragraphLarge">Insert your e-mail and password!</Text>
          <TextInput
            errorMessage="Mensagem de Erro"
            label="E-mail"
            placeholder="Type your e-mail"
            boxProps={{mb:'s20'}}
          />
          <TextInput
            label="Password"
            placeholder="Type your password"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{mb:'s10'}}
          />
          <Text
            bold
            preset="paragraphSmall"
            color="primary">
            I forgot my password
          </Text>
          <Button marginTop="s48" title="Enter" />
          <Button preset="outline" marginTop="s12" title="Enter" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
