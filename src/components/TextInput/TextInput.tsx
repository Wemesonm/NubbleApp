import React, { TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { useAppTheme } from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label?: string;
}

export function TextInput({ label, ...props }: TextInputProps) {
  const { colors } = useAppTheme();
  return (
    <Box>
      <Text preset="paragraphMedium" marginBottom="s4">
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
        placeholderTextColor={colors.gray2}
          style={$textInputStyle}
          {...props}
        />
      </Box>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
