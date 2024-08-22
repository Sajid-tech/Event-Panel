import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import {
  IoChevronDownOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isToogle, setIsToogle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toogleDropDown = () => {
    setIsToogle(!isToogle);
  };

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // for logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-200 px-4 lg:h-[60px] lg:px-6">
        <button
          onClick={openModal}
          className="md:hidden h-8 w-8 text-grey-600 hover:text-gray-900"
        >
          <AiOutlineMenu className="h-5 w-5" />
        </button>
        <div className="w-full flex-1">
          <h1 className="flex items-center justify-center text-lg ">
            EVENT PANEL
          </h1>
        </div>
        <div className="relative">
          <button
            onClick={toogleDropDown}
            className="h-8 w-8 text-gray-600 hover:text-gray-900"
          >
            <div className="flex ">
              <IoPersonOutline className="h-6 w-6" />
              <IoChevronDownOutline className="mt-1" />
            </div>
          </button>
          {isToogle && (
            <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg">
              <button
                className="w-full text-left p-2 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                onClick={() => setIsToogle(false)}
                className="flex w-full justify-between items-end p-2 hover:bg-red-300"
              >
                <span>Close</span>
                <IoIosClose className="h-6 w-6 " />
              </button>
              <hr />
            </div>
          )}
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold mb-4">Menu</h2>
              <Link
                to="#"
                className="relative top-2 right-2 text-red-600"
                onClick={closeModal}
              >
                <CgClose className="h-5 w-5" />
              </Link>
            </div>
            <Link
              to="/dashboard"
              className="w-full flex items-center gap-3 p-2 mb-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              <CiViewList className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="w-full flex items-center gap-3 p-2 mb-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              <CiViewList className="h-5 w-5" />
              Registration List
            </Link>
            <Link
              to="/participants"
              className="w-full flex items-center gap-3 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={closeModal}
            >
              <IoPeopleOutline className="h-5 w-5" />
              Participants
              <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300">
                6
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
