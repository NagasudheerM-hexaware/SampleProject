import React from 'react';
import { AppBar, Toolbar, Typography, Button,Stack,Grid } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
    <Toolbar>
      {/* Left side - Titles */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="h6" component="div" fontWeight={800}>
            Behance
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body" component="div" >
            Discover
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body" component="div" >
            Livestreams
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body" component="div" >
            Jobs
          </Typography>
        </Grid>
      </Grid>

      {/* Right side - Buttons */}
      <Button color="primary" sx={{ width: '100px',color:"black" }}>Log In</Button>
      <Button sx={{ width: '100px',backgroundColor:"#0033cc",color:"white"  }}>Sign Up</Button>


     
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
