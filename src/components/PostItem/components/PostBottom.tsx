import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id' >;

export function PostBottom({author, text, commentCount, id}: Props) {
  const commentText = getCommentText(commentCount);

  const navigation = useNavigation();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentsScreen', {
      postId: id,
    });
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text onPress={navigateToPostCommentScreen} preset="paragraphSmall" color="primary" bold mt="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

const getCommentText = (commentCount: number): string | null => {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentario';
  } else {
    return `ver ${commentCount} comentarios`;
  }
};
