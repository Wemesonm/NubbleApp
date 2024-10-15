import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  const likePost = () => {
    //TODO
  };
  const navigationToComments = () => {
    //TODO
  };
  const favoritePost = () => {
    //TODO
  };
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        onPress={likePost}
        icon={{default: 'Heart', marked: 'HeartFill'}}
        text={reactionCount}
        marked
      />
      <Item
        onPress={navigationToComments}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
        marked={false}
      />
      <Item
        onPress={favoritePost}
        icon={{default: 'bookMark', marked: 'bookMarkFill'}}
        text={favoriteCount}
        marked={false}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, marked, icon, text}: ItemProps) {
  return (
    <Box flexDirection="row">
      <TouchableOpacityBox
        onPress={onPress}
        marginRight="s24"
        flexDirection="row"
        alignItems="center">
        <Icon
          color={marked ? 'market' : undefined}
          name={marked ? icon.marked : icon.default}
        />
        {text > 0 && (
          <Text preset="paragraphSmall" bold ml="s4">
            {text}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}
