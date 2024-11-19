import * as React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green for agriculture
    },
    secondary: {
      main: '#8BC34A', // Lighter green accent
    },
    background: {
      default: '#f0f4f1',
      paper: '#ffffff',
    },
    text: {
      primary: '#2e3b32',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handles user login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      // Store token and login status in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isLoggedIn', 'true');

      // Update login state in App.jsx
      onLogin();

      // Redirect to homepage after login
      navigate('/');
    } catch (error) {
      const message =
        error.response && error.response.status === 401
          ? 'Incorrect email or password. Please try again.'
          : 'Login failed. Please check your credentials.';
      setErrorMessage(message);
    }
  };

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 4,
            maxWidth: 400,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h1" color="primary" mb={3} fontWeight="bold">
            Welcome Back to Hinga Heza
          </Typography>
          <Typography variant="body1" mb={3} color="text.primary">
            Sign in to explore available agricultural lands and connect with landowners.
          </Typography>
          {errorMessage && (
            <Typography color="error" mb={2}>
              {errorMessage}
            </Typography>
          )}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle fontSize="inherit" color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel size="small" htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="inherit" color="primary" />
                    ) : (
                      <Visibility fontSize="inherit" color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mb: 2, color: 'white' }}
          >
            Sign In
          </Button>
          <Link
            href="/signup"
            variant="body2"
            color="secondary"
            sx={{ textAlign: 'center', display: 'block', mb: 1, fontWeight: 'bold' }}
          >
            Don’t have an account? Sign up
          </Link>
          <Link
            href="/"
            variant="body2"
            color="secondary"
            sx={{ textAlign: 'center', display: 'block', fontWeight: 'bold' }}
          >
            Forgot password?
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
