// import { useState, useRef } from "react";
// import Header2 from "../../../components/superAdmin/header/Header2";
// import { FiTrash2 } from "react-icons/fi";
// import { GoEye } from "react-icons/go";
// import { LuCalendar } from "react-icons/lu";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";

// const Customer = () => {
//   const [entries, setEntries] = useState(8);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [search, setSearch] = useState("");
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [startDate, endDate] = dateRange;

//   const datePickerRef = useRef(null);
//   const navigate = useNavigate();

//   // Updated customer data with Address and Gender
//   const customers = [
//     {
//       id: 1,
//       name: "Ajay Kumar",
//       phone: "9876543210",
//       email: "ajay@example.com",
//       registeredDate: "20-12-2025",
//       status: "Active",
//       address: "123 MG Road, Bengaluru, Karnataka",
//       gender: "Male",
//     },
//     {
//       id: 2,
//       name: "Ravi Singh",
//       phone: "9123456780",
//       email: "ravi@example.com",
//       registeredDate: "20-12-2025",
//       status: "Block",
//       address: "45 Park Street, Kolkata, West Bengal",
//       gender: "Male",
//     },
//     {
//       id: 3,
//       name: "Neha Sharma",
//       phone: "9988776655",
//       email: "neha@example.com",
//       registeredDate: "20-12-2025",
//       status: "Active",
//       address: "12 MG Road, Pune, Maharashtra",
//       gender: "Female",
//     },
//     {
//       id: 4,
//       name: "Suresh Yadav",
//       phone: "9871122334",
//       email: "suresh@example.com",
//       registeredDate: "20-12-2025",
//       status: "Active",
//       address: "5 Brigade Road, Bengaluru, Karnataka",
//       gender: "Male",
//     },
//     {
//       id: 5,
//       name: "Pooja Verma",
//       phone: "9122334455",
//       email: "pooja@example.com",
//       registeredDate: "20-12-2025",
//       status: "Block",
//       address: "77 Connaught Place, Delhi",
//       gender: "Female",
//     },
//     {
//       id: 6,
//       name: "Anil Kumar",
//       phone: "9876655443",
//       email: "anil@example.com",
//       registeredDate: "21-12-2025",
//       status: "Active",
//       address: "22 Marine Drive, Mumbai, Maharashtra",
//       gender: "Male",
//     },
//     {
//       id: 7,
//       name: "Rita Singh",
//       phone: "9123451234",
//       email: "rita@example.com",
//       registeredDate: "22-12-2025",
//       status: "Block",
//       address: "18 Park Avenue, Chennai, Tamil Nadu",
//       gender: "Female",
//     },
//     {
//       id: 8,
//       name: "Vikram Patel",
//       phone: "9876541123",
//       email: "vikram@example.com",
//       registeredDate: "23-12-2025",
//       status: "Active",
//       address: "9 Ashok Nagar, Jaipur, Rajasthan",
//       gender: "Male",
//     },
//     {
//       id: 9,
//       name: "Neelam Gupta",
//       phone: "9123409876",
//       email: "neelam@example.com",
//       registeredDate: "24-12-2025",
//       status: "Block",
//       address: "33 MG Road, Lucknow, Uttar Pradesh",
//       gender: "Female",
//     },
//     {
//       id: 10,
//       name: "Rohan Mehta",
//       phone: "9876549876",
//       email: "rohan@example.com",
//       registeredDate: "25-12-2025",
//       status: "Active",
//       address: "55 Brigade Road, Bengaluru, Karnataka",
//       gender: "Male",
//     },
//     {
//       id: 11,
//       name: "Sana Khan",
//       phone: "9123498765",
//       email: "sana@example.com",
//       registeredDate: "26-12-2025",
//       status: "Active",
//       address: "7 Park Street, Kolkata, West Bengal",
//       gender: "Female",
//     },
//     {
//       id: 12,
//       name: "Arjun Das",
//       phone: "9876541230",
//       email: "arjun@example.com",
//       registeredDate: "27-12-2025",
//       status: "Block",
//       address: "88 Marine Drive, Mumbai, Maharashtra",
//       gender: "Male",
//     },
//   ];

//   const formatToDDMMYYYY = (dateStr) => {
//     const [day, month, year] = dateStr.split("-");
//     return `${day}-${month}-${year}`;
//   };

//   // Filter logic
//   const filteredCustomers = customers.filter((cust) => {
//     const matchesStatus = statusFilter ? cust.status === statusFilter : true;
//     const matchesSearch =
//       cust.name.toLowerCase().includes(search.toLowerCase()) ||
//       cust.email.toLowerCase().includes(search.toLowerCase());

