import { Box, Button } from "@mui/material";
import { NavLink, Navigate } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Register from "../components/Register";
import { Routes } from "../router";
import useAuthStore from "../store";

export default ({ basepath = "" }: { basepath?: string }) => {
  const isLoggedIn = useAuthStore((state) => state.isLogged);

  if (isLoggedIn)
    return <Navigate to={basepath + Routes.profile.absolutePath} replace />;

  return (
    <CardContainer
      lg={3}
      minHeight=""
      height="60vh"
      title="Registro de usuario"
    >
      <Box height="20vh"></Box>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Register />
      </Box>
      <Box height="10vh"></Box>
      <Box mt={5} mb={2} display="flex" justifyContent="center">
        <NavLink to={basepath + Routes.login.routerPath}>
          <Button>{Routes.login.label}</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
