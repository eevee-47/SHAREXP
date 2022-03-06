import React, { FormEvent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  // const [passwordState, setPasswordState] = useState('password');

  // const handleLogin = (username, password) => {
  //   fetch('/api/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       username,
  //       passwordUser: password,
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((data) => handleUserFetch(data))
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Fragment>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            SHAREXP
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              // autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              id='password'
              autoComplete='current-password'
              type='password'
              // type={passwordState}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Link to={'/dashboard'} style={{ textDecoration: 'none' }}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 4 }}
                // onClick={() => handleLogin(username, password)}
              >
                Sign In
              </Button>
            </Link>
            <br />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              Don't have an account?...
            </Box>
                <hr style={{width: '67%'}} />
            <Link to={'/signup'} style={{ textDecoration: 'none', marginTop: 0 }}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 1, mb: 2 }}>
                Sign Up Here
              </Button>
            </Link>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ Fragment>
  );
}
