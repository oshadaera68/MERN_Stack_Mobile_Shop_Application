import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, Snackbar } from '@mui/material';
import Back from '../assets/back1.jpg';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.password === formData.confirmPassword) {
     
      axios.post("http://localhost:4001/signup", formData)
        .then((response) => {
          console.log('Signup successful!', response.data);

        })
        .catch((error) => {
          console.error('Error during signup:', error);
        });
    } else {
      setShowSnackbar(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 " style={{ backgroundImage: `url(${Back})` }}>
        <Container maxWidth="sm" className="bg-white bg-opacity-90 p-8 rounded-lg">
          <Typography variant="h4" component="h2" className="mb-4 text-center" style={{ fontFamily: 'Poppins' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              className="mb-4"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              className="mb-4"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              className="mb-4"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="mb-4"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <br />
            <br />
            <Link to='/login'><Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-2"
              sx={{ py: 1.5 }} 
            >
              Sign Up
            </Button></Link>
          </form>
          <br />
          <Typography variant="body2" align="center" className="mt-2" style={{ fontFamily: 'Poppins' }}>
            Already have an account?{' '}
            <Link to="/login" className="text-primary">
              Log In
            </Link>
          </Typography>
        </Container>
        <Snackbar
          open={showSnackbar}
          autoHideDuration={4000}
          message="Please fill in all the fields"
          className="fixed bottom-0 right-0 mb-8 mr-8"
          onClose={() => setShowSnackbar(false)}
        />
      </div>
      <h1 id='text1'>Powered By <b>Vibe-X</b> Software Solutions. All Rights Reserved. 2023</h1>
    </>
  );
};

export default Signup;
