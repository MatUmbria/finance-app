import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Dashboard } from "./pages/dashboard";
import { Cards } from "./pages/cards";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/cards",
        element: <Cards />
      }
    ]
  }
])


export { router };