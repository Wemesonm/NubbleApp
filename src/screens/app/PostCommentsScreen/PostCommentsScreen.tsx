import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@router';

export function PostCommentsScreen({}: AppScreenProps<'PostCommentsScreen'>) {
  // route.params;
  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <Text preset="headingSmall">CommentsScreen</Text>
      </Box>
    </Screen>
  );
}
