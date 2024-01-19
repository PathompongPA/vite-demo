import { useRoutes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Home } from "../component";
export default function Router() {
  const router = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ];
  return useRoutes(router);
}
