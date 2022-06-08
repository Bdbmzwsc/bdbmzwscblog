import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@mui/material/NoSsr';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

const StyledAvatar = styled(Avatar)`
  ${() => `
  cursor: pointer;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.3);
  }
  `}
`;

export default function Avatar_new({src,sx}: any                            ) {
  return (
    <NoSsr>
          <StyledAvatar><Avatar src={src} sx={sx}></Avatar></StyledAvatar>
    </NoSsr>
  );
}