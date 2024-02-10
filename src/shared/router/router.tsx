import { createBrowserRouter } from "react-router-dom";
import { LoginPage, MainPage } from "~/pages";
import { paths } from "~/shared/router";
import { ProtectedLayout } from "~/shared/ui/layouts";

export const router = createBrowserRouter([
  {
    path: paths.login,
    element: <LoginPage />,
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: paths.main,
        element: <MainPage />,
      },
    ],
  },
]);
