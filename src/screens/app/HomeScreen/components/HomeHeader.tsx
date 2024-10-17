import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo width={70}/>
      <Box flexDirection="row">
        <Box marginRight="s24">
          <Icon name="search" />
        </Box>
        <Box marginRight="s24">
          <Icon name="bell" />
        </Box>
        <Box>
          <Icon name="chat" />
        </Box>
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
  justifyContent: 'space-between',
};
