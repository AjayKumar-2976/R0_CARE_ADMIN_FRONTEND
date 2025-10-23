// import { useState } from "react";
// import Header2 from "../../../components/superAdmin/header/Header2";
// import { GoEye } from "react-icons/go";
// import { FiSearch } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const LeadManagement = () => {
//   const [entries, setEntries] = useState(6);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();


//   const data = [
//     { leadId: "L001", customerName: "John Doe", serviceType: "Installation", productModel: "X120", orderDate: "2025-10-01", status: "New" },
//     { leadId: "L002", customerName: "Jane Smith", serviceType: "Repair", productModel: "A250", orderDate: "2025-10-05", status: "In Progress" },
//     { leadId: "L003", customerName: "Robert Brown", serviceType: "Maintenance", productModel: "M500", orderDate: "2025-10-10", status: "Completed" },
//      { leadId: "L004", customerName: "John Doe", serviceType: "Installation", productModel: "X120", orderDate: "2025-10-01", status: "New" },
//     { leadId: "L005", customerName: "Jane Smith", serviceType: "Repair", productModel: "A250", orderDate: "2025-10-05", status: "In Progress" },
//     { leadId: "L006", customerName: "Robert Brown", serviceType: "Maintenance", productModel: "M500", orderDate: "2025-10-10", status: "Completed" },
//   ];

//   const filteredData = data.filter((item) => {
//     const matchesStatus = statusFilter === "All" || item.status === statusFilter;
//     const matchesSearch =
//       item.leadId.toLowerCase().includes(search.toLowerCase()) ||
//       item.customerName.toLowerCase().includes(search.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   const totalPages = Math.ceil(filteredData.length / entries);
//   const startIndex = (currentPage - 1) * entries;
//   const displayedData = filteredData.slice(startIndex, startIndex + entries);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "New":
//         return "text-yellow-500";
//       case "In Progress":
//         return "text-blue-500";
//       case "Completed":
//         return "text-green-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
//   };

//   return (
//     <div className="bg-gray-100 p-4 h-full overflow-y-auto flex flex-col gap-6">
//       <Header2 title="Lead Management" />

//       {/* 🔹 Top Controls */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">

//         {/* Left: Show Entries */}
//         <div className="flex items-center gap-2">
//           <span className="font-poppins text-[16px]">Show</span>
//           <select
//             value={entries}
//             onChange={(e) => {
//               setEntries(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//             className="p-2 border rounded w-[60px]"
//           >
//             {[5, 10, 20].map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>
//           <span className="font-poppins text-[16px]">Entries</span>
//         </div>

//         {/* Center: Search Bar */}
//         <div className="flex-1 flex justify-center w-full sm:w-auto mt-2 sm:mt-0">
//           <div className="relative w-full max-w-[300px]">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
//             <input
//               type="text"
//               placeholder="Search Lead ID, Customer"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
//             />
//           </div>
//         </div>

//         {/* Right: Status Select */}
//         <div className="flex items-center gap-2 mt-2 sm:mt-0">
//           <label className="font-poppins text-[16px]">Status:</label>
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="All">All</option>
//             <option value="New">New</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>
//       </div>

//       {/* 🔸 Table */}
//       <div className="bg-white p-3 sm:p-5 rounded-lg shadow flex flex-col gap-4 overflow-x-auto">
//         <table className="table-auto w-full border border-gray-400 min-w-[800px]">
//           <thead>
//             <tr className="bg-[#CACACA] text-center">
//               <th className="p-3 font-poppins font-medium text-[18px]">S.No</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Lead ID</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Customer Name</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Service Type</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Product Model</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Order Date</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Status</th>
//               <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {displayedData.length > 0 ? (
//               displayedData.map((item, index) => (
//                 <tr
//                   key={item.leadId}
//                   className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-[#000]`}
//                 >
//                   <td className="p-3 font-poppins font-normal">{startIndex + index + 1}</td>
//                   <td className="p-3 font-poppins font-normal">{item.leadId}</td>
//                   <td className="p-3 font-poppins font-normal capitalize">{item.customerName}</td>
//                   <td className="p-3 font-poppins font-normal">{item.serviceType}</td>
//                   <td className="p-3 font-poppins font-normal">{item.productModel}</td>
//                   <td className="p-3 font-poppins font-normal">{item.orderDate}</td>
//                   <td className={`p-3 font-poppins font-medium ${getStatusColor(item.status)}`}>
//                     {item.status}
//                   </td>
//                   <td className="p-3 flex justify-center items-center">
//                     <GoEye
//     className="text-blue-600 w-5 h-5 cursor-pointer hover:scale-110 transition"
//     onClick={() => navigate(`/lead-management/view/${item.leadId}`, { state: { lead: item } })}
//   />

