/* eslint-disable import/no-cycle */
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/home"));
const ProjectPage = lazy(() => import("../pages/projects"));
const ResumePage = lazy(() => import("../pages/resume"));

const RouteInfo = () => {
  const routes = {
    HOME: {
      title: "Home",
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    RESUME: {
      title: "Resume",
      path: "/pages/resume",
      element: <ProjectPage />,
      exact: true,
    },
    PROJECTS: {
      title: "Projects",
      path: "/pages/projects",
      element: <ResumePage />,
      exact: true,
    }
  };
  return routes;
};
export default RouteInfo;
