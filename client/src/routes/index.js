import About from "../pages/About";
import Login from "../pages/Login";
import Activating from "../pages/Activating";
import PostIdPage from "../pages/PIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: Login, exact: true },
  { path: "/activating", component: Activating, exact: true },
];
