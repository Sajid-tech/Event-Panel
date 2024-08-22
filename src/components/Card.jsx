import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Card = ({ title, value }) => (
  <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div className="text-gray-400">
        {value >= 0 ? (
          <AiOutlineArrowUp className="text-green-500" />
        ) : (
          <AiOutlineArrowDown className="text-red-500" />
        )}
      </div>
    </div>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

export default Card;
