import { Outlet } from "react-router";
import DashboardSidebar from "../pages/Dashboard/Dashboard/DashboardSidebar";
import Heaader from "../components/Shared/Header/Heaader";
import { useContext, useState } from "react";
import AuthContext from "../provider/AuthContext";

const DashboardLayout = () => {
  // get user from onAuthStateChanged
  const { user } = useContext(AuthContext);

  // setTitle in header
  const [title, setTitle] = useState("");
  const handleSetTitle = (text) => {
    setTitle(text);
  };

  return (
    <div className="flex min-h-screen">
      {/* Aside */}
      <div className="w-1/5 py-6">
        <DashboardSidebar
          user={user}
          handleSetTitle={handleSetTitle}
        ></DashboardSidebar>
      </div>
      {/* Main Content */}
      <div className="w-4/5">
        {/* header will apear in the top */}
        <Heaader title={title} />
        <div className="p-6 min-h-screen bg-primary/5 shadow shadow-primary/10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
