import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@router';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'PostCommentsScreen'>) {
  const postId = route.params.postId;

  const {list, fetchNextPage, hasNextpage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen title="Comentarios" canGoBack>
      <Box>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextpage={hasNextpage}
            />
          }
        />
      </Box>
    </Screen>
  );
}
