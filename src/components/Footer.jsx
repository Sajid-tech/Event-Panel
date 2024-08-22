import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-100 border-t border-gray-100 mt-8 pt-4 pb-4">
      <div className="container mx-auto px-4 text-base font-bold text-center">
        <p className="text-xs text-gray-500">
          Copyright@ 2024-25
          <Link to={"https://www.ag-solutions.in"} target="_blank">
            <span className=" text-blue-500 "> AG Solution</span>
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
