import AppBar from '@mui/material/AppBar';
import Drawer from './Drawer';
import ToggleColorSwitch from './ToggleColorSwitch';
import Toolbar from '@mui/material/Toolbar';
import  Box  from '@mui/material/Box';
import { Button } from '@mui/material';

export default function NavigaBar({theme}: {theme:any}) 
{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                <Drawer />
                <Box sx={{ pl: 'auto' }}>
                <ToggleColorSwitch colorMode={theme} />

                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}