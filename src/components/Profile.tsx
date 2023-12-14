import { Box, Button, Typography } from "@mui/material";

export default () => {
  return (
    <Box m="auto" p={2}>
      <Typography variant="subtitle2" textAlign="center" mb={1}>
        Perfil
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={2}>
        {/* {user.name || user.email} */}
        Nombre del usuario
      </Typography>

      <Box display="flex" justifyContent="center">
        {/* <Avatar
          sx={{ height: 50, width: 50 }}
          alt="Login"
          src={`${user.photo ? user.photo : "/avatar.svg"}`}
        /> */}
        Foto de perfil si existe
      </Box>

      <Typography mt={3} variant="subtitle2" textAlign="center" mb={4}>
        {/* {user.name && user.email} */}
        Email si existe el nombre
      </Typography>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
          onClick={() => console.log("Cerrar modal!")}
        >
          <Typography variant="caption">Cerrar sesión</Typography>
        </Button>
      </Box>
    </Box>
  );
};
