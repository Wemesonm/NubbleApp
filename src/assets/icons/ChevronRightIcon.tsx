import React from 'react';

import { Svg, Path } from 'react-native-svg';

import { iconBase } from '../../components/icon/Icon';

export function ChevronRightIcon({ size = 20, color = 'black' }: iconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7 4L14 10L7 16"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
