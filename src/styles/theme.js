import React from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

// const theme = {
//   colors: {
//     black: '#000e1a',
//     white: '#fff',
//     blue: '#007ce0',
//     navy: '#004175',
//     prim: 'lavender',
//   },
// };

const Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
