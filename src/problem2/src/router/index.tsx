import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const map = {
  Home: lazy(() => import("@/routes/home")),
};
const routes: RouteObject[] = [
  {
    path: "/",
    element: <map.Home />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];

export default routes;
