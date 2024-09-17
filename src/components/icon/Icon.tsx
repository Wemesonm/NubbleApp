import React from 'react';

import { useAppTheme } from '../../hooks/useAppTheme';
import { ThemeColors } from '../../theme/theme';

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


export interface iconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: iconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({ name, color = 'backgroundContrast', size }: Props) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  message: MessageIcon,
  more: MoreIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type iconName = keyof typeof iconRegistry;
