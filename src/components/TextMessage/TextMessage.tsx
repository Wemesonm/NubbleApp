import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {$textInputStyle, Box, Text} from '@components';
import {useAppTheme} from '@hooks';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();
  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisable = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray4"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={sendIsDisable}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisable ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
