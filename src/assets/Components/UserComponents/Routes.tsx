// src/assets/Components/routes.ts
import Contest from "./Contest";
import Home from "./Home";
import Notifications from "./Notifications";
import Problems from "./Problems";
import Profile from "./Profile";
import Settings from "./Settings";
import './styles.css';
const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "fas fa-home",  // Font Awesome icon for Home
    component: <Home />,  // Component to render for this route
    layout: "/user"       // Base layout for this route
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "fas fa-user",
    component: <Profile />,
    layout: "/user"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cog",
    component: <Settings />,
    layout: "/user"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fas fa-bell",
    component: <Notifications />,
    layout: "/user"
  },
  {
    path: "/problems",
    name: "Problems",
    icon: "fas fa-bell",
    component: <Problems />,
    layout: "/user"
  },
  {
    path: "/contest",
    name: "Contest",
    icon: "fas fa-bell",
    component: <Contest />,
    layout: "/user"
  }
];

export default routes;
