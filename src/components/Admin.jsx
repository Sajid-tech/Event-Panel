import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Register from "./Register";

//sajid
const Admin = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar and Main Section */}
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
              Registration List
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed bg-white border-black shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <Register />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
