import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Button, Typography } from '@mui/material';
import { createSvgIcon } from '@mui/material/utils';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate=useNavigate()
    const HomeIcon = createSvgIcon(
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
        'Home',
      );
      
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#66b3ff' }}>
          <Toolbar>
            <Typography color="inherit" variant="h5" component="h4">
              Logo
            </Typography>
            <Typography
              sx={{ m: 2, mx: 'auto', marginRight: '0', width: 200 }}
              variant="h6"
              component="h6"
            >
              {/* Home
            <span>
            <AddIcon />

            </span> */}
              <HomeIcon
                sx={{ fontSize: 40, color: 'white' }}
                onClick={() => navigate('/')}
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
