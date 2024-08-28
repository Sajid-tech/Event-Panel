import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPrint } from "react-icons/fa";

const Register = ({ registerations }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  // search function
  const searchRegister = registerations.filter((item) => {
    // item.fair_id.toString().includes(searchQuery)
    //  using OR logic for multiple search
    const query = searchQuery.toLowerCase();
    return (
      item.fair_id?.toString().toLowerCase().includes(query) ||
      item.fair_firm_name?.toLowerCase().includes(query) ||
      item.fair_person_name?.toLowerCase().includes(query) ||
      item.fair_person_mobile?.toLowerCase().includes(query) ||
      item.fair_categygroup?.toLowerCase().includes(query)
    );
  });

  // Calculate total number of pages
  const totalPages = Math.ceil(searchRegister.length / itemsPerPage);

  // Get current items
  const currentItems = searchRegister.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-4 h-full ">
      {/* search box  uper p-4   */}
      <div className=" w-full ">
        <form>
          <div className="relative">
            <AiOutlineSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-600" />
            <input
              type="search"
              placeholder="Search by Firm Name, Fair ID, Person Name, Mobile No, Category  "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // pl-8 niche
              className="w-full pl-10 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </form>
      </div>
      <div className=" overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SL. No
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fair Id
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Firm Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Person Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile No.
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category Type
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profession
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No. of People
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    item.fair_print_status === "Printed" ? "bg-green-100" : ""
                  }`}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_id}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_firm_name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_person_name}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_person_mobile}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_categygroup}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_profession || "N/A"}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {item.fair_no_of_people}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FaPrint />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-2 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination  */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Register;
