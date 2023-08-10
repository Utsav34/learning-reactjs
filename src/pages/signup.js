import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userRegistration"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };

    // Add the new user to the array of users
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save the updated user array to localStorage
    localStorage.setItem("userRegistration", JSON.stringify(updatedUsers));

    // Clear the input fields after submission
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Phone"
              type="tel"
              id="phone"
              autoComplete="tel"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      {/* <div>
        <img  src="/images/sign.svg"/>
      </div> */}
    </>
  );
};

export default Signup;
