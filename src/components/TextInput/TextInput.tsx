import React, { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useRef } from 'react';

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
}

export function TextInput({ label, errorMessage, ...props }: TextInputProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...props}
          />
        </Box>
        {errorMessage && (<Text preset="paragraphSmall" color="error" bold>{errorMessage}</Text>)}
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};



