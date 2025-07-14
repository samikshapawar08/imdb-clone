import React from 'react'
import {AppBar, Toolbar, styled, Box} from '@mui/material';
import {logoURL} from '../../constants/constant';
import MenuIcon from '@mui/icons-material/Menu';


const StyleToolBar = styled(Toolbar)`
  background-color: #121212;
  min-height: 56px !important;
  padding: 0 115px !important`

  const Logo = styled('img')({
    width:64
  })

function Header() {
  return (
    <AppBar>
        <StyleToolBar>
            <Logo src={logoURL} alt="IMDB Logo"  />
            <Box>
                <MenuIcon />
            </Box>

        </StyleToolBar>    
    </AppBar>
  )
}

export default Header






