import * as React from 'react';
import "./Footer.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function Copyright() {
  return (
    <Link underline='none' href="/" sx={{ color: 'black'}}>
      <Typography variant="body2" align="center" fontFamily={'Fraunces'} >
        {'Copyright © '}
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Link>
  );
}

function SocialMedia() {
  return (
    <Typography variant='body2' align='center' >
      {' '}
      <Link href="https://www.linkedin.com/in/victorlopez-swe/" rel="noopener noreferrer" target="_blank">
        <LinkedInIcon />
      </Link>
      {' '}
      <Link href='https://github.com/vlopez515/Pawster-capstone-project' rel="noopener noreferrer" target="_blank">
        <GitHubIcon />
      </Link>
      {' '}
    </Typography>
  );
}

function Footer() {
  return (
    <Box className='footer' component="footer" sx={{ py: 4 }} >
      <Container maxWidth="lg" >
        <Typography variant="h6" align="center" fontFamily={'Fraunces'} gutterBottom>
          Pawster
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          fontFamily={'Fraunces'}
        >
          Helping our Fur-Pals find homes
        </Typography>
        <Copyright />
        <br />
        <SocialMedia />
      </Container>
    </Box>
  );
}

export default Footer