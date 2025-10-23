
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Header2 from "../../../components/superAdmin/header/Header2";
// import { GoEye } from "react-icons/go";

// import { IoLocationSharp } from "react-icons/io5"; // Location
// import { PiBuildingOfficeLight } from "react-icons/pi"; // Skill
// import { FiPhone } from "react-icons/fi";         // Phone

// const ViewEngineer = () => {
//   const location = useLocation();
//   const engineer = location.state?.engineer;

//   const successRate = 75;
//   const [active, setActive] = useState(engineer?.isActive ?? true);
//   // const assignedLeads = engineer?.assignedLeads || [];

//     const assignedLeads = [
//     { id: "L001", customerName: "Ajay Kumar", serviceType: "Repair", productModel: "Model A", orderDate: "2025-10-10", status: "Assigned" },
//     { id: "L002", customerName: "Ramesh Sharma", serviceType: "Installation", productModel: "Model B", orderDate: "2025-10-11", status: "In Progress" },
//     { id: "L003", customerName: "Sita Devi", serviceType: "Maintenance", productModel: "Model C", orderDate: "2025-10-12", status: "Completed" },
//     { id: "L004", customerName: "Vijay Singh", serviceType: "Repair", productModel: "Model D", orderDate: "2025-10-13", status: "Accepted" },
//     { id: "L005", customerName: "Anita Rao", serviceType: "Installation", productModel: "Model E", orderDate: "2025-10-14", status: "Assigned" },
//     { id: "L006", customerName: "Rahul Verma", serviceType: "Maintenance", productModel: "Model F", orderDate: "2025-10-15", status: "In Progress" },
//     { id: "L007", customerName: "Priya Singh", serviceType: "Repair", productModel: "Model G", orderDate: "2025-10-16", status: "Completed" },
//     { id: "L008", customerName: "Karan Patel", serviceType: "Installation", productModel: "Model H", orderDate: "2025-10-17", status: "Accepted" },
//   ];

//   const totalLeads = assignedLeads.length;
//   const ongoingLeads = assignedLeads.filter(
//     (l) => l.status === "Assigned"
//   ).length;
//   const leadsRejected = assignedLeads.filter(
//     (l) => l.status === "Rejected"
//   ).length;
//   // const successRate = totalLeads === 0 ? 0 : Math.round(((totalLeads - leadsRejected) / totalLeads) * 100);

  

//   if (!engineer) return <div className="p-6">No engineer data available.</div>;

  

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col p-6 gap-6">
//       <Header2 />

//       {/* Engineer Info */}
//    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-8">
//   {/* Header Section */}
//   <div className="flex justify-between items-center">
//     {/* Left Side - Name + Badge */}
//     <div className="flex items-center gap-3">
//       <h2 className="text-[32px] font-600 font-semibold font-poppins">{engineer.name}</h2>
//       <span
//         className={`text-white text-sm font-semibold px-3 py-1 rounded-full ${
//           active ? "bg-[#3A953A]" : "bg-red-600 text-white"
//         }`}
//       >
//         {active ? "Available" : "Inactive"}
//       </span>
//     </div>

//     {/* Right Side - Active Toggle in same line */}
//     <div className="flex items-center gap-3">
//       <span className="font-medium text-base">Active Status</span>
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           checked={active}
//           onChange={() => setActive(!active)}
//           className="sr-only peer"
//         />
//         <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition duration-300"></div>
//         <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition duration-300"></div>
//       </label>
//     </div>
//   </div>

//   {/* Assigned Area Below Name */}
//  <div className="flex gap-3">
//     <IoLocationSharp className="w-6 h-6 text-[#7EC1B1] mt-1" />
//     <div className="flex flex-col">
//       <span className="font-medium text-lg text-black">Assigned Area:</span>
//       <p className="text-xl font-400 text-[#7EC1B1]">{engineer.assignedArea}</p>
//     </div>
//   </div>

