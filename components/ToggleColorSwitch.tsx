import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ToggleColorSwitch({colorMode}: {colorMode: any}) {
    const theme=useTheme();
    let color: any=React.useContext(colorMode);
    return (
       <div>
          {theme.palette.mode} mode
          


          <Button onClick={color.toggleColorMode}>colormode</Button>
        </div>
        
      );
}