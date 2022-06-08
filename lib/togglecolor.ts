import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

export function ToggleColor({color}: {color: any}) {
const [mode, setMode] = React.useState<'light' | 'dark'>(color);
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
  return theme
}