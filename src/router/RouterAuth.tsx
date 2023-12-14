import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./index";
import Login from "../pages/Login";

const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));

const RouterAuth = ({ basepath = "" }: { basepath?: string }) => {
  const router = createBrowserRouter(
    [
      {
        path: basepath + Routes.index.routerPath,
        children: [
          {
            index: true,
            element: <Login basepath={basepath} />,
          },
          {
            path: Routes.signup.routerPath,
            element: (
              <Suspense>
                <Register basepath={basepath} />
              </Suspense>
            ),
          },
          {
            path: Routes.profile.routerPath,
            element: (
              <Suspense>
                <Profile basepath={basepath} />
              </Suspense>
            ),
          },
        ],
      },
    ],
    { basename: import.meta.env.VITE_BASENAME }
  );

  return <RouterProvider router={router} />;
};

export default RouterAuth;
