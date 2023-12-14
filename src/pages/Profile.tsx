import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Profile from "../components/Profile";
import CardContainer from "../components/CardContainer";
import { Routes } from "../router";

export default ({ basepath = "" }: { basepath?: string }) => {
  return (
    <CardContainer lg={3} minHeight="" height="60vh" title="Perfil de usuario">
      <Box height="10vh"></Box>
      <Box display="flex" justifyContent="center">
        <Profile />
      </Box>
      <Box mt={5} mb={2} display="flex" justifyContent="space-evenly">
        <NavLink to={basepath + Routes.login.routerPath}>
          <Button>{Routes.login.label}</Button>
        </NavLink>
        <NavLink to={basepath + Routes.signup.absolutePath}>
          <Button>{Routes.signup.label}</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
