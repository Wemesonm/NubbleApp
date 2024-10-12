import React from 'react';

import {Screen, Text} from '@components';
import { AppTabScreenProps } from '@router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MyProfileScreen(props: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">My ProfileScreen Screen</Text>
    </Screen>
  );
}