//   {/* Map and Details Section */}
//   <div className="flex flex-col md:flex-row gap-6">
//     {/* Map */}
//     <div className="w-full md:w-1/2 rounded-lg overflow-hidden border shadow">
//       <iframe
//         title="Location Map"
//         width="100%"
//         height="300"
//         frameBorder="0"
//         style={{ border: 0 }}
//         src={`https://maps.google.com/maps?q=${encodeURIComponent(
//           engineer.assignedArea
//         )}&z=15&output=embed`}
//         allowFullScreen
//         aria-hidden="false"
//       />
//     </div>

//     {/* Right Side Info */}
//     <div className="w-full md:w-1/2 flex flex-col gap-4">
  
//     {/* Skill */}
//     <div className="flex items-start gap-3">
//       <PiBuildingOfficeLight className="w-6 h-6 text-[#7EC1B1] mt-1" />
//       <div>
//         <span className="font-medium text-lg text-black">Skill:</span>
//         <p className="text-xl font-400 text-[#7EC1B1]">{engineer.skill}</p>
//       </div>
//     </div>

//     {/* Phone Number */}
//     <div className="flex items-start gap-3">
//       <FiPhone className="w-6 h-6 text-[#7EC1B1] mt-1" />
//       <div>
//         <span className="font-medium text-lg text-black">Phone No.:</span>
//         <p className="text-xl font-400 text-[#7EC1B1]">{engineer.phone}</p>
//       </div>
//     </div>
//   </div>
// </div>


//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
//           {/* Total Leads */}
//           <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
//             <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <span className="text-lg font-semibold text-gray-600">
//                   Total Leads Handled
//                 </span>
//                 <span className="text-2xl font-bold text-gray-900">
//                   {totalLeads}
//                 </span>
//               </div>
//               <div className="bg-[#624AD940] p-2 rounded-lg shadow flex items-center justify-center">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#624AD9]">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     className="text-white w-6 h-6"
//                   >
//                     <path d="M16.707 5.293a1 1 0 0 0-1.414 0L8 12.586 4.707 9.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Ongoing Leads */}
//           <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
//             <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <span className="text-lg font-semibold text-gray-600">
//                   Ongoing Leads
//                 </span>
//                 <span className="text-2xl font-bold text-gray-900">
//                   {ongoingLeads}
//                 </span>
//               </div>
//               <div className="bg-[#FEC53D40] p-2 rounded-lg shadow flex items-center justify-center">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEC53D]">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     className="text-white w-6 h-6"
//                   >
//                     <circle cx="6" cy="12" r="2" />
//                     <circle cx="12" cy="12" r="2" />
//                     <circle cx="18" cy="12" r="2" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Leads Rejected */}
//           <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
//             <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <span className="text-lg font-semibold text-gray-600">
//                   Leads Rejected
//                 </span>
//                 <span className="text-2xl font-bold text-gray-900">
//                   {leadsRejected}
//                 </span>
//               </div>
//               <div className="bg-[#FE3D3D40] p-2 rounded-lg shadow flex items-center justify-center">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FE3D3D]">
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     className="text-white w-6 h-6"
//                   >
//                     <path d="M10 8.586l4.95-4.95a1 1 0 0 1 1.414 1.414L11.414 10l4.95 4.95a1 1 0 0 1-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L8.586 10l-4.95-4.95a1 1 0 0 1 1.414-1.414z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Success Rate */}
//           <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
//             <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
//               <div className="flex flex-col gap-1">
//                 <span className="text-lg font-semibold text-gray-600">
//                   Success Rate
//                 </span>
//                 <span className="text-2xl font-bold text-gray-900">
//                   {successRate}%
//                 </span>
//               </div>

//               {/* Circular Progress */}
//               <div className="bg-green-50 rounded-xl p-1 shadow">
//                 {/* Right: Circular Progress inside its own box */}
//                 <div className="bg-[#4AD99140] rounded-full w-16 h-16 flex items-center justify-center">
//                   <div className="w-14 h-14 relative">
//                     <svg
//                       className="w-14 h-14 transform -rotate-90"
//                       viewBox="0 0 36 36"
//                     >
//                       {/* Background Circle */}
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         strokeWidth="4"
//                         stroke="#d1fae5"
//                         fill="none"
//                       />
//                       {/* Foreground Circle */}
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         strokeWidth="4"
//                         stroke="#10b981"
//                         fill="none"
//                         strokeDasharray={`${successRate}, 100`}
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     {/* Percentage inside circle */}
//                     <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
//                       {successRate}%
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Assigned Leads Section */}
//         <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
//           {/* Section Heading */}
//           <h2 className="text-2xl font-bold text-gray-800">Assigned Leads</h2>

