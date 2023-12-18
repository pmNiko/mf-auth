import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../auth/fb-auth";
import useAuthStore from "../store";

export const useAuthorize = () => {
  const login = useAuthStore((state) => state.login);
  const signOut = useAuthStore((state) => state.signOut);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signOut();
      } else {
        login({
          name: auth.currentUser?.displayName,
          email: auth.currentUser?.email,
          photo: auth.currentUser?.photoURL,
        });
      }
    });

    return () => listener();
  }, [auth]);

  return {};
};
