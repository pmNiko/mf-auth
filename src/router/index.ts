enum Paths {
  INDEX = "/account",
  SIGNUP = "signup",
  PROFILE = "profile",
}

export const Routes = {
  index: {
    label: "index",
    routerPath: Paths.INDEX,
  },
  login: {
    label: "Iniciar Sesión",
    routerPath: Paths.INDEX,
  },
  signup: {
    label: "Registrarse",
    routerPath: Paths.SIGNUP,
    absolutePath: Paths.INDEX + "/" + Paths.SIGNUP,
  },
  profile: {
    label: "Perfil",
    routerPath: Paths.PROFILE,
    absolutePath: Paths.INDEX + "/" + Paths.PROFILE,
  },
};