//           {/* Top Controls above Table */}
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
//             {/* Left: Status dropdown */}

//             {/* Middle: Entries selector */}
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">Show</label>
//               <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]">
//                 <option value={5}>5</option>
//                 <option value={10}>10</option>
//                 <option value={25}>25</option>
//                 <option value={50}>50</option>
//               </select>
//               <span className="font-medium text-gray-700">entries</span>
//             </div>

//             {/* Right: Search input */}
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">Search:</label>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">Status:</label>
//               <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]">
//                 <option value="" disabled hidden>
//                   All
//                 </option>
//                 <option value="Assigned">Assigned</option>
//                 <option value="Accepted">Accepted</option>
//                                 <option value="Completed">Completed</option>
//                 <option value="In Progress">In Progress</option>

//               </select>
//             </div>
//           </div>

//           {/* Assigned Leads Table */}
//           <div className="flex flex-col gap-4">
//             <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
//               <thead className="bg-gray-200 text-gray-700 text-base">
//                 <tr>
//                   <th className="p-3  font-semibold">Sr.No.</th>
//                   <th className="p-3  font-semibold">Lead ID</th>
//                   <th className="p-3  font-semibold">Customer Name</th>
//                   <th className="p-3  font-semibold">Service Type</th>
//                   <th className="p-3  font-semibold">Product Model</th>
//                   <th className="p-3  font-semibold">Order Date</th>
//                   <th className="p-3  font-semibold">Status</th>
//                   <th className="p-3  font-semibold">Action</th>
//                 </tr>
//               </thead>
//             <tbody>
//   {totalLeads === 0 ? (
//     <tr>
//       <td colSpan={8} className="text-center p-6 text-gray-400 align-middle">
//         No data available
//       </td>
//     </tr>
//   ) : (
//     assignedLeads.map((lead, idx) => (
//       <tr
//         key={lead.id}
//         className="border-b bg-gray-50 hover:bg-blue-50 transition"
//       >
//         <td className="p-3 text-center align-middle">{idx + 1}</td>
//         <td className="p-3 text-center align-middle">{lead.id}</td>
//         <td className="p-3 text-center align-middle">{lead.customerName}</td>
//         <td className="p-3 text-center align-middle">{lead.serviceType}</td>
//         <td className="p-3 text-center align-middle">{lead.productModel}</td>
//         <td className="p-3 text-center align-middle">{lead.orderDate}</td>
//         <td
//           className={`p-3 text-center font-bold  align-middle ${
//             lead.status === "Assigned"
//               ? "text-yellow-600  px-2 py-1"
//               : lead.status === "In Progress"
//               ? "text-blue-600  px-2 py-1"
//               : lead.status === "Completed"
//               ? "text-green-600  px-2 py-1"
//               : "text-purple-600 px-2 py-1"
//           }`}
//         >
//           {lead.status}
//         </td>
//         <td className="p-3 align-middle">
//   <div className="flex justify-center">
//     <GoEye className="text-blue-600 cursor-pointer" />
//   </div>
// </td>

//       </tr>
//     ))
//   )}
// </tbody>

//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewEngineer;


import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";
import { GoEye } from "react-icons/go";

import { IoLocationSharp } from "react-icons/io5"; // Location
import { PiBuildingOfficeLight } from "react-icons/pi"; // Skill
import { FiPhone } from "react-icons/fi";         // Phone

