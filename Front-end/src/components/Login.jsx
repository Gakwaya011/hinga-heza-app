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

// Custom theme with colors that fit the Hinga Heza agricultural theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green, symbolizing growth and agriculture
    },
    secondary: {
      main: '#8BC34A', // Lighter green accent
    },
    background: {
      default: '#f0f4f1', // Soft gray background for a clean look
      paper: '#ffffff', // White background for form container
    },
    text: {
      primary: '#2e3b32', // Darker green text for readability
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      
      localStorage.setItem('token', response.data.token);
      navigate('/'); 
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

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
          <Typography variant="h5" component="h1" color="primary" mb={3}>
            Sign In
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
          <Link href="/signup" variant="body2" color="secondary" sx={{ textAlign: 'center', display: 'block', mb: 1 }}>
            Don’t have an account? Sign up
          </Link>
          <Link href="/" variant="body2" color="secondary" sx={{ textAlign: 'center', display: 'block' }}>
            Forgot password?
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