//     let matchesDate = true;
//     if (startDate && endDate) {
//       const [d, m, y] = cust.registeredDate.split("-");
//       const regDate = new Date(`${y}-${m}-${d}`);
//       matchesDate = regDate >= startDate && regDate <= endDate;
//     }

//     return matchesStatus && matchesSearch && matchesDate;
//   });

//   // Pagination
//   const totalPages = Math.ceil(filteredCustomers.length / entries);
//   const startIndex = (currentPage - 1) * entries;
//   const paginatedCustomers = filteredCustomers.slice(
//     startIndex,
//     startIndex + entries
//   );

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const showingStart = filteredCustomers.length === 0 ? 0 : startIndex + 1;
//   const showingEnd = startIndex + paginatedCustomers.length;
//   const totalEntries = filteredCustomers.length;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <Header2 />

//       <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
//         <h2 className="text-2xl font-bold mb-4">Customer Management</h2>

//         {/* Top Controls */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
//           {/* Show entries */}
//           <div className="flex items-center gap-2">
//             <label className="font-medium text-gray-700">Show</label>
//             <select
//               className="p-2 border border-[#263138] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
//               value={entries}
//               onChange={(e) => {
//                 setEntries(Number(e.target.value));
//                 setCurrentPage(1);
//               }}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={25}>25</option>
//               <option value={50}>50</option>
//             </select>
//             <span className="font-medium text-gray-700">entries</span>
//           </div>

//           {/* Search input */}
//           <div className="flex items-center gap-2">
//             <label className="font-medium text-gray-700">Search:</label>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="p-2 border border-[#263138] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
//             />
//           </div>

//           {/* Date picker */}
//           <div className="flex items-center gap-2 relative">
//             <label className="font-medium text-gray-700">Date:</label>
//             <DatePicker
//               ref={datePickerRef}
//               selectsRange
//               startDate={startDate}
//               endDate={endDate}
//               onChange={(update) => setDateRange(update)}
//               isClearable={true}
//               placeholderText="Select date range"
//               className="p-2 border border-[#263138] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] w-64 pr-10 cursor-text"
//               dateFormat="dd-MM-yyyy"
//             />
//             <LuCalendar
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
//               onClick={() => datePickerRef.current.setOpen(true)}
//             />
//           </div>

//           {/* Status select */}
//           <div className="flex items-center gap-2">
//             <label className="font-medium text-gray-700">Status:</label>
//             <select
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               <option value="" disabled hidden>
//                 All
//               </option>
//               <option value="Active">Active</option>
//               <option value="Block">Block</option>
//             </select>
//           </div>
//         </div>

//         {/* Customer Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 overflow-hidden">
//             <thead className="bg-[#CACACA] text-gray-700 text-base">
//               <tr>
//                 <th className="p-3 font-semibold">Sr. No.</th>
//                 <th className="p-3 font-semibold">Name</th>
//                 <th className="p-3 font-semibold">Phone</th>
//                 <th className="p-3 font-semibold">Email</th>
//                 <th className="p-3 font-semibold">Address</th>
//                 <th className="p-3 font-semibold">Gender</th>
//                 <th className="p-3 font-semibold">Registered Date</th>
//                 <th className="p-3 font-semibold">Status</th>
//                 <th className="p-3 font-semibold">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {paginatedCustomers.length === 0 ? (
//                 <tr>
//                   <td colSpan={9} className="text-center p-6 text-gray-400">
//                     No data available
//                   </td>
//                 </tr>
//               ) : (
//                 paginatedCustomers.map((cust, idx) => (
//                   <tr
//                     key={cust.id}
//                     className={`${idx % 2 === 0 ? "bg-gray-100" : "bg-white"} text-black  hover:bg-blue-50 transition`}
//                   >
//                     <td className="p-3">{startIndex + idx + 1}</td>
//                     <td className="p-3">{cust.name}</td>
//                     <td className="p-3">{cust.phone}</td>
//                     <td className="p-3">{cust.email}</td>
//                     <td className="p-3">{cust.address}</td>
//                     <td className="p-3">{cust.gender}</td>
//                     <td className="p-3">
//                       {formatToDDMMYYYY(cust.registeredDate)}
//                     </td>
//                     <td
//                       className={`p-3 font-bold ${cust.status === "Active" ? "text-green-600 px-2 py-1" : "text-red-600 px-2 py-1"}`}
//                     >
//                       {cust.status}
//                     </td>
//                     <td className="p-3 flex justify-center gap-2 text-gray-700 cursor-pointer">
//                       <GoEye
//                         className="text-blue-600 w-5 h-5 cursor-pointer"
//                         onClick={() =>
//                           navigate(`/customers/view-customer/${cust.id}`, {
//                             state: { customer: cust },
//                           })
//                         }
//                       />

