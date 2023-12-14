import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import { Box, Button } from "@mui/material";
import CardContainer from "../components/CardContainer";
import { Routes } from "../router";

export default ({ basepath = "" }: { basepath?: string }) => {
  return (
    <CardContainer lg={3} minHeight="" height="60vh" title="Iniciar Sesión">
      <Box height="20vh"></Box>
      <Box display="flex" flexGrow={1} justifyContent="center">
        <Login />
      </Box>
      <Box mt={5} mb={2} display="flex" justifyContent="space-evenly">
        <NavLink to={basepath + Routes.signup.absolutePath}>
          <Button>{Routes.signup.label}</Button>
        </NavLink>
        <NavLink to={basepath + Routes.profile.absolutePath}>
          <Button>{Routes.profile.label}</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
