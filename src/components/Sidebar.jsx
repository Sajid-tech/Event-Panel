import React from "react";
import { CiViewList } from "react-icons/ci";
import { FiPackage } from "react-icons/fi";
import { IoLogOutOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const appName = process.env.REACT_APP_NAME || "ag sol";
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="hidden border-r bg-slate-white md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/admin" className="flex items-center gap-2 font-semibold">
            <FiPackage className="h-6 w-6" />
            <span>{appName}</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <MdOutlineDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <CiViewList className="h-5 w-5" />
              Registration List
            </Link>
            <Link
              to="/participants"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <IoPeopleOutline className="h-5 w-5" />
              Participants
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <IoLogOutOutline className="h-5 w-5" />
              Logout
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
