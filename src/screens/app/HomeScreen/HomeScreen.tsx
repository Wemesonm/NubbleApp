import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@router';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Settings"
        marginTop="s14"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}
