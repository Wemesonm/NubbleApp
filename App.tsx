import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/router/Router';


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
