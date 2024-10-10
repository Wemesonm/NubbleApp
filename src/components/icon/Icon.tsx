import React from 'react';
import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import { EyeOnIcon } from '../../assets/icons/EyeOn';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../assets/icons/ArrowRightIcon';
import { BellIcon } from '../../assets/icons/BellIcon';
import { CameraIcon } from '../../assets/icons/CameraIcon';
import { ChatIcon } from '../../assets/icons/ChatIcon';
import { ChatOnIcon } from '../../assets/icons/ChatOnIcon';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';
import { ChevronRightIcon } from '../../assets/icons/ChevronRightIcon';
import { FlashOffIcon } from '../../assets/icons/FlashOffIcon';
import { FlashOnIcon } from '../../assets/icons/FlashOnIcon';
import { MessageIcon } from '../../assets/icons/MessageIcon';
import { MoreIcon } from '../../assets/icons/MoreIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { SendIcon } from '../../assets/icons/SendIcon';
import { SettingsIcon } from '../../assets/icons/SettingsIcon';
import { TrashIcon } from '../../assets/icons/TrashIcon';
import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon';
import { messageRoundIcon } from '../../assets/icons/messageRoundIcon';

export interface iconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: iconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = 'backgroundContrast', size, onPress }: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  } else {
    return (
      <SVGIcon color={colors[color]} size={size} />
    );
  }
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  CheckRound:CheckRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  message: MessageIcon,
  messageRoun: messageRoundIcon,
  more: MoreIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type iconName = keyof typeof iconRegistry;
