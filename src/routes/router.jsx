import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import MyTasks from "../pages/Dashboard/Dashboard/MyTasks";
import ResourcesVault from "../pages/Dashboard/Dashboard/ResourcesVault";


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
        }
    ]
  },
]);

export default router;