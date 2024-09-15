import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';

import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" bold>Coffstack</Text>

          <Button loading marginBottom="s10" title="Primary"/>
          <Button marginBottom="s10" title="Primary" preset="primary" disabled/>
          <Button marginBottom="s10" title="Outline" preset="outline"/>
          <Button title="Loading" preset="outline" disabled/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
