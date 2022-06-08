import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Drawer from '../components/Drawer';
import NavigaBar from '../components/Navigabar';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Box from '@mui/material/Box';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavigaBar   theme={ColorModeContext}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default MyApp
