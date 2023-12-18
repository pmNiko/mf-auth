import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Register from "../components/Register";
import { Routes } from "../router";

export default ({ basepath = "" }: { basepath?: string }) => {
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
      <Box mt={5} mb={2} display="flex" justifyContent="space-evenly">
        <NavLink to={basepath + Routes.login.routerPath}>
          <Button>{Routes.login.label}</Button>
        </NavLink>
        <NavLink to={basepath + Routes.profile.absolutePath}>
          <Button>{Routes.profile.label}</Button>
        </NavLink>
      </Box>
    </CardContainer>
  );
};
