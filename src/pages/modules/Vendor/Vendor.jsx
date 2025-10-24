

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaRegEdit } from "react-icons/fa";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { GoEye } from "react-icons/go";
// import Header2 from "../../../components/superAdmin/header/Header2";


// const Vendor = () => {
//   const [rows, setRows] = useState([
//     { id: 1, name: "Ajay Kumar", company: "Tech Solutions", phone: "9876543210", address: "Mumbai, India" },
//     { id: 2, name: "Ravi Singh", company: "Innovatech", phone: "9123456780", address: "Delhi, India" },
//     { id: 3, name: "Priya Sharma", company: "Global Corp", phone: "9988776655", address: "Bangalore, India" },
//     { id: 4, name: "Suresh Reddy", company: "NextGen Industries", phone: "9871122334", address: "Hyderabad, India" },
//     { id: 5, name: "Anita Verma", company: "SmartTech", phone: "9012345678", address: "Chennai, India" },
//     { id: 6, name: "Vikram Patil", company: "Alpha Systems", phone: "9765432109", address: "Pune, India" },
//     { id: 7, name: "Sunita Joshi", company: "Bright Future", phone: "9456123789", address: "Kolkata, India" },
//     { id: 8, name: "Rahul Mehta", company: "Innovent Solutions", phone: "9988123456", address: "Ahmedabad, India" },
//     { id: 9, name: "Abhi Patil", company: "Global RP Solutions", phone: "9988123456", address: "Nagpur, India" },
//     { id: 10, name: "Shivani Mehta", company: "Innovent Solutions", phone: "9578523456", address: "Delhi, India" },
//   ]);


//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(7);
//   const [search, setSearch] = useState("");


//   const navigate = useNavigate();


//   const handleAdd = () => navigate("/vendors/addvendor");
//   const handleView = (row) => navigate(`/vendors/details/${row.id}`, { state: row });
//   const handleEdit = (row) => navigate(`/vendors/editvendor/${row.id}`, { state: row });


//   const handleRowsPerPage = (e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   };


//   const filteredRows = rows.filter((row) =>
//     row.name.toLowerCase().includes(search.toLowerCase())
//   );


//   const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
//   const paginatedRows = filteredRows.slice(
//     (page - 1) * rowsPerPage,
//     page * rowsPerPage
//   );


//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) setPage(newPage);
//   };


//   return (
//     <div className="bg-gray-100 p-4 h-full overflow-y-auto flex flex-col gap-6">
//       <Header2 />


//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col gap-4 overflow-x-auto my-4">
//         {/* Top Controls */}
//         <div className="flex flex-wrap justify-between items-center gap-4">
//           {/* Left controls */}
//           <div className="flex flex-wrap items-center gap-4">
//             <div className="flex items-center gap-2 flex-wrap text-sm md:text-base">
//               <span>Show</span>
//               <select
//                 value={rowsPerPage}
//                 onChange={handleRowsPerPage}
//                 className="p-1 md:p-2 border rounded w-[60px]"
//               >
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                   <option key={num} value={num}>
//                     {num}
//                   </option>
//                 ))}
//               </select>
//               <span>Entries</span>
//             </div>


//             <div className="relative w-full max-w-[200px]">
//               <svg
//                 className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-500"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
//                 />
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="p-1 pl-8 md:p-2 md:pl-9 border rounded w-full text-sm md:text-base text-gray-600 focus:outline-none"
//               />
//             </div>
//           </div>


//           {/* Add Vendor Button */}
//           <button
//             onClick={handleAdd}
//             className="w-full sm:w-[200px] h-[40px] bg-[#7EC1B1] text-white rounded-lg font-poppins text-[16px]"
//           >
//             Add Vendor
//           </button>
//         </div>


//         {/* Table for Desktop */}
//         <div className="hidden sm:block">
//           <table className="table-auto w-full border border-gray-400 min-w-[600px]">
//             <thead>
//               <tr className="bg-gray-100 text-center">
//                 <th className="p-3 font-poppins font-medium text-[18px]">Sr. No.</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Name</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Company</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Phone Number</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Address</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {paginatedRows.map((row) => (
//                 <tr key={row.id} className="bg-white text-black">
//                   <td className="p-3">{row.id}</td>
//                   <td className="p-3">{row.name}</td>
//                   <td className="p-3">{row.company}</td>
//                   <td className="p-3">{row.phone}</td>
//                   <td className="p-3">{row.address}</td>
//                   <td className="p-3 flex justify-center gap-2 flex-wrap">
//                     <GoEye
//                       className="text-[#0088FF] w-5 h-5 md:w-6 md:h-6 cursor-pointer"
//                       onClick={() => handleView(row)}
//                     />
//                     <FaRegEdit
//                       className="text-[#0088FF] w-5 h-5 md:w-6 md:h-6 cursor-pointer"
//                       onClick={() => handleEdit(row)}
//                     />
//                     <RiDeleteBinLine className="text-[#FF383C] w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>


