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

if (!clientId) {
  console.warn('Google Client ID is not defined in the environment variables.');
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log(formData)

    try {
      setLoading(true);
      const response = await axios.post(
        'https://hinga-heza-app-1.onrender.com/api/auth/signup',
        formData
      );
      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Redirect to homepage
      }
    } catch (error) {
      console.error('Registration failed:', error.response || error.message);
      setError(
        error.response?.data?.error || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async (response) => {
    if (response?.credential) {
      try {
        setLoading(true);
        const googleResponse = await axios.post(
          'https://hinga-heza-app-1.onrender.com/api/auth/google',
          { token: response.credential }
        );
        localStorage.setItem('token', googleResponse.data.token);
        navigate('/'); // Redirect to homepage
      } catch (error) {
        console.error('Google sign-up failed:', error.response || error.message);
        setError('Google sign-up failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Google sign-up failed. Please try again.');
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Grid
        container
        sx={{
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            maxWidth: '900px',
            overflow: 'hidden',
          }}
        >
          {/* Left Side */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundColor: '#f4f6f8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Hinga Heza Logo"
              style={{ maxWidth: '60%', height: 'auto', marginBottom: '1em' }}
            />
            <Typography variant="h5" sx={{ color: '#388e3c', textAlign: 'center', mb: 2 }}>
              Welcome to Hinga Heza!
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', mb: 2, color: 'text.secondary' }}
            >
              Discover the best agricultural land opportunities in Rwanda. <br />
              Unlock the future of sustainable farming with us!
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={6} sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                sx={{ color: '#388e3c', mb: 2, textAlign: 'center' }}
              >
                Create an Account
              </Typography>
              {error && (
                <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
                  {error}
                </Typography>
              )}
              <TextField
                label="Name"
                name="username"
                type="text"
                value={formData.username}
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
                sx={{ mt: 2 }}
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
              <Divider sx={{ my: 2 }}>or</Divider>
              {clientId && (
                <GoogleLogin
                  onSuccess={handleGoogleSignUp}
                  onError={() => setError('Google sign-in failed. Please try again.')}
                  text="signup_with"
                  theme="outline"
                  disabled={loading}
                  style={{ width: '100%' }}
                />
              )}
              <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                Already have an account? <Link href="/login">Log In</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </GoogleOAuthProvider>
  );
}
