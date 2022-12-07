import React from 'react'
import Button from '@mui/material/Button';
import { IconButton, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { GoogleButton } from 'react-google-button'
// import GoogleButton from 'react-google-button'
// import { signInWithGoogle, signOut } from "../Firebase";
// import {UserAuth} from '../Context/AuthContext'
// import { UserAuth } from '../../Context/AuthContext';

export default function NavBar() {
  let navigate = useNavigate()
  const sections = [
    { title: 'About Pawster', url: '/about' },
    { title: 'Support', url: '/support' },
    { title: 'Contact Us', url: '/contact' },
  ];

  const handleSignOut = () => {
    console.log("hi")
  }
  

  return (
    <div className='nav-bar'>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'grey.500' }}>
        <Button variant="outlined" size="small" onClick={() => navigate(-1)}>Back</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link href="/" underline='none'><h2 >Pawster</h2></Link>
        </Typography>
        <IconButton>

        </IconButton>
        <Button variant="outlined" size="small" href="/login" onClick={handleSignOut}>
          Login
        </Button>
      </Toolbar>
      <Stack
        direction='row'
        spacing={2}
        component="nav"
        sx={{ justifyContent: 'space-evenly', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            underline='none'
            noWrap
            key={section.title}
            href={section.url}
            sx={{ p: 1, flexShrink: 0, }}
          >
            {section.title}
          </Link>
        ))}
      </Stack>
    </div>
  )
}
