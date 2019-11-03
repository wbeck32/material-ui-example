import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';

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
};

let theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920
    },
    direction: 'ltr',
    mixins: {},
    overrides: {},
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
      },
      tonalOffset: 0.2,
      contrastThreshhold: 3,
      getContrastText: fns.getContrastText,
      background: {
        paper: '',
        default: '',
      },
      common: {
        white: '#fff',
        black: '#000',
      },
      divider: {
        main: '',
      },
      error: {
        main: '',
      },
      primary: {
        main: '#000',
      },
      secondary: {
        main: '',
      },
      action: {
        active: '',
        hover: '',
        hoverOpacity: 0.08,
        selected: '',
        disabled: '',
        disabledBackground: '',
      }
    },
    props: {},
    typography: {
      htmlFontSize: 16,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1,
        letterSpacing: ' - 0.01562em'
      },
      h2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1,
        letterSpacing: ' - 0.00833em'
      },
      h3: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.04,
        letterSpacing: '0em'
      },
      h4: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.17,
        letterSpacing: '0.00735em'
      },
      h5: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.33,
        letterSpacing: '0em'
      },
      h6: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em'
      },
      subtitle1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em'
      },
      subtitle2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
        letterSpacing: '0.00714em'
      },
      body1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em'
      },
      body2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em'
      },
      button: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase'
      },
      caption: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em'
      },
      overline: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'uppercase'
      }
    },
    shape: {
      borderRadius: 4
    },
    transitions: {
      easing: {
        easeInOut: 'cubic - bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic - bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic - bezier(0.4, 0, 1, 1)',
        sharp: 'cubic - bezier(0.4, 0, 0.6, 1)'
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
    nprogress: {
      color: '#fff'
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;