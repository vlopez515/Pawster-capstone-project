import React from 'react'
import { IconButton, Stack, Button, Typography, Toolbar, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../Context/AuthContext';

export default function NavBar() {

  const { logOut, user} = UserAuth();
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
        <img width ="40px" height="40px" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_568656.png&f=1&nofb=1&ipt=0b7501c5cee0570f798ceffd572515faa6728c4d3095a6a7566b5c8da43013b2&ipo=images"></img>{user?.displayName}
        {user?.displayName ? (
        <Button onClick={handleSignOut}>Logout</Button>
      ) : (
        <Button><Link to='/signin'>Log In</Link></Button>
      )}
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
