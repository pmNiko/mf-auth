import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { signUp } from "../auth/fb-auth";

export default () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
      }}
    >
      <TextField
        label="Email"
        type="text"
        placeholder="user@example.com"
        name="email"
        onChange={handleChange}
        variant="standard"
        sx={{ mb: 2, background: "transparent" }}
        autoComplete="off"
      />
      <TextField
        label="Password"
        type="password"
        placeholder="******"
        name="password"
        onChange={handleChange}
        variant="standard"
        sx={{ mb: 2, background: "transparent" }}
      />

      <Box display="flex" justifyContent="space-evenly" mt={4} mb={2}>
        <Button
          size="medium"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={() => signUp(user.email, user.password)}
        >
          <Typography variant="caption"> Registrarme</Typography>
        </Button>
      </Box>
    </form>
  );
};
