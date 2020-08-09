import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
