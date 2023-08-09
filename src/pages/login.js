import {
  Box,
  Button,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";

const Login = () => {
  return (
    <>
      <h1>Login Form</h1>
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography>Sign IN</Typography>
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
