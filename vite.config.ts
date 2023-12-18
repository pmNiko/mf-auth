import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [
      react(),
      federation({
        filename: "mf-auth-entry.js",
        name: "mf-auth",
        remotes: {},
        exposes: {
          "./RouterAuth": "./src/router/RouterAuth",
        },
        shared: ["react", "react-dom", "@emotion/react", "zustand"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },

    base: process.env.VITE_BASENAME,
  };
});
