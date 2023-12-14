import { ChangeEvent, useState } from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";

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

      <Box display="flex" justifyContent="space-evenly" my={4}>
        <Button
          size="medium"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={() => console.log(user.email, user.password)}
        >
          <Typography variant="caption"> Iniciar sesión</Typography>
        </Button>
      </Box>
      <Button onClick={() => console.log("Google Login")}>
        <Avatar
          sx={{ height: 30, width: 30, boxShadow: 2 }}
          alt="Login"
          src={"/google.svg"}
        />
      </Button>
    </form>
  );
};
