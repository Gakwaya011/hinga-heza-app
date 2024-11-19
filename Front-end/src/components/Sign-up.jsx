import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export default function SignUp({ onGoogleLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async (response) => {
    console.log('Google response:', response); // Log the full response
    if (response && response.credential) {
      try {
        setLoading(true);
        const googleResponse = await axios.post('http://localhost:3000/api/auth/google', {
          token: response.credential,
        });
        console.log('Google sign-up success:', googleResponse.data); 
        // Log server response
        localStorage.setItem('token', googleResponse.data.token);
      
        navigate('/'); // Redirect to the home page
      } catch (error) {
        console.error('Google sign-up failed:', error.message);
        setError('Google sign-up failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Google sign-up failed: No credential returned.');
      setError('Google sign-up failed. Please try again.');
    }
  };
  
  

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Grid
        container
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          style={{
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflow: 'hidden',
            maxWidth: '900px',
          }}
        >
          {/* Left Side */}
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              backgroundColor: '#f4f6f8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3em',
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Hinga Heza Logo"
              style={{
                maxWidth: '60%',
                height: 'auto',
                marginBottom: '1em',
              }}
            />
            <Typography
              variant="h5"
              style={{
                color: '#388e3c',
                textAlign: 'center',
                marginBottom: '1em',
              }}
            >
              Welcome to Hinga Heza!
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: 'center',
                marginBottom: '1em',
                color: '#555',
              }}
            >
              Discover the best agricultural land opportunities in Rwanda. <br />
              Unlock the future of sustainable farming with us!
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={6} style={{ padding: '3em' }}>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                style={{
                  color: '#388e3c',
                  marginBottom: '1em',
                  textAlign: 'center',
                }}
              >
                Create an Account
              </Typography>
              {error && (
                <Typography color="error" style={{ marginBottom: '1em', textAlign: 'center' }}>
                  {error}
                </Typography>
              )}
              <TextField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  required
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Confirm Password</InputLabel>
                <OutlinedInput
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  required
                />
              </FormControl>
              <Button
                variant="contained"
                type="submit"
                color="success"
                fullWidth
                style={{ marginTop: '1em' }}
                disabled={loading}
              >
                Sign Up
              </Button>
              <Divider sx={{ my: 2 }}>or</Divider>
              <GoogleLogin
                onSuccess={handleGoogleSignUp}
                onError={() => setError('Google sign-in failed. Please try again.')}
                text="signup_with"
                theme="outline"
                disabled={loading}
                style={{ width: '100%', marginTop: '1em' }}
              />
              <Typography variant="body2" style={{ marginTop: '1em', textAlign: 'center' }}>
                Already have an account? <Link href="/login">Log In</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </GoogleOAuthProvider>
  );
}
