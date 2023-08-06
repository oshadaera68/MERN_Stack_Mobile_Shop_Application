import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import backgroundImage from "../../src/assets/background.jpg";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setIsError(true);
    } else {
      try {
        const response = await axios.post("", {
          email,
          password,
        });
        console.log("Logged in successfully!");
        console.log("User token:", response.data.token);
      } catch (error) {
        console.error("Error while logging in:", error.message);
        setIsError(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setIsError(false);
  };

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Container
          maxWidth="sm"
          className="bg-white bg-opacity-80 p-8 rounded-lg text-center"
        >
          <Typography
            variant="h4"
            component="h1"
            className="center"
            style={{ fontFamily: "Poppins" }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <br />
            <br />
            <Link to='/'><Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="mt-2"
            >
              Sign In
            </Button></Link>
            <br />
            <br />
            <h2>Or</h2>
            <div className="justify-end mt-4 space-x-1">
              <Button
                startIcon={<FaGoogle size={30} color="red" />}
                component="a"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              ></Button>

              <Button
                color="primary"
                startIcon={<FaFacebook size={30} />}
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              ></Button>

              <Button
                color="primary"
                startIcon={<FaTwitter size={30} color="#00acee" />}
                component="a"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              ></Button>
            </div>
            <br />
            <Typography
              variant="body2"
              align="center"
              className="mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Container>

        <Snackbar
          open={isError}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          message="Please fill in all the fields"
          className="fixed bottom-0 right-0 mb-8 mr-8"
        />
      </div>
      <h1 id="text2">
        Powered By <b>Vibe-X</b> Software Solutions. All Rights Reserved. 2023
      </h1>
    </>
  );
};

export default Login;
