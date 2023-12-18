import { NavLink, Navigate } from "react-router-dom";
import Login from "../components/Login";
import { Box, Button } from "@mui/material";
import CardContainer from "../components/CardContainer";
import { Routes } from "../router";
import useAuthStore from "../store";

export default ({ basepath = "" }: { basepath?: string }) => {
  const isLoggedIn = useAuthStore((state) => state.isLogged);

  if (isLoggedIn)
    return <Navigate to={basepath + Routes.profile.absolutePath} replace />;

  return (
    <CardContainer lg={3} minHeight="" height="60vh" title="Iniciar Sesión">
      <Box height="20vh"></Box>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Login />
      </Box>
      <Box height="10vh"></Box>
      <Box mt={5} mb={2} display="flex" justifyContent="center">
        <NavLink to={basepath + Routes.signup.absolutePath}>
          <Button>{Routes.signup.label}</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
