import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Profile from "../components/Profile";
import { Routes } from "../router";
import useAuthStore from "../store";

export default ({ basepath = "" }: { basepath?: string }) => {
  const isLoggedIn = useAuthStore((state) => state.isLogged);

  if (!isLoggedIn)
    return <Navigate to={basepath + Routes.index.routerPath} replace />;

  return (
    <CardContainer lg={3} minHeight="" height="60vh" title="Perfil de usuario">
      <Box display="flex" justifyContent="center">
        <Profile />
      </Box>
      <Box height="10vh"></Box>
    </CardContainer>
  );
};
