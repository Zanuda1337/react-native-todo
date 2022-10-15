import { Dimensions } from 'react-native';

const palette = {
  white: '#fff',
  white_10: 'rgba(255,255,255,0.1)',
  cornflower_10: 'rgba(98,166,229,0.1)',
  'blue-klein': '#3785cc',
  'very-pale-blue': '#eeeeef',
  'cadet-blue-crayola': '#C3C3C5',
  lavender: '#eef8fd',
  'smoky-white': '#f9f9f9',
  'smoky-white_94': 'rgba(249, 249, 249, 0.94)',
  'gray-brown': '#3b3b3b',
  anthracite_30: 'rgba(60, 60, 67, 0.3)',
};

export const globalTheme = {
  responsiveValue: 7 + 3 * (Dimensions.get('window').width / 392),
  colors: {
    'main-background': palette.white,
    'main-foreground': palette['blue-klein'],
    'foreground-pale': palette['cadet-blue-crayola'],
    'main-background-highlighted': palette.white_10,
    'main-foreground-highlighted': palette.cornflower_10,
    'filter-separator': palette['very-pale-blue'],
    'items-separator': palette.lavender,
    'delete-button': palette['smoky-white'],
    'modal-background': palette['smoky-white_94'],
    'form-foreground': palette['gray-brown'],
    'input-border': palette.anthracite_30,
  },
};
