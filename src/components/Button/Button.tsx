import React from 'react';

import { Text } from '../Text/Text';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Thema } from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  const {colors} = useTheme<Thema>();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: colors.greenPrimary,
        alignItems:'center',
        borderRadius:16,
      }}>
      <Text preset='paragraphMedium' bold style={{color: colors.grayWhite}}>{title}</Text>
    </TouchableOpacity>
  );
}