//                       <FiTrash2 className="text-red-600 w-5 h-5" />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 0 && (
//           <div className="flex justify-between items-center mt-4">
//             <div className="text-gray-700">
//               Showing {showingStart} to {showingEnd} of {totalEntries} entries
//             </div>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded-md disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => handlePageChange(i + 1)}
//                   className={`px-3 py-1 border rounded-md ${currentPage === i + 1 ? "bg-[#7EC1B1] text-white" : ""}`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 border rounded-md disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Customer;

import { useState, useRef } from "react";
import Header2 from "../../../components/superAdmin/header/Header2";
import { FiTrash2 } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { LuCalendar } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [entries, setEntries] = useState(8);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [currentPage, setCurrentPage] = useState(1);

  const [startDate, endDate] = dateRange;
  const datePickerRef = useRef(null);
  const navigate = useNavigate();

  const customers = [
    {
      id: 1,
      name: "Ajay Kumar",
      phone: "9876543210",
      email: "ajay@example.com",
      registeredDate: "20-12-2025",
      status: "Active",
      address: "123 MG Road, Bengaluru, Karnataka",
      gender: "Male",
    },
    {
      id: 2,
      name: "Ravi Singh",
      phone: "9123456780",
      email: "ravi@example.com",
      registeredDate: "20-12-2025",
      status: "Block",
      address: "45 Park Street, Kolkata, West Bengal",
      gender: "Male",
    },
    {
      id: 3,
      name: "Neha Sharma",
      phone: "9988776655",
      email: "neha@example.com",
      registeredDate: "20-12-2025",
      status: "Active",
      address: "12 MG Road, Pune, Maharashtra",
      gender: "Female",
    },
    {
      id: 4,
      name: "Suresh Yadav",
      phone: "9871122334",
      email: "suresh@example.com",
      registeredDate: "20-12-2025",
      status: "Active",
      address: "5 Brigade Road, Bengaluru, Karnataka",
      gender: "Male",
    },
    {
      id: 5,
      name: "Pooja Verma",
      phone: "9122334455",
      email: "pooja@example.com",
      registeredDate: "20-12-2025",
      status: "Block",
      address: "77 Connaught Place, Delhi",
      gender: "Female",
    },
    {
      id: 6,
      name: "Anil Kumar",
      phone: "9876655443",
      email: "anil@example.com",
      registeredDate: "21-12-2025",
      status: "Active",
      address: "22 Marine Drive, Mumbai, Maharashtra",
      gender: "Male",
    },
    {
      id: 7,
      name: "Rita Singh",
      phone: "9123451234",
      email: "rita@example.com",
      registeredDate: "22-12-2025",
      status: "Block",
      address: "18 Park Avenue, Chennai, Tamil Nadu",
      gender: "Female",
    },
    {
      id: 8,
      name: "Vikram Patel",
      phone: "9876541123",
      email: "vikram@example.com",
      registeredDate: "23-12-2025",
      status: "Active",
      address: "9 Ashok Nagar, Jaipur, Rajasthan",
      gender: "Male",
    },
    {
      id: 9,
      name: "Neelam Gupta",
      phone: "9123409876",
      email: "neelam@example.com",
      registeredDate: "24-12-2025",
      status: "Block",
      address: "33 MG Road, Lucknow, Uttar Pradesh",
      gender: "Female",
    },
    {
      id: 10,
      name: "Rohan Mehta",
      phone: "9876549876",
      email: "rohan@example.com",
      registeredDate: "25-12-2025",
      status: "Active",
      address: "55 Brigade Road, Bengaluru, Karnataka",
      gender: "Male",
    },
    {
      id: 11,
      name: "Sana Khan",
      phone: "9123498765",
      email: "sana@example.com",
      registeredDate: "26-12-2025",
      status: "Active",
      address: "7 Park Street, Kolkata, West Bengal",
      gender: "Female",
    },
    {
      id: 12,
      name: "Arjun Das",
      phone: "9876541230",
      email: "arjun@example.com",
      registeredDate: "27-12-2025",
      status: "Block",
      address: "88 Marine Drive, Mumbai, Maharashtra",
      gender: "Male",
    },
  ];

  const formatToDDMMYYYY = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const filteredCustomers = customers.filter((cust) => {
    const matchesStatus = statusFilter ? cust.status === statusFilter : true;
    const matchesSearch =
      cust.name.toLowerCase().includes(search.toLowerCase()) ||
      cust.email.toLowerCase().includes(search.toLowerCase());

    let matchesDate = true;
    if (startDate && endDate) {
      const [d, m, y] = cust.registeredDate.split("-");
      const regDate = new Date(`${y}-${m}-${d}`);
      matchesDate = regDate >= startDate && regDate <= endDate;
    }

    return matchesStatus && matchesSearch && matchesDate;
  });

  const totalPages = Math.ceil(filteredCustomers.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const paginatedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + entries
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const showingStart = filteredCustomers.length === 0 ? 0 : startIndex + 1;
  const showingEnd = startIndex + paginatedCustomers.length;
  const totalEntries = filteredCustomers.length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Header2 />

      <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Customer Management</h2>

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          {/* Show entries */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Show</label>
            <select
              className="p-2 border border-[#263138] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="font-medium text-gray-700">entries</span>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Search:</label>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border border-[#263138] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>

          {/* Date picker */}
          <div className="flex items-center gap-2 relative">
            <label className="font-medium text-gray-700">Date:</label>
            <DatePicker
              ref={datePickerRef}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              isClearable
              placeholderText="Select date range"
              className="p-2 border border-[#263138] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] w-64 pr-10 cursor-text"
              dateFormat="dd-MM-yyyy"
            />
            <LuCalendar
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => datePickerRef.current.setOpen(true)}
            />
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Status:</label>
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="" disabled hidden>
                All
              </option>
              <option value="Active">Active</option>
              <option value="Block">Block</option>
            </select>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:overflow-x-auto md:block">
          <table className="min-w-full border border-gray-300 overflow-hidden">
            <thead className="bg-[#CACACA] text-gray-700 text-base">
              <tr>
                <th className="p-3 font-semibold">Sr. No.</th>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Phone</th>
                <th className="p-3 font-semibold">Email</th>
                <th className="p-3 font-semibold">Address</th>
                <th className="p-3 font-semibold">Gender</th>
                <th className="p-3 font-semibold">Registered Date</th>
                <th className="p-3 font-semibold">Status</th>
                <th className="p-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {paginatedCustomers.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center p-6 text-gray-400">
                    No data available
                  </td>
                </tr>
              ) : (
                paginatedCustomers.map((cust, idx) => (
                  <tr
                    key={cust.id}
                    className={`${idx % 2 === 0 ? "bg-gray-100" : "bg-white"} text-black hover:bg-blue-50 transition`}
                  >
                    <td className="p-3">{startIndex + idx + 1}</td>
                    <td className="p-3">{cust.name}</td>
                    <td className="p-3">{cust.phone}</td>
                    <td className="p-3">{cust.email}</td>
                    <td className="p-3">{cust.address}</td>
                    <td className="p-3">{cust.gender}</td>
                    <td className="p-3">
                      {formatToDDMMYYYY(cust.registeredDate)}
                    </td>
                    <td
                      className={`p-3 font-bold ${cust.status === "Active" ? "text-green-600 px-2 py-1" : "text-red-600 px-2 py-1"}`}
                    >
                      {cust.status}
                    </td>
                    <td className="p-3 flex justify-center gap-2 text-gray-700 cursor-pointer">
                      <GoEye
                        className="text-blue-600 w-5 h-5 cursor-pointer"
                        onClick={() =>
                          navigate(`/customers/view-customer/${cust.id}`, {
                            state: { customer: cust },
                          })
                        }
                      />
                      <FiTrash2 className="text-red-600 w-5 h-5" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {paginatedCustomers.length === 0 ? (
            <div className="text-center p-6 text-gray-400">
              No data available
            </div>
          ) : (
            paginatedCustomers.map((cust) => (
              <div
                key={cust.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Name:</span>
                  <span>{cust.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Phone:</span>
                  <span>{cust.phone}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Email:</span>
                  <span>{cust.email}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Address:</span>
                  <span>{cust.address}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Gender:</span>
                  <span>{cust.gender}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Registered:</span>
                  <span>{formatToDDMMYYYY(cust.registeredDate)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={
                      cust.status === "Active"
                        ? "text-green-600 font-bold"
                        : "text-red-600 font-bold"
                    }
                  >
                    {cust.status}
                  </span>
                </div>
                <div className="flex justify-end gap-2 mt-2 text-gray-700 cursor-pointer">
                  <GoEye
                    className="text-blue-600 w-5 h-5 cursor-pointer"
                    onClick={() =>
                      navigate(`/customers/view-customer/${cust.id}`, {
                        state: { customer: cust },
                      })
                    }
                  />
                  <FiTrash2 className="text-red-600 w-5 h-5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
            <div className="text-gray-700">
              Showing {showingStart} to {showingEnd} of {totalEntries} entries
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 border rounded-md ${currentPage === i + 1 ? "bg-[#7EC1B1] text-white" : ""}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customer;
