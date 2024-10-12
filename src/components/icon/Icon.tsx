import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {ArrowRightIcon} from '../../assets/icons/ArrowRightIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {BookMarkFillIcon} from '../../assets/icons/BookMarkFillIcon ';
import {BookMarkIcon} from '../../assets/icons/BookMarkIcon';
import {CameraIcon} from '../../assets/icons/CameraIcon';
import {ChatIcon} from '../../assets/icons/ChatIcon';
import {ChatOnIcon} from '../../assets/icons/ChatOnIcon';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
import {CommentIcon} from '../../assets/icons/CommentIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOn';
import {FlashOffIcon} from '../../assets/icons/FlashOffIcon';
import {FlashOnIcon} from '../../assets/icons/FlashOnIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {messageRoundIcon} from '../../assets/icons/messageRoundIcon';
import {MoreIcon} from '../../assets/icons/MoreIcon';
import {NewPostIcon} from '../../assets/icons/NewPostIcon';
import {ProfileFillIcon} from '../../assets/icons/ProfileFillIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {SendIcon} from '../../assets/icons/SendIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {TrashIcon} from '../../assets/icons/TrashIcon';

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

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  } else {
    return <SVGIcon color={colors[color]} size={size} />;
  }
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bookMarkFill: BookMarkFillIcon,
  bookMark: BookMarkIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  CheckRound: CheckRoundIcon,
  chevronRight: ChevronRightIcon,
  comment: CommentIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  messageRoun: messageRoundIcon,
  more: MoreIcon,
  newPost: NewPostIcon,
  profileFill: ProfileFillIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type iconName = keyof typeof iconRegistry;
