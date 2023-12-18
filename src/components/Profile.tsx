import { Avatar, Box, Button, Typography } from "@mui/material";
import { signOut } from "../auth/fb-auth";
import useAuthStore from "../store";

export default () => {
  const user = useAuthStore((state) => state.userData);

  return (
    <Box m="auto" p={2}>
      <Typography variant="subtitle2" textAlign="center" mb={1}>
        Perfil
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={2}>
        {user.name || user.email}
      </Typography>

      <Box display="flex" justifyContent="center">
        <Avatar
          sx={{ height: 50, width: 50 }}
          alt="Login"
          src={`${user.photo ? user.photo : "/avatar.svg"}`}
        />
      </Box>

      <Typography mt={3} variant="subtitle2" textAlign="center" mb={2}>
        {user.name && user.email}
      </Typography>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
          onClick={() => {
            signOut();

            window.location.reload();
          }}
        >
          <Typography variant="caption">Cerrar sesión</Typography>
        </Button>
      </Box>
    </Box>
  );
};
