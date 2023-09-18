import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pages from "@/pages";

const routes = createBrowserRouter(Pages);

export default function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
