import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import MyTasks from "../pages/Dashboard/Dashboard/MyTasks";
import ResourcesVault from "../pages/Dashboard/Dashboard/ResourcesVault";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
        {
            index: true,
            Component: Dashboard
        },
        {
          path: "/my-tasks",
          element: <MyTasks></MyTasks>
        },
        {
          path: "/resources-vault",
          element: <ResourcesVault></ResourcesVault>
        },
        // {
        //   path: "/sign-up",
        //   element: <SignUp></SignUp>
        // }
    ]
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>
  },
  {
    path: "/sign-in",
    element: <SignIn></SignIn>
  }
]);

export default router;