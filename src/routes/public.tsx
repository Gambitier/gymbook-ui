import { AuthRoutes } from "@/features/auth";
import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