//         {/* Mobile Cards */}
//         <div className="sm:hidden flex flex-col gap-3">
//           {paginatedRows.map((row) => (
//             <div key={row.id} className="bg-gray-100 p-3 rounded-lg shadow flex flex-col gap-2">
//               <div className="flex justify-between"><span className="font-semibold">Sr. No.</span><span>{row.id}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Name</span><span>{row.name}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Company</span><span>{row.company}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Phone</span><span>{row.phone}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Address</span><span>{row.address}</span></div>


//               <div className="flex gap-3 mt-2 justify-center flex-wrap">
//                 <GoEye
//                   className="text-[#0088FF] w-5 h-5 cursor-pointer"
//                   onClick={() => handleView(row)}
//                 />
//                 <FaRegEdit
//                   className="text-[#0088FF] w-5 h-5 cursor-pointer"
//                   onClick={() => handleEdit(row)}
//                 />
//                 <RiDeleteBinLine className="text-[#FF383C] w-5 h-5 cursor-pointer" />
//               </div>
//             </div>
//           ))}
//         </div>


//         {/* Pagination */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 flex-wrap font-semibold text-gray-700">
//           <span>
//             Showing{" "}
//             {Math.min((page - 1) * rowsPerPage + 1, filteredRows.length)} to{" "}
//             {Math.min(page * rowsPerPage, filteredRows.length)} of{" "}
//             {filteredRows.length} entries
//           </span>
//           <div className="flex flex-wrap gap-2 text-[#7EC1B1] justify-center">
//             <button
//               onClick={() => handlePageChange(page - 1)}
//               disabled={page === 1}
//               className="px-3 py-1 border border-[#7EC1B1] rounded-lg"
//             >
//               Previous
//             </button>
//             {[...Array(totalPages)].map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handlePageChange(idx + 1)}
//                 className={`p-2 border rounded-lg border-[#7EC1B1] ${
//                   page === idx + 1 ? "bg-[#7EC1B1] text-white" : ""
//                 } w-[36px]`}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(page + 1)}
//               disabled={page === totalPages}
//               className="px-3 py-1 border border-[#7EC1B1] rounded-lg"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Vendor;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FiSearch } from "react-icons/fi"; // Added FiSearch icon
import Header2 from "../../../components/superAdmin/header/Header2";

