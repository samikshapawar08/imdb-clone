import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from '@mui/material';
import { logoURL } from '../../constants/constant';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';

import HeaderMenu from './HeaderMenu';

const StyleToolBar = styled(Toolbar)`
  background-color: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;

  & > * {
    padding: 0 16px;
    color: white;
  }

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
      font-size: 14px;
      font-weight: 600;
      margin-left: 5px;
    }
  }
`;

const InputSearchField = styled(InputBase)`
  background-color: #ffffff;
  height: 30px;
  width: 500px;
  border-radius: 5px;
  padding: 0 10px;
`;

const Logo = styled('img')({
  width: 80 
});

function Header() {
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget); // ✅ fixed case-sensitive issue
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar>
      <StyleToolBar>
        <Logo src={logoURL} alt="IMDB Logo" />

        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>

        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField placeholder="Search…" />

        <Typography component="span">
          IMDb{' '}
          <Box component="span" sx={{ color: '#f5c518' }}>
            Pro
          </Box>
        </Typography>

        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>

        <Typography>Sign In</Typography>

        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyleToolBar>
    </AppBar>
  );
}

export default Header;
