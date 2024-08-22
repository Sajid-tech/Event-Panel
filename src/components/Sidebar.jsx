import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { FiPackage } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-slate-white md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/admin" className="flex items-center gap-2 font-semibold">
            <FiPackage className="h-6 w-6" />
            <span>Ag Solution</span>
          </Link>
          <button className="ml-auto h-8 w-8 text-gray-600 hover:text-gray-900">
            <AiOutlineBell className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
              <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300">
                6
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
