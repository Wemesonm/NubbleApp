import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
        <Text preset="headingLarge" bold >Testecsdcsc</Text>
        <Text preset="headingLarge" semiBold >Testecsdcsc</Text>
        <Text preset="headingLarge" italic>Teste</Text>
        <Text preset="paragraphMedium">Teste</Text>
    </SafeAreaView>
  );
}

export default App;
