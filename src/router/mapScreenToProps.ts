import { IconProps } from '@components';
import {AppTabBottomTabParamList} from '@router';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Inicio',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo Poster',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookMarkFill',
      unfocused: 'bookMark',
    },
  },
  MyProfileScreen: {
    label: 'My Profile',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
