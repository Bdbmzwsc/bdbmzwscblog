import {getSortedPostsData} from '../lib/posts';
import Box  from '@mui/material/Box';
//import '../styles/globals.css';












import Avatar_new from '../components/Avatar';
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@mui/material/NoSsr';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';


import { Avatar}  from '@mui/material';


import { CssBaseline } from '@mui/material';


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
    transform: scale(1.1);
  }
  margin: auto;
  height: 300px;
  width: 300px;
  `}
`;
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}




export default function Home({ allPostsData }: {allPostsData: {
  id: string
  date: string
  title: string
  author: string
  img: string
  des: string
  a_i: string
  card: string}[]}) {












    const posts=allPostsData.map((post)=>{
      return post.title;
    })

    return (
        <Box sx={{'margin': 'auto'}}>












              




































              
















                                            <StyledAvatar><Avatar src='https://avatars.githubusercontent.com/u/88311279?v=4' sx={{'height': 300,'width': 300}}></Avatar></StyledAvatar>
                                            <CssBaseline />
                                            <h1>helloworld</h1>
        </Box>
    )
  
  









}