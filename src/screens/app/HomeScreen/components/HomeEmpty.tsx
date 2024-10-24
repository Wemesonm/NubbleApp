import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Nao foi possivel carregar o feed
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }
  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          Nao foi possivel carregar o feed- Error
        </Text>
        <Button title="Reload" onPress={refetch} preset="outline" />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