//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="p-4 text-gray-500 text-center font-poppins">
//                   No leads found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* 🔸 Pagination */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 flex-wrap font-semibold text-gray-700">
//           <span>
//             Showing{" "}
//             {Math.min(startIndex + 1, filteredData.length)} to{" "}
//             {Math.min(startIndex + entries, filteredData.length)} of{" "}
//             {filteredData.length} entries
//           </span>
//           <div className="flex flex-wrap gap-2 text-[#7EC1B1] justify-center">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-3 py-1 border border-[#7EC1B1] rounded-lg"
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
//               <button
//                 key={num}
//                 onClick={() => handlePageChange(num)}
//                 className={`p-2 border rounded-lg border-[#7EC1B1] w-[36px] ${
//                   currentPage === num ? "bg-[#7EC1B1] text-white" : ""
//                 }`}
//               >
//                 {num}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages || totalPages === 0}
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

// export default LeadManagement;



import { useState } from "react";
import Header2 from "../../../components/superAdmin/header/Header2";
import { GoEye } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LeadManagement = () => {
  const [entries, setEntries] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const data = [
    { leadId: "L001", customerName: "John Doe", serviceType: "Installation", productModel: "X120", orderDate: "2025-10-01", status: "New" },
    { leadId: "L002", customerName: "Jane Smith", serviceType: "Repair", productModel: "A250", orderDate: "2025-10-05", status: "In Progress" },
    { leadId: "L003", customerName: "Robert Brown", serviceType: "Maintenance", productModel: "M500", orderDate: "2025-10-10", status: "Completed" },
    { leadId: "L004", customerName: "John Doe", serviceType: "Installation", productModel: "X120", orderDate: "2025-10-01", status: "New" },
    { leadId: "L005", customerName: "Jane Smith", serviceType: "Repair", productModel: "A250", orderDate: "2025-10-05", status: "In Progress" },
    { leadId: "L006", customerName: "Robert Brown", serviceType: "Maintenance", productModel: "M500", orderDate: "2025-10-10", status: "Completed" },
  ];

  const filteredData = data.filter((item) => {
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    const matchesSearch =
      item.leadId.toLowerCase().includes(search.toLowerCase()) ||
      item.customerName.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const displayedData = filteredData.slice(startIndex, startIndex + entries);

  const getStatusColor = (status) => {
    switch (status) {
      case "New": return "text-yellow-500";
      case "In Progress": return "text-blue-500";
      case "Completed": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="bg-gray-100 p-4 h-full overflow-y-auto flex flex-col gap-6">
      <Header2 title="Lead Management" />

      {/* Top Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        {/* Left: Show Entries */}
        <div className="flex items-center gap-2">
          <span className="font-poppins text-[16px]">Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="p-2 border rounded w-[60px]"
          >
            {[5, 10, 20].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <span className="font-poppins text-[16px]">Entries</span>
        </div>

        {/* Center: Search */}
        <div className="flex-1 flex justify-center w-full sm:w-auto mt-2 sm:mt-0">
          <div className="relative w-full max-w-[300px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search Lead ID, Customer"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>
        </div>

        {/* Right: Status */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <label className="font-poppins text-[16px]">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="bg-white p-3 sm:p-5 rounded-lg shadow flex flex-col gap-4 overflow-x-auto">
        <table className="table-auto w-full border border-gray-400 min-w-[0] sm:min-w-[700px]">
          <thead className="bg-[#CACACA]">
            <tr className="text-center">
              <th className="p-3 font-poppins font-medium text-[18px]">S.No</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Lead ID</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Customer Name</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Service Type</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Product Model</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Order Date</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Status</th>
              <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <tr key={item.leadId} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-[#000]`}>
                  <td className="p-2 sm:p-3">{startIndex + index + 1}</td>
                  <td className="p-2 sm:p-3 truncate max-w-[100px]">{item.leadId}</td>
                  <td className="p-2 sm:p-3 truncate max-w-[120px]">{item.customerName}</td>
                  <td className="p-2 sm:p-3 truncate max-w-[120px]">{item.serviceType}</td>
                  <td className="p-2 sm:p-3 truncate max-w-[120px]">{item.productModel}</td>
                  <td className="p-2 sm:p-3">{item.orderDate}</td>
                  <td className={`p-2 sm:p-3 font-medium ${getStatusColor(item.status)}`}>{item.status}</td>
                  <td className="p-2 sm:p-3 flex justify-center">
                    <GoEye
                      className="text-blue-600 w-5 h-5 cursor-pointer hover:scale-110 transition"
                      onClick={() => navigate(`/lead-management/view/${item.leadId}`, { state: { lead: item } })}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-gray-500 text-center font-poppins">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 flex-wrap font-semibold text-gray-700">
          <span>
            Showing {Math.min(startIndex + 1, filteredData.length)} to {Math.min(startIndex + entries, filteredData.length)} of {filteredData.length} entries
          </span>
          <div className="flex flex-wrap gap-2 text-[#7EC1B1] justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-[#7EC1B1] rounded-lg"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`p-2 border rounded-lg border-[#7EC1B1] w-[36px] ${currentPage === num ? "bg-[#7EC1B1] text-white" : ""}`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
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

export default LeadManagement;