const Vendor = () => {
  const [rows] = useState([
    { id: 1, name: "Ajay Kumar", company: "Tech Solutions", phone: "9876543210", address: "Mumbai, India" },
    { id: 2, name: "Ravi Singh", company: "Innovatech", phone: "9123456780", address: "Delhi, India" },
    { id: 3, name: "Priya Sharma", company: "Global Corp", phone: "9988776655", address: "Bangalore, India" },
    { id: 4, name: "Suresh Reddy", company: "NextGen Industries", phone: "9871122334", address: "Hyderabad, India" },
    { id: 5, name: "Anita Verma", company: "SmartTech", phone: "9012345678", address: "Chennai, India" },
    { id: 6, name: "Vikram Patil", company: "Alpha Systems", phone: "9765432109", address: "Pune, India" },
    { id: 7, name: "Sunita Joshi", company: "Bright Future", phone: "9456123789", address: "Kolkata, India" },
    { id: 8, name: "Rahul Mehta", company: "Innovent Solutions", phone: "9988123456", address: "Ahmedabad, India" },
    { id: 9, name: "Abhi Patil", company: "Global RP Solutions", phone: "9988123456", address: "Nagpur, India" },
    { id: 10, name: "Shivani Mehta", company: "Innovent Solutions", phone: "9578523456", address: "Delhi, India" },
  ]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleAdd = () => navigate("/vendors/addvendor");
  const handleView = (row) => navigate(`/vendors/details/${row.id}`, { state: row });
  const handleEdit = (row) => navigate(`/vendors/editvendor/${row.id}`, { state: row });

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.company.toLowerCase().includes(search.toLowerCase()) // Added search by company for better utility
  );

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex flex-col gap-6">
      <Header2 />

      {/* Top Controls - Refined for better responsiveness (Like Services.jsx) */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        {/* Left: Show Entries */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-poppins text-[16px]">Show</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPage}
            className="p-2 border rounded w-[50px]"
          >
            {/* Array to generate options up to the max number of rows */}
            {[...Array(rows.length)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span className="font-poppins text-[16px]">Entries</span>
        </div>

        {/* Center: Search Bar (Wider on mobile, centered on desktop) */}
        <div className="flex-1 flex justify-center w-full sm:w-auto mt-2 sm:mt-0">
          <div className="relative w-full max-w-[300px]">
            {/* Using FiSearch icon like the reference code */}
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search name or company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // Applied ring focus style from the reference code
              className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>
        </div>

        {/* Right: Add Button */}
        <button
          type="button"
          onClick={handleAdd}
          // Ensured button is full-width on mobile but fixed size on desktop, same style as reference
          className="w-full sm:w-[200px] h-[40px] bg-[#7EC1B1] text-white rounded-lg font-poppins text-[16px] mt-2 sm:mt-0"
        >
          Add Vendor
        </button>
      </div>

      {/* Responsive Table Container - Applied padding and shadow styles from reference */}
      <div className="bg-white p-3 sm:p-5 rounded-lg shadow flex flex-col gap-4 overflow-x-auto">

        {/* Table for Desktop */}
        <div className="hidden sm:block">
          <table className="table-auto w-full border border-gray-400 min-w-[700px]"> {/* Increased min-width for all columns */}
            <thead>
              <tr className="bg-[#CACACA] text-center"> {/* Used the exact header background color */}
                <th className="p-3 font-poppins font-medium text-[18px]">Sr. No.</th>
                <th className="p-3 font-poppins font-medium text-[18px]">Name</th>
                <th className="p-3 font-poppins font-medium text-[18px]">Company</th>
                <th className="p-3 font-poppins font-medium text-[18px]">Phone Number</th>
                <th className="p-3 font-poppins font-medium text-[18px]">Address</th>
                <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {paginatedRows.map((row, index) => (
                <tr
                  key={row.id}
                  // Applied alternating row colors from the reference code
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-[#000]`}
                >
                  <td className="p-3 font-poppins font-normal">{row.id}</td>
                  <td className="p-3 font-poppins font-normal capitalize">{row.name}</td>
                  <td className="p-3 font-poppins font-normal">{row.company}</td>
                  <td className="p-3 font-poppins font-normal">{row.phone}</td>
                  <td className="p-3 font-poppins font-normal">{row.address}</td>
                  <td className="p-3 flex justify-center gap-2 flex-wrap">
                    <button
                        className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded cursor-pointer"
                        onClick={() => handleView(row)}
                    >
                        <GoEye className="text-[#0088FF] w-6 h-6" />
                    </button>

                    <button
                        className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded cursor-pointer"
                        onClick={() => handleEdit(row)}
                    >
                        <FaRegEdit className="text-[#0088FF] w-6 h-6" />
                    </button>

                    <button className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded cursor-pointer">
                        <RiDeleteBinLine className="text-[#FF383C] w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (Used simplified, cleaner structure like the reference) */}
        <div className="sm:hidden flex flex-col gap-3">
          {paginatedRows.map((row) => (
            <div key={row.id} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col gap-2 border border-gray-300">
              <div className="flex justify-between items-center"><span className="font-poppins font-medium text-gray-600">Sr. No.</span><span className="font-poppins font-semibold text-gray-800">{row.id}</span></div>
              <div className="flex justify-between items-center"><span className="font-poppins font-medium text-gray-600">Name</span><span className="font-poppins font-normal capitalize">{row.name}</span></div>
              <div className="flex justify-between items-center"><span className="font-poppins font-medium text-gray-600">Company</span><span className="font-poppins font-normal">{row.company}</span></div>
              <div className="flex justify-between items-center"><span className="font-poppins font-medium text-gray-600">Phone</span><span className="font-poppins font-normal">{row.phone}</span></div>
              <div className="flex justify-between items-center"><span className="font-poppins font-medium text-gray-600">Address</span><span className="font-poppins font-normal">{row.address}</span></div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-3 justify-center border-t pt-3 border-gray-300">
                <button
                    className="h-[32px] w-[32px] flex items-center justify-center rounded cursor-pointer"
                    onClick={() => handleView(row)}
                >
                    <GoEye className="text-[#0088FF] w-6 h-6" />
                </button>

                <button
                    className="h-[32px] w-[32px] flex items-center justify-center rounded cursor-pointer"
                    onClick={() => handleEdit(row)}
                >
                    <FaRegEdit className="text-[#0088FF] w-6 h-6" />
                </button>

                <button className="h-[32px] w-[32px] flex items-center justify-center rounded cursor-pointer">
                    <RiDeleteBinLine className="text-[#FF383C] w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Already aligned with the reference) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 flex-wrap font-semibold text-gray-700">
          <span>
            Showing {Math.min((page - 1) * rowsPerPage + 1, filteredRows.length)} to{" "}
            {Math.min(page * rowsPerPage, filteredRows.length)} of {filteredRows.length} entries
          </span>
          <div className="flex flex-wrap gap-2 text-[#7EC1B1] justify-center">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 border border-[#7EC1B1] rounded-lg"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`p-2 border rounded-lg border-[#7EC1B1] ${page === idx + 1 ? "bg-[#7EC1B1] text-white" : ""} w-[36px]`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 border border-[#7EC1B1] rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
