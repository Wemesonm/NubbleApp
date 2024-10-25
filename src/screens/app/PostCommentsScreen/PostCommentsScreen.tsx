import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {AppScreenProps} from '@router';

import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'PostCommentsScreen'>) {
  const postId = route.params.postId;

  const {list} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <FlatList data={list} renderItem={renderItem} />
      </Box>
    </Screen>
  );
}
