import Logo from '@/assets/logos/Logo.png';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import UserOptions from './userOptions';

export default function Header() {
  return (
    <main className="shadow-md w-full h-14 flex justify-between items-center px-4 overflow-hidden">
      <UserOptions />
      <IconButton
        disableFocusRipple
        disableTouchRipple
        disableRipple
        sx={{
          transform: 'scale(1)',
          transition: 'transform 0.5s ease-in-out',
          '&:hover': {
            transform: 'scale(1.2)',
            transition: 'transform 0.5s ease-in-out',
          },
        }}
      >
        <Image src={Logo} width={100} height={100} alt="Logo" />
      </IconButton>
      <IconButton>
        <Search color="primary" sx={{ fontSize: '30px' }} />
      </IconButton>
    </main>
  );
}
