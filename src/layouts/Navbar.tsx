import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar:React.FC = ():JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Homework Tracking Platform
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;