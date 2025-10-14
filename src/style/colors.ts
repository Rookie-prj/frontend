export const colors = {
  gray: {
    950: '#030712',
    900: '#101828',
    800: '#1E2939',
    700: '#364153',
    600: '#4A5565',
    500: '#6A7282',
    400: '#99A1AF',
    300: '#D1D5DC',
    200: '#E5E7EB',
    150: '#EDEFF2',
    100: '#F3F4F6',
    70: '#F6F7F9',
    50: '#F9FAFB',
    30: '#AEAEB2',
  },
  green: {
    600: '#2D743C',
    500: '#337F43',
    400: '#329B49',
    300: '#45BE67',
    200: '#66F285',
    100: '#BDF9CB',
    50: '#E1FFE8T',
  },
  white: '#fff',
  red: {
    300: '#ff6C22',
  },
} as const;

export type ColorKey = keyof typeof colors;
export type GrayKey = keyof typeof colors.gray;
export type RedKey = keyof typeof colors.red;
export type WhiteKey = keyof typeof colors.white;
export type GreenKey = keyof typeof colors.green;
