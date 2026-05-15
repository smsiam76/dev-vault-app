import { Link, NavLink, useNavigate } from "react-router";
import Divider from "../../../components/Shared/Divider/Divider";
import PrimaryBtn from "../../../components/Shared/Button/PrimaryBtn";
import useAuth from "../../../hooks/useAuth";
import { CircleUserRound } from "lucide-react";

const DashboardSidebar = ({ handleSetTitle }) => {
  // user and log out from Auth Provider
  const { user, logOut } = useAuth();

  // navigate
  const navigate = useNavigate();

  // log out btn and navigate to again login

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/sign-in");
    } catch (error) {
      console.log(error.message);
    }
  };

  const navLinks = (
    <>
      <NavLink
        onClick={(e) => handleSetTitle(e.target.innerText)}
        className="py-2 mx-8 rounded-xl"
        to="/"
      >
        Dashboard
      </NavLink>
      <NavLink
        onClick={(e) => handleSetTitle(e.target.innerText)}
        className="py-2 mx-8 rounded-xl"
        to="/my-tasks"
      >
        My Tasks
      </NavLink>
      <NavLink
        onClick={(e) => handleSetTitle(e.target.innerText)}
        className="py-2 mx-8 rounded-xl"
        to="/resources-vault"
      >
        Resources Vault
      </NavLink>

      {!user && (
        <>
        <Divider />
          <NavLink to="sign-up">Sign UP</NavLink>
          <NavLink to="sign-in">Sign In</NavLink>
        </>
      )}
    </>
  );
  return (
    <>
      {/* navbar */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          <Link to="/">
            <span className="text-primary">Dev</span>Vault
          </Link>
        </h1>
      </div>

      {/* users Information */}
      <div className="text-center">
        <figure className="w-32 h-32 mx-auto mb-4">
          {user?.photoURL ? (
            <img
              className="w-full h-full rounded-full object-fill"
              src="user?.photoURL"
              alt=""
            />
          ) : (
            <CircleUserRound className="w-32 h-32" />
          )}
        </figure>
        <h4 className="text-2xl font-bold">{user?.displayName || "Name"}</h4>
        <h5 className="font-medium">{user?.email || "Email"}</h5>
        {user && (
          <PrimaryBtn
            onClick={handleLogOut}
            text="Log Out"
            className="mt-8 px-3 py-2 text-sm"
          />
        )}
      </div>
      <Divider />
      {/* navLinks */}
      <nav>
        <ul className="flex flex-col text-center font-medium text-lg">
          {navLinks}
        </ul>
      </nav>
    </>
  );
};

export default DashboardSidebar;
