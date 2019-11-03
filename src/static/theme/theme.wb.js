import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';

const kpColors = {
  kpBlue: '#006ba6',
  dolphin: '#677083',
  inkyBlue: '#0d1c3d',
  deepBlue: '#2b3357',
  white: '#fff',
  alertRed: '#cc8983',
  lightGraphite: '#F4F5F6',
  hover: '#f8fafc',
  confirmation: '#4a7628',
  statusGreen: '#57a635',
  statusRed: '#b63125',
};

const fns = {
  up: () => {
    console.log('up');
  },
  down: () => {
    console.log('down');
  },
  between: () => {
    console.log('between');
  },
  only: () => {
    console.log('only');
  },
  width: () => {
    console.log('width');
  },
  gutters: () => {
    console.log('gutters');
  },
  getContrastText: bgColor => {
    console.log('bgColor: ', bgColor);
    console.log('getContrastText');
    // return kpColors.white;
  },
  augmentColor: () => {
    console.log('augmentColor');
  },
  pxToRem: () => {
    console.log('pxToRem');
  },
  round: () => {
    console.log('round');
  },
  spacing: () => {
    console.log('spacing');
  },
  create: () => {
    console.log('create');
  },
  getAutoHeightDuration: () => {
    console.log('getAutoHeightDuration');
  },
}

  ;

let theme = createMuiTheme({
  breakpoints: {

    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }

    ,
    up: fns.up,
    down: fns.down,
    between: fns.between,
    only: fns.only,
    width: fns.width,
  },
  direction: 'ltr',
  mixins: {
    gutters: fns.gutters,

    toolbar: {}

    ,
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: 'GothamHTF',
      }

      ,
    }

    ,
    MuiButton: {
      root: {
        color: kpColors.statusGreen,
      }

      ,
      label: {}

      ,
    }

    ,
    MuiContainer: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
        fontFamily: 'GothamHTF',
      }

      ,
      fixed: {
        minWidth: '100%',
      }

      ,
    }

    ,
  },
  palette: {
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    }

    ,
    tonalOffset: 0.2,
    contrastThreshhold: 3,
    getContrastText: fns.getContrastText,
    background: {
      paper: kpColors.white,
      default: kpColors.white,
    }

    ,
    common: {
      white: kpColors.white,
      black: kpColors.black,
    }

    ,
    divider: {
      main: kpColors.lightGraphite,
    }

    ,
    error: {
      main: kpColors.alertRed,
    }

    ,
    primary: {
      light: kpColors.dolphin,
      main: kpColors.kpBlue,
      dark: kpColors.deepBlue,
      contrastText: fns.getContrastText(),
    }

    ,
    secondary: {
      light: kpColors.lightGraphite,
      main: kpColors.inkyBlue,
      dark: '',
      contrastText: fns.getContrastText(),
    }

    ,
    action: {
      active: '',
      hover: kpColors.hover,
      hoverOpacity: 0.08,
      selected: '',
      disabled: '',
      disabledBackground: '',
    }

    ,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  typography: {

    htmlFontSize: 16,
    pxToRem: fns.pxToRem,
    round: fns.round,
    fontFamily: 'GothamHTF',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontWeight: 300,
      fontSize: '1.5rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em',
    }

    ,
    h2: {
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em',
    }

    ,
    h3: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '22px',
      letterSpacing: '0em',
    }

    ,
    body1: {
      fontWeight: 400,
      fontSize: '.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    }

    ,
    body2: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    }

    ,
    small: {
      fontWeight: 400,
      fontSize: '.625rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    }

    ,
    extraSmall: {
      fontWeight: 500,
      fontSize: '.5rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    }

    ,

    spacing: fns.spacing,

    shape: {
      borderRadius: 0,
      'border-top-left-radius': 0,
    }

    ,
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      }

      ,
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      }

      ,
      create: fns.create,
      getAutoHeightDuration: fns.getAutoHeightDuration,
    }

    ,
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    }

    ,
  },
}

);
theme = responsiveFontSizes(theme);

export default theme;