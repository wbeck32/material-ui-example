const tricks = {
  trick1: {
    palette: {
      primary: {
        light: palette.primary[
          300
        ],
        main: palette.primary[
          500
        ],
        dark: palette.primary[
          700
        ],
        contrastText: getContrastText(palette.primary[
          500
        ]),
      },
      secondary: {
        light: palette.secondary.A200,
        main: palette.secondary.A400,
        dark: palette.secondary.A700,
        contrastText: getContrastText(palette.secondary.A400),
      },
      error: {
        light: palette.error[
          300
        ],
        main: palette.error[
          500
        ],
        dark: palette.error[
          700
        ],
        contrastText: getContrastText(palette.error[
          500
        ]),
      },
    }
  },
  trick2: {
    palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  },
  trick3: {
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
  }
};
