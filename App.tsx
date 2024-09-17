import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from './src/components/Text/Text';

import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" bold>Coffstack</Text>
          <Box flexDirection="row" flexWrap="wrap" gap="s10">
            <Icon name="arrowLeft" size={50} color="carroteSecondery" />
            <Icon name="arrowRight" size={50} color="carroteSecondery" />
            <Icon name="bell" size={50} color="carroteSecondery" />
            <Icon name="camera" size={50} color="carroteSecondery" />
            <Icon name="chat" size={50} color="carroteSecondery" />
            <Icon name="chatOn" size={50} color="carroteSecondery" />
            <Icon name="check" size={50} color="carroteSecondery" />
            <Icon name="chevronRight" size={50} color="carroteSecondery" />
            <Icon name="comment" size={50} color="carroteSecondery" />
            <Icon name="eyeOff" size={50} color="carroteSecondery" />
            <Icon name="eyeOn" size={50} color="carroteSecondery" />
            <Icon name="flashOff" size={50} color="carroteSecondery" />
            <Icon name="flashOn" size={50} color="carroteSecondery" />
            <Icon name="message" size={50} color="carroteSecondery" />
            <Icon name="more" size={50} color="carroteSecondery" />
            <Icon name="search" size={50} color="carroteSecondery" />
            <Icon name="send" size={50} color="carroteSecondery" />
            <Icon name="settings" size={50} color="carroteSecondery" />
            <Icon name="trash" size={50} color="carroteSecondery" />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
