

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
        <Text style={{color:'red', fontFamily:'Panchang-Light'}} preset="headingLarge">Teste</Text>
        <Text preset="headingLarge">Teste</Text>

    </SafeAreaView>
  );
}


export default App;
