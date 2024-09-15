import React from 'react';

import { Text } from '../Text/Text';
import { ActivityIndicator } from 'react-native';

import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="greenPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}
    >
      {loading ? <ActivityIndicator /> :
        <Text preset="paragraphCaption" bold color="primaryContrast">
          {title}
        </Text>
      }
    </TouchableOpacityBox>
  );
}
