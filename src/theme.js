import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

const colors = {
  common: {
    black: '#121212',
    white: '#fff'
  },
  // text color
  shades: {
    dark: {
      100: '#2c3032', // Neutral900
      90: 'rgba(44, 48, 50, 0.9)',
      60: 'rgba(44, 48, 50, 0.6)',
      40: 'rgba(44, 48, 50, 0.4)',
      25: 'rgba(44, 48, 50, 0.25)',
      12: 'rgba(44, 48, 50, 0.12)',
      5: 'rgba(44, 48, 50, 0.05)'
    },
    light: {
      100: '#fff', // White
      60: 'rgba(255, 255, 255, 0.6)',
      40: 'rgba(255, 255, 255, 0.4)',
      20: 'rgba(255, 255, 255, 0.2)',
      12: 'rgba(255, 255, 255, 0.12)',
      5: 'rgba(255, 255, 255, 0.05)'
    }
  },
  // white & grey 
  neutral: {
    50: '#f8f9f9',
    100: '#e1e3e4',
    200: '#cbcdcf',
    300: '#b4b8ba',
    400: '#9da2a6',
    500: '#868d91',
    600: '#6f777c',
    700: '#595f63',
    800: '#43474a',
    900: '#2c3032',
    A100: '#ddddde',
    A200: '#b9babb',
    A400: '#7c7e7f',
    A700: '#545759'
  },

  primaryBlue: {
    10: '#041a70',
    20: '#072687',
    30: '#0c37a8',
    40: '#4f8df2',
    50: '#1861e',
    60: '#114ac9',
    70: '#72aaf8',
    80: '#a2cbfc',
    90: '#d0e6fd',
    95: '#e8f3ff'
  }
}
const variables = {
  palette: {
    primary: {
      main: '#1861ea',
      light: '#4f8df2',
      dark: '#114ac9',
      contrastText: colors.common.white
    },
    secondary: {
      main: '#fed502',
      light: '#fee241',
      dark: '#dab301',
      contrastText: colors.common.black
    },
    error: {
      main: '#c1300b',
      light: '#cd593b',
      dark: '#872107',
      contrastText: colors.common.white,
    },
    warning: {
      main: '#f29e02',
      light: '#f4b134',
      dark: '#a96e01',
      contrastText: colors.common.black,
    },
    info: {
      main: '#072687',
      light: '#0C37A8',
      dark: '#041A70',
      contrastText: colors.common.white,
    },
    success: {
      main: '#709f1d',
      light: '#8cb24a',
      dark: '#4e6f14',
      contrastText: colors.common.white,
    },
    text: {
      primary: colors.shades.dark[100],
      secondary: colors.shades.dark[60],
      hint: colors.shades.dark[40],
      disabled: colors.shades.dark[25]
    },
    background: {
      default: colors.neutral[50],
      paper: colors.common.white
    },
    grey: {
      ...colors.neutral
    },
    action: {

    },
    primaryBlue: {
      ...colors.primaryBlue
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Paris, sans-serif',
    fontSize: 16,
    lineHeight: 1.5,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontSmoothing: 'antialiased',
    h1: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '6.4rem',
      lineHeight: 1.084,
      letterSpacing: '-0.016em',
      fontSmoothing: 'antialiased'
    },
    h2: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '4.4rem',
      lineHeight: 1.125,
      letterSpacing: '-0.008em',
      fontSmoothing: 'antialiased'
    },
    h3: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '3.2rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
      fontSmoothing: 'antialiased'
    },
    h4: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '2.4rem',
      lineHeight: 1.177,
      letterSpacing: '0.007em',
      fontSmoothing: 'antialiased'
    },
    h5: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
      fontSmoothing: 'antialiased'
    },
    h6: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '1.4rem',
      lineHeight: 1.2,
      letterSpacing: '0.007em',
      fontSmoothing: 'antialiased'
    },
    subtitle1: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '1.2rem',
      lineHeight: 1.5,
      letterSpacing: '0.009em',
      fontSmoothing: 'antialiased'
    },
    subtitle2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.007em',
      fontSmoothing: 'antialiased'
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.028em',
      fontSmoothing: 'antialiased'
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.429,
      letterSpacing: '0.018em',
      fontSmoothing: 'antialiased'
    },
    button: {
      fontFamily: 'Paris, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.715,
      letterSpacing: '0.018em',
      textTransform: 'inherit',
      fontSmoothing: 'antialiased'
    },
    caption: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: 1.334,
      letterSpacing: '0.017em',
      fontSmoothing: 'antialiased'
    },
    overline: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.6,
      letterSpacing: '0.150em',
      textTransform: 'uppercase',
      fontSmoothing: 'antialiased'
    }
  },
  spacing: 8
};

const spacing = createSpacing(variables.spacing);

