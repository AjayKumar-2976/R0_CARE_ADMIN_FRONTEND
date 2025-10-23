import { useState } from "react";
import { FiSearch, FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import Header2 from "../../../components/superAdmin/header/Header2";
import { useNavigate } from "react-router-dom";


const RolesAndPermissions = () => {
  const tableData = [
    { id: 1, name: "John Doe", role: "Sub Admin", phone: "+91 98765 43210", email: "john@example.com", password: "******" },
    { id: 2, name: "Jane Smith", role: "Sub Admin", phone: "+91 91234 56789", email: "jane@example.com", password: "******" },
    { id: 3, name: "Alex Ray", role: "Sub Admin", phone: "+91 99887 65432", email: "alex@example.com", password: "******" },
    { id: 4, name: "Michael Brown", role: "Sub Admin", phone: "+91 90011 22334", email: "michael@example.com", password: "******" },
    { id: 5, name: "Emily Davis", role: "Sub Admin", phone: "+91 81234 56780", email: "emily@example.com", password: "******" },
    { id: 6, name: "Chris Wilson", role: "Sub Admin", phone: "+91 76543 21987", email: "chris@example.com", password: "******" },
    { id: 7, name: "Sophia Johnson", role: "Sub Admin", phone: "+91 78965 43210", email: "sophia@example.com", password: "******" },
    { id: 8, name: "Daniel Lee", role: "Sub Admin", phone: "+91 84567 12345", email: "daniel@example.com", password: "******" },
    { id: 9, name: "Olivia Martin", role: "Sub Admin", phone: "+91 81245 96325", email: "olivia@example.com", password: "******" },
    { id: 10, name: "William Taylor", role: "Sub Admin", phone: "+91 79999 88888", email: "william@example.com", password: "******" },
  ];
    const navigate = useNavigate(); 


  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  // Filter data by search
  const filteredRows = tableData.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.email.toLowerCase().includes(search.toLowerCase()) ||
    row.phone.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRows.length / entriesPerPage);
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-10 mt-6 w-full font-[Poppins] text-black">
      <Header2/>

      {/* Horizontal Line */}
      <div className="border-b border-gray-300 mb-6"></div>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 w-full font-[Poppins]">
        {/* Show Entries */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <label htmlFor="entries" className="text-gray-700 text-sm font-medium">
            Show
          </label>
          <select
            id="entries"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
          >
            <option value={8}>8</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
          </select>
          <span className="text-gray-700 text-sm font-medium">entries</span>
        </div>

        <div className="flex flex-1 justify-between items-center gap-3 flex-wrap">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-xs">
            <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] text-sm font-[Poppins]"
            />
          </div>

          {/* Role Filter */}
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] text-sm w-36 font-[Poppins]">
            <option>Sub Admin</option>
            <option>Admin</option>
            <option>Manager</option>
          </select>

          {/* Create Button */}
         <button
            onClick={() => navigate("/roles-permission/create-sub-admin")} 
            className="bg-[#7EC1B1] text-white px-4 py-2 rounded-md hover:bg-[#66b0a0] transition text-sm whitespace-nowrap font-[Poppins]"
          >
            Create Sub Admin
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 font-Poppins">
          <thead className="bg-[#EAEAEA]">
            <tr>
              {["S.No", "Sub Admin Name", "Role", "Phone Number", "Email", "Password", "Actions"].map(
                (header, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 text-left text-base font-semibold text-gray-700"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((row) => (
              <tr key={row.id} className="hover:bg-blue-50 transition">
                <td className="px-6 py-4 text-base font-Poppins ">{row.id}</td>
                <td className="px-6 py-4 text-base font-Poppins">{row.name}</td>
                <td className="px-6 py-4 text-base font-Poppins">{row.role}</td>
                <td className="px-6 py-4 text-base font-Poppins">{row.phone}</td>
                <td className="px-6 py-4 text-base font-Poppins">{row.email}</td>
                <td className="px-6 py-4 text-base font-Poppins">{row.password}</td>
                <td className="px-6 py-4 text-base flex items-center gap-3">
                  <FiEye className="text-blue-600 cursor-pointer w-5 h-5"
                    onClick={() => navigate(`/roles-permission/view-sub-admin/${row.id}`,{ state: { user: row } } )}
/>
                  <FiEdit className="text-blue-600 cursor-pointer w-5 h-5" 
                    onClick={() => navigate(`/roles-permission/edit-sub-admin/${row.id}`, { state: { user: row } })}
/>
                  <FiTrash2 className="text-red-600 cursor-pointer w-5 h-5"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 font-[Poppins] text-black w-full">
        {/* Showing Entries */}
        <span className="text-sm font-medium">
          Showing {Math.min((currentPage - 1) * entriesPerPage + 1, filteredRows.length)} to{" "}
          {Math.min(currentPage * entriesPerPage, filteredRows.length)} of {filteredRows.length} entries
        </span>

        {/* Pagination Buttons */}
        <div className="flex flex-wrap gap-2 justify-center items-center font-[Poppins]">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg border text-sm font-medium transition 
            ${currentPage === 1 
              ? "text-gray-400 border-gray-300 cursor-not-allowed" 
              : "text-[#7EC1B1] border-[#7EC1B1] hover:bg-[#7EC1B1] hover:text-white"}`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`w-[36px] h-[36px] rounded-lg border text-sm font-medium transition 
              ${currentPage === idx + 1 
                ? "bg-[#7EC1B1] text-white border-[#7EC1B1]" 
                : "border-[#7EC1B1] text-[#7EC1B1] hover:bg-[#7EC1B1] hover:text-white"}`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg border text-sm font-medium transition 
            ${currentPage === totalPages 
              ? "text-gray-400 border-gray-300 cursor-not-allowed" 
              : "text-[#7EC1B1] border-[#7EC1B1] hover:bg-[#7EC1B1] hover:text-white"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolesAndPermissions;
