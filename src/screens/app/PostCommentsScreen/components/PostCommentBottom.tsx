import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextpage: boolean;
}

export function PostCommentBottom({fetchNextPage, hasNextpage}: Props) {
  if (hasNextpage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center">
          Ver Mais
        </Text>
      </Pressable>
    );
  }
  return null;
}
