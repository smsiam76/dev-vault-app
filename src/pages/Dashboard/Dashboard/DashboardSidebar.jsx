import { Link, NavLink } from "react-router";

const DashboardSidebar = ({handleSetTitle}) => {
  
  const navLinks = (
    <>
      <NavLink onClick={(e) => handleSetTitle(e.target.innerText)} className="py-2 mx-8 rounded-xl" to="/">
        Dashboard
      </NavLink>
      <NavLink onClick={(e) => handleSetTitle(e.target.innerText)} className="py-2 mx-8 rounded-xl" to="/my-tasks">
        My Tasks
      </NavLink>
      <NavLink onClick={(e) => handleSetTitle(e.target.innerText)} className="py-2 mx-8 rounded-xl" to="/resources-vault">
        Resources Vault
      </NavLink>
    </>
  );
  return (
    <>
      {/* navbar */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          <Link o="/">
            <span className="text-primary">Dev</span>Vault
          </Link>
        </h1>
      </div>

      {/* users Information */}
      <div className="text-center">
        <figure className="w-40 h-40 mx-auto mb-4">
          <img
            className="w-full h-full rounded-full object-fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JHaPsZpfATUuljxk5KO7KDuvKfVJtJFTug&s"
            alt=""
          />
        </figure>
        <h4 className="text-2xl font-bold">Md. Rafiqul Mozumdar</h4>
        <h5 className="font-medium">rafiqul@bscse.gmail.com</h5>
      </div>
      <span className="block w-11/12 mx-auto h-0.5 bg-secondary/20 my-5"></span>
      {/* navLinks */}
      <nav>
        <ul 
        className="flex flex-col text-center font-medium text-lg">
          {navLinks}
        </ul>
      </nav>
    </>
  );
};

export default DashboardSidebar;
