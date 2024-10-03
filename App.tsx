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
          <Box marginBottom="s20">
            <TextInput
              errorMessage='Mensagem de Erro'
              label="E-mail"
              placeholder="Type your e-mail"
            />
          </Box>
          <Box>
            <TextInput
              errorMessage='Mensagem de Erro'
              label="Password"
              placeholder="Type your password"
            />
          </Box>
          <Text
            bold
            preset="paragraphSmall"
            color="primary"
            marginTop="s10">
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