export const appThemeOptions = {
  themeName: 'Realistic Paris 2024',
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
    unit: 'px',
    step: 5
  },
  // text direction: left to right
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      // min width is 0px && the device direciton is landscape
      '@media (min-width: 0px) and (orientation: landscape)': {
        minHeight: 48
      },
      '@media (min-width: 600px)': {
        minHeight: 56
      }
    }
  },
  palette: {
    type: 'light', // light mode
    primary: { ...variables.palette.primary },
    secondary: { ...variables.palette.secondary },
    error: { ...variables.palette.error },
    warning: { ...variables.palette.warning },
    info: { ...variables.palette.info },
    success: { ...variables.palette.success },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
    text: { ...variables.palette.text },
    divider: 'rgba(0, 0, 0, 0.1)',
    background: { ...variables.palette.background },
    grey: { ...variables.palette.grey },
    primaryBlue: { ...variables.palette.primaryBlue},
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.16),0px 1px 1px 0px rgba(0,0,0,0.08),0px 1px 3px 0px rgba(0,0,0,0.04)',
    '0px 3px 1px -2px rgba(0,0,0,0.16),0px 2px 2px 0px rgba(0,0,0,0.08),0px 1px 5px 0px rgba(0,0,0,0.04)',
    '0px 3px 3px -2px rgba(0,0,0,0.16),0px 3px 4px 0px rgba(0,0,0,0.08),0px 1px 8px 0px rgba(0,0,0,0.04)',
    '0px 2px 4px -1px rgba(0,0,0,0.16),0px 4px 5px 0px rgba(0,0,0,0.08),0px 1px 10px 0px rgba(0,0,0,0.04)',
    '0px 3px 5px -1px rgba(0,0,0,0.16),0px 5px 8px 0px rgba(0,0,0,0.08),0px 1px 14px 0px rgba(0,0,0,0.04)',
    '0px 3px 5px -1px rgba(0,0,0,0.16),0px 6px 10px 0px rgba(0,0,0,0.08),0px 1px 18px 0px rgba(0,0,0,0.04)',
    '0px 4px 5px -2px rgba(0,0,0,0.16),0px 7px 10px 1px rgba(0,0,0,0.08),0px 2px 16px 1px rgba(0,0,0,0.04)',
    '0px 5px 5px -3px rgba(0,0,0,0.16),0px 8px 10px 1px rgba(0,0,0,0.08),0px 3px 14px 2px rgba(0,0,0,0.04)',
    '0px 5px 6px -3px rgba(0,0,0,0.16),0px 9px 12px 1px rgba(0,0,0,0.08),0px 3px 16px 2px rgba(0,0,0,0.04)',
    '0px 6px 6px -3px rgba(0,0,0,0.16),0px 10px 14px 1px rgba(0,0,0,0.08),0px 4px 18px 3px rgba(0,0,0,0.04)',
    '0px 6px 7px -4px rgba(0,0,0,0.16),0px 11px 15px 1px rgba(0,0,0,0.08),0px 4px 20px 3px rgba(0,0,0,0.04)',
    '0px 7px 8px -4px rgba(0,0,0,0.16),0px 12px 17px 2px rgba(0,0,0,0.08),0px 5px 22px 4px rgba(0,0,0,0.04)',
    '0px 7px 8px -4px rgba(0,0,0,0.16),0px 13px 19px 2px rgba(0,0,0,0.08),0px 5px 24px 4px rgba(0,0,0,0.04)',
    '0px 7px 9px -4px rgba(0,0,0,0.16),0px 14px 21px 2px rgba(0,0,0,0.08),0px 5px 26px 4px rgba(0,0,0,0.04)',
    '0px 8px 9px -5px rgba(0,0,0,0.16),0px 15px 22px 2px rgba(0,0,0,0.08),0px 6px 28px 5px rgba(0,0,0,0.04)',
    '0px 8px 10px -5px rgba(0,0,0,0.16),0px 16px 24px 2px rgba(0,0,0,0.08),0px 6px 30px 5px rgba(0,0,0,0.04)',
    '0px 8px 11px -5px rgba(0,0,0,0.16),0px 17px 26px 2px rgba(0,0,0,0.08),0px 6px 32px 5px rgba(0,0,0,0.04)',
    '0px 9px 11px -5px rgba(0,0,0,0.16),0px 18px 28px 2px rgba(0,0,0,0.08),0px 7px 34px 6px rgba(0,0,0,0.04)',
    '0px 9px 12px -6px rgba(0,0,0,0.16),0px 19px 29px 2px rgba(0,0,0,0.08),0px 7px 36px 6px rgba(0,0,0,0.04)',
    '0px 10px 13px -6px rgba(0,0,0,0.16),0px 20px 31px 3px rgba(0,0,0,0.08),0px 8px 38px 7px rgba(0,0,0,0.04)',
    '0px 10px 13px -6px rgba(0,0,0,0.16),0px 21px 33px 3px rgba(0,0,0,0.08),0px 8px 40px 7px rgba(0,0,0,0.04)',
    '0px 10px 14px -6px rgba(0,0,0,0.16),0px 22px 35px 3px rgba(0,0,0,0.08),0px 8px 42px 7px rgba(0,0,0,0.04)',
    '0px 11px 14px -7px rgba(0,0,0,0.16),0px 23px 36px 3px rgba(0,0,0,0.08),0px 9px 44px 8px rgba(0,0,0,0.04)',
    '0px 11px 15px -7px rgba(0,0,0,0.16),0px 24px 38px 3px rgba(0,0,0,0.08),0px 9px 46px 8px rgba(0,0,0,0.04)'
  ],
  typography: {
    ...variables.typography
  },
  spacing: variables.spacing,
  shape: {
    borderRadius: 8,
    borderRadiusSmall: 4,
    borderRadiusMedium: 12,
    borderRadiusLarge: 16,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },

}

export function createTheme(options = {}) {
  const themeOptions = {
    ...appThemeOptions,
    ...options
  };

  let theme = createMuiTheme(themeOptions);

  theme = responsiveFontSizes(theme, {
    breakpoints: themeOptions.breakpoints.keys,
    disableAlign: false,
    variants: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'button',
      'caption',
      'overline'
    ]
  });

  return theme;
}