const ViewEngineer = () => {
  const location = useLocation();
  const engineer = location.state?.engineer;

  const successRate = 75;
  const [active, setActive] = useState(engineer?.isActive ?? true);
  // const assignedLeads = engineer?.assignedLeads || [];

  const assignedLeads = [
    { id: "L001", customerName: "Ajay Kumar", serviceType: "Repair", productModel: "Model A", orderDate: "2025-10-10", status: "Assigned" },
    { id: "L002", customerName: "Ramesh Sharma", serviceType: "Installation", productModel: "Model B", orderDate: "2025-10-11", status: "In Progress" },
    { id: "L003", customerName: "Sita Devi", serviceType: "Maintenance", productModel: "Model C", orderDate: "2025-10-12", status: "Completed" },
    { id: "L004", customerName: "Vijay Singh", serviceType: "Repair", productModel: "Model D", orderDate: "2025-10-13", status: "Accepted" },
    { id: "L005", customerName: "Anita Rao", serviceType: "Installation", productModel: "Model E", orderDate: "2025-10-14", status: "Assigned" },
    { id: "L006", customerName: "Rahul Verma", serviceType: "Maintenance", productModel: "Model F", orderDate: "2025-10-15", status: "In Progress" },
    { id: "L007", customerName: "Priya Singh", serviceType: "Repair", productModel: "Model G", orderDate: "2025-10-16", status: "Completed" },
    { id: "L008", customerName: "Karan Patel", serviceType: "Installation", productModel: "Model H", orderDate: "2025-10-17", status: "Accepted" },
  ];

  const totalLeads = assignedLeads.length;
  const ongoingLeads = assignedLeads.filter(
    (l) => l.status === "Assigned"
  ).length;
  const leadsRejected = assignedLeads.filter(
    (l) => l.status === "Rejected"
  ).length;
  // const successRate = totalLeads === 0 ? 0 : Math.round(((totalLeads - leadsRejected) / totalLeads) * 100);

  if (!engineer) return <div className="p-6">No engineer data available.</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col p-4 sm:p-6 gap-6">
      <Header2 />

      {/* Engineer Info */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Left Side - Name + Badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl sm:text-[32px] font-600 font-semibold font-poppins">
              {engineer.name}
            </h2>
            <span
              className={`text-white text-sm font-semibold px-3 py-1 rounded-full ${
                active ? "bg-[#3A953A]" : "bg-red-600 text-white"
              }`}
            >
              {active ? "Available" : "Inactive"}
            </span>
          </div>

          {/* Right Side - Active Toggle */}
          <div className="flex items-center gap-3">
            <span className="font-medium text-base">Active Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={active}
                onChange={() => setActive(!active)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition duration-300"></div>
            </label>
          </div>
        </div>

        {/* Assigned Area Below Name */}
        <div className="flex gap-3 flex-wrap">
          <IoLocationSharp className="w-6 h-6 text-[#7EC1B1] mt-1" />
          <div className="flex flex-col">
            <span className="font-medium text-lg text-black">Assigned Area:</span>
            <p className="text-xl font-400 text-[#7EC1B1]">{engineer.assignedArea}</p>
          </div>
        </div>

        {/* Map and Details Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden border shadow">
            <iframe
              title="Location Map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                engineer.assignedArea
              )}&z=15&output=embed`}
              allowFullScreen
              aria-hidden="false"
            />
          </div>

          {/* Right Side Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Skill */}
            <div className="flex items-start gap-3">
              <PiBuildingOfficeLight className="w-6 h-6 text-[#7EC1B1] mt-1" />
              <div>
                <span className="font-medium text-lg text-black">Skill:</span>
                <p className="text-xl font-400 text-[#7EC1B1]">{engineer.skill}</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-3">
              <FiPhone className="w-6 h-6 text-[#7EC1B1] mt-1" />
              <div>
                <span className="font-medium text-lg text-black">Phone No.:</span>
                <p className="text-xl font-400 text-[#7EC1B1]">{engineer.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {/* Total Leads */}
          <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
            <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-gray-600">Total Leads Handled</span>
                <span className="text-2xl font-bold text-gray-900">{totalLeads}</span>
              </div>
              <div className="bg-[#624AD940] p-2 rounded-lg shadow flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#624AD9]">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="text-white w-6 h-6">
                    <path d="M16.707 5.293a1 1 0 0 0-1.414 0L8 12.586 4.707 9.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing Leads */}
          <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
            <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-gray-600">Ongoing Leads</span>
                <span className="text-2xl font-bold text-gray-900">{ongoingLeads}</span>
              </div>
              <div className="bg-[#FEC53D40] p-2 rounded-lg shadow flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEC53D]">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="text-white w-6 h-6">
                    <circle cx="6" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="18" cy="12" r="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Leads Rejected */}
          <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
            <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-gray-600">Leads Rejected</span>
                <span className="text-2xl font-bold text-gray-900">{leadsRejected}</span>
              </div>
              <div className="bg-[#FE3D3D40] p-2 rounded-lg shadow flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FE3D3D]">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="text-white w-6 h-6">
                    <path d="M10 8.586l4.95-4.95a1 1 0 0 1 1.414 1.414L11.414 10l4.95 4.95a1 1 0 0 1-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L8.586 10l-4.95-4.95a1 1 0 0 1 1.414-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-[#F5F5F5] rounded-xl p-1 shadow">
            <div className="bg-[#F5F5F5] p-5 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-gray-600">Success Rate</span>
                <span className="text-2xl font-bold text-gray-900">{successRate}%</span>
              </div>
              <div className="bg-green-50 rounded-xl p-1 shadow">
                <div className="bg-[#4AD99140] rounded-full w-16 h-16 flex items-center justify-center">
                  <div className="w-14 h-14 relative">
                    <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" strokeWidth="4" stroke="#d1fae5" fill="none" />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        strokeWidth="4"
                        stroke="#10b981"
                        fill="none"
                        strokeDasharray={`${successRate}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
                      {successRate}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Leads Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Assigned Leads</h2>

          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <label className="font-medium text-gray-700">Show</label>
              <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="font-medium text-gray-700">entries</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="font-medium text-gray-700">Search:</label>
              <input
                type="text"
                placeholder="Search..."
                className="w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="font-medium text-gray-700">Status:</label>
              <select className="w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]">
                <option value="" disabled hidden>All</option>
                <option value="Assigned">Assigned</option>
                <option value="Accepted">Accepted</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700 text-base">
                <tr>
                  <th className="p-3 font-semibold">Sr.No.</th>
                  <th className="p-3 font-semibold">Lead ID</th>
                  <th className="p-3 font-semibold">Customer Name</th>
                  <th className="p-3 font-semibold">Service Type</th>
                  <th className="p-3 font-semibold">Product Model</th>
                  <th className="p-3 font-semibold">Order Date</th>
                  <th className="p-3 font-semibold">Status</th>
                  <th className="p-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {totalLeads === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center p-6 text-gray-400 align-middle">
                      No data available
                    </td>
                  </tr>
                ) : (
                  assignedLeads.map((lead, idx) => (
                    <tr
                      key={lead.id}
                      className="border-b bg-gray-50 hover:bg-blue-50 transition"
                    >
                      <td className="p-3 text-center align-middle">{idx + 1}</td>
                      <td className="p-3 text-center align-middle">{lead.id}</td>
                      <td className="p-3 text-center align-middle">{lead.customerName}</td>
                      <td className="p-3 text-center align-middle">{lead.serviceType}</td>
                      <td className="p-3 text-center align-middle">{lead.productModel}</td>
                      <td className="p-3 text-center align-middle">{lead.orderDate}</td>
                      <td
                        className={`p-3 text-center font-bold align-middle ${
                          lead.status === "Assigned"
                            ? "text-yellow-600 px-2 py-1"
                            : lead.status === "In Progress"
                            ? "text-blue-600 px-2 py-1"
                            : lead.status === "Completed"
                            ? "text-green-600 px-2 py-1"
                            : "text-purple-600 px-2 py-1"
                        }`}
                      >
                        {lead.status}
                      </td>
                      <td className="p-3 align-middle">
                        <div className="flex justify-center">
                          <GoEye className="text-blue-600 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEngineer;
