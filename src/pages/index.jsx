import NewPlace from "./places/index.jsx";
import UsersPage from "./users/index.jsx";

const BaseRoutes = [
  { path: "/*", element: <UsersPage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/newplace", element: <NewPlace /> },
];

export default BaseRoutes;
