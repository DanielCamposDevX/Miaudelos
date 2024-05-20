'use client';

import CatUser from '@/theme/customIcons/catUser.svg';
import { Add, Logout, Pets } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';

export default function UserOptions() {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} sx={{ width: '55px', height: '55px' }}>
        <CatUser />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem className="gap-3" onClick={handleClose}>
          <CatUser style={{ width: '30px', height: '30px' }} />
          Meu Perfil
        </MenuItem>

        <MenuItem className="gap-3 h-16" onClick={handleClose}>
          <Add color="primary" />
          Adicionar novo gato
        </MenuItem>

        <MenuItem className="gap-3 h-16" onClick={handleClose}>
          <Pets color="primary" />
          Meus gatos
        </MenuItem>

        <MenuItem
          className="gap-3 h-16"
          onClick={() => {
            localStorage.clear();
          }}
        >
          <Logout color="primary" />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
