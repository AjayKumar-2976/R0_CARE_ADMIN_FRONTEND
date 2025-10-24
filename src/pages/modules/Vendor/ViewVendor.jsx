// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FiPhone } from "react-icons/fi";
// import CompanyIcon from "../../../assets/company.svg";
// import AddressIcon from "../../../assets/Location.svg";
// import RightIcon from '../../../assets/right-sign.jpg';
// import ThreeDot from '../../../assets/three-dots.png';
// import RedCross from '../../../assets/cross-circle.png';
// import PieChart from '../../../assets/success-rate.png';
// import PreviewIcon from "../../../assets/preview1.svg"; 

// const VendorDetails = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const vendor = location.state;

//     const [isActive, setIsActive] = useState(true);
//     const [rowsPerPage, setRowsPerPage] = useState(5);
//     const [search, setSearch] = useState("");
//     const [statusFilter, setStatusFilter] = useState("");

//     const handleRowsPerPage = (e) => setRowsPerPage(Number(e.target.value));

//     const leadsData = [
//         {
//             id: "LD101", customerName: "Ravi Sharma", serviceType: "Installation", productModel: "Model X1",
//             orderDate: "2025-09-20",
//             status: "Completed",
//         },
//         {
//             id: "LD102", customerName: "Priya Mehta", serviceType: "Repair", productModel: "Model A5",
//             orderDate: "2025-09-22",
//             status: "Ongoing",
//         },
//         {
//             id: "LD103", customerName: "Abishek Shinde", serviceType: "Repair", productModel: "Model G5",
//             orderDate: "2025-07-12",
//             status: "Pending",
//         },
//         {
//             id: "LD104", customerName: "Priya Patil", serviceType: "Maintanance", productModel: "Model F5",
//             orderDate: "2025-09-30",
//             status: "Completed",
//         },
//         {
//             id: "LD105", customerName: "Alok Mehta", serviceType: "RO Installation", productModel: "Model A8",
//             orderDate: "2025-05-27",
//             status: "Ongoing",
//         },
//         {
//             id: "LD106", customerName: "Akash Khan", serviceType: "Repair", productModel: "Model D34",
//             orderDate: "2025-01-12",
//             status: "Pending",
//         },
//         {
//             id: "LD107", customerName: "Priya Mehta", serviceType: "Maintainance", productModel: "Model A5",
//             orderDate: "2025-09-22",
//             status: "Ongoing",
//         },
//         {
//             id: "LD108", customerName: "Shalini Mehta", serviceType: "Repair", productModel: "Model A5",
//             orderDate: "2023-09-24",
//             status: "Completed",
//         },
//         {
//             id: "LD109", customerName: "Sahil Sheikh", serviceType: "Maintainance", productModel: "Model A45",
//             orderDate: "2025-09-22",
//             status: "Ongoing",
//         },
//         {
//             id: "LD110", customerName: "Abhi Admane", serviceType: "RO Installation", productModel: "Model B345",
//             orderDate: "2023-07-07",
//             status: "Completed",
//         },

//     ];

//     const filteredLeads = leadsData.filter(
//         (lead) =>
//             (lead.customerName.toLowerCase().includes(search.toLowerCase()) ||
//                 lead.id.toLowerCase().includes(search.toLowerCase())) &&
//             (statusFilter === "" || lead.status === statusFilter)
//     );

//     if (!vendor) {
//         return (
//             <div className="flex flex-col items-center justify-center h-screen text-gray-600">
//                 <p>No vendor data found!</p>
//                 <button
//                     onClick={() => navigate("/vendors")}
//                     className="mt-4 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg hover:bg-[#65a89d]"
//                 >
//                     Go Back
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <div className="flex items-center text-gray-600 text-sm font-medium mt-2 mb-4">

//                 <span
//                     onClick={() => navigate("/vendors")}
//                     className="text-[#263238] cursor-pointer hover:text-[#0088FF]"
//                 >
//                     Vendor
//                 </span>
//                 <span className="mx-2 text-gray-400">{'>'}</span>
//                 <span className="text-[#0088FF]">Vendor Details</span>
//             </div>

//             {/* Vendor Info */}
//             <div className="bg-white rounded-lg shadow-md p-6 space-y-6 mt-6">
//                 <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold text-[#263138]">Vendor Details</h2>
//                     <div className="flex items-center">
//                         <span className="text-gray-600 mr-2">Active Status</span>
//                         <label className="relative inline-flex items-center cursor-pointer">
//                             <input
//                                 type="checkbox"
//                                 className="sr-only peer"
//                                 checked={isActive}
//                                 onChange={() => setIsActive(!isActive)}
//                             />
//                             <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5EC87E]"></div>
//                         </label>
//                     </div>
//                 </div>
//                 <hr className="border-t border-gray-300" />
//                 <h1 className="text-2xl font-semibold text-[#263138] mb-4">
//                     {vendor?.name || "Vendor Name"}
//                 </h1>

//                 <div className="grid md:grid-cols-2 gap-6 text-gray-700">
//                     <div>
//                         <div className="flex items-center mb-1">
//                             <img src={AddressIcon} className="text-gray-500 mr-2 text-lg" />
//                             <span className="text-[#263138] font-medium">Address</span>
//                         </div>
//                         <p className="text-[#7EC1B1] font-medium mb-4">{vendor.address}</p>
//                         <iframe
//                             title="Vendor Location"
//                             className="h-60 w-full rounded-xl border border-gray-300"
//                             src={`https://maps.google.com/maps?q=${encodeURIComponent(vendor.address)}&z=15&output=embed`}
//                             allowFullScreen
//                             loading="lazy"
//                         />
//                     </div>

//                     <div className="flex flex-col justify-start space-y-4 mt-[-4px]">
//                         <div>
//                             <div className="flex items-center mb-1">
//                                 <img src={CompanyIcon} className="text-gray-500 mr-2 text-lg" />
//                                 <span className="text-[#263138] font-medium">Company</span>
//                             </div>
//                             <p className="text-[#7EC1B1] font-semibold text-lg">{vendor.company}</p>
//                         </div>
//                         <div>
//                             <div className="flex items-center mb-1">
//                                 <FiPhone className="text-gray-500 mr-2 text-lg" />
//                                 <span className="text-[#263138] font-medium">Phone No.</span>
//                             </div>
//                             <p className="text-[#7EC1B1] font-semibold text-lg">+91 {vendor.phone}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Stats Section */}
//             <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
//                 {[
//                     { title: "Total  Leads Handled", value: "8,478", icon: <img src={RightIcon} alt="Right_sign" />, iconBg: "bg-[#6B46C1]" },
//                     { title: "Ongoing Leads", value: "234", icon: <img src={ThreeDot} alt="ThreeDot" />, iconBg: "bg-[#FCE3A1]" },
//                     { title: "Leads Rejected", value: "34", icon: <img src={RedCross} alt="RedCross" />, iconBg: "bg-[#F97C7C]" },
//                     { title: "Success Rate", value: "94%", icon: <img src={PieChart} alt="PieChart" />, iconBg: "bg-[#DDF2E3]" },
//                 ].map((item, i) => (
//                     <div key={i} className={`w-[243px] h-[132px] bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center gap-4 ${item.iconBg}`}>
//                         <div>
//                             <p className="text-[#606060] text-sm">{item.title}</p>
//                             <p className="text-2xl font-semibold text-[#263138] mt-2">{item.value}</p>
//                         </div>
//                         <div className="p-3 rounded-xl bg-white flex items-center justify-center">{item.icon}</div>
//                     </div>
//                 ))}
//             </div>

//             {/* Leads Table Section */}

//             <div className="bg-white rounded-lg shadow-md mt-8 p-6">
                
//                 <h2 className="text-lg font-semibold text-[#263138] mb-4">Assigned Leads</h2>

               
//                 <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                 
                   

//                     {/* Entries Dropdown */}
//                     <div className="flex items-center gap-2">
//                         <span className="text-gray-600 font-semibold">Show</span>
//                         <select
//                             value={rowsPerPage}
//                             onChange={handleRowsPerPage}
//                             className="p-2 border border-gray-300 rounded-md w-[70px] text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#0088FF]"
//                         >
//                             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                                 <option key={num} value={num}>
//                                     {num}
//                                 </option>
//                             ))}
//                         </select>
//                         <span className="text-gray-600 font-semibold">Entries</span>
//                     </div>

//                     {/* Search Bar */}
//                     <div className="relative w-full sm:w-auto max-w-[220px]">
//                         <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg
//                                 className="h-5 w-5 text-gray-500"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
//                                 />
//                             </svg>
//                         </span>
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-600 w-full focus:outline-none focus:ring-1 focus:ring-[#0088FF]"
//                         />
//                     </div>
//                      <div className="flex items-center gap-2">
//                         <label className="text-gray-600 font-semibold">Status:</label>
//                         <select
//                             value={statusFilter}
//                             onChange={(e) => setStatusFilter(e.target.value)}
//                             className="p-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#0088FF]"
//                         >
//                             <option value="">Select Status</option>
//                             <option value="Completed">Completed</option>
//                             <option value="Ongoing">Ongoing</option>
//                             <option value="Pending">Pending</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Table Section */}
//                 <div className="w-full overflow-x-auto">
//                     <table className="table-auto w-full border border-gray-400 min-w-[700px]">
//                         <thead>
//                             <tr className="text-center text-xl">
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Sr. No.</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Lead ID</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Customer Name</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Service Type</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Product Model</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Order Date</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Status</th>
//                                 <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-center">
//                             {filteredLeads.slice(0, rowsPerPage).map((lead, index) => (
//                                 <tr
//                                     key={lead.id}
//                                     className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
//                                         } text-black font-poppins text-[16px]`}
//                                 >
//                                     <td className="p-3">{index + 1}</td>
//                                     <td className="p-3">{lead.id}</td>
//                                     <td className="p-3">{lead.customerName}</td>
//                                     <td className="p-3">{lead.serviceType}</td>
//                                     <td className="p-3">{lead.productModel}</td>
//                                     <td className="p-3">{lead.orderDate}</td>
//                                     <td className="p-3">{lead.status}</td>
//                                     <td className="p-3 flex justify-center">
//                                         <div
//                                             className="flex items-center justify-center cursor-pointer"
//                                             onClick={() => console.log("Preview Lead", lead)}
//                                         >
//                                             <div style={{ width: 30, height: 24 }}>
//                                                 <img src={PreviewIcon} alt="Preview" className="text-[#0088FF] w-full h-full" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//         </div>

//     );
// };

// export default VendorDetails;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FiSearch } from "react-icons/fi"; // Imported for search bar icon consistency
import CompanyIcon from "../../../assets/company.svg";
import AddressIcon from "../../../assets/Location.svg";
import RightIcon from '../../../assets/right-sign.jpg';
import ThreeDot from '../../../assets/three-dots.png';
import RedCross from '../../../assets/cross-circle.png';
import PieChart from '../../../assets/success-rate.png';
import PreviewIcon from "../../../assets/preview1.svg";

const VendorDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Ensure vendor is initialized to prevent errors on the first render if location.state is null
    const vendor = location.state || {};

    const [isActive, setIsActive] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const handleRowsPerPage = (e) => setRowsPerPage(Number(e.target.value));

    const leadsData = [
        {
            id: "LD101", customerName: "Ravi Sharma", serviceType: "Installation", productModel: "Model X1",
            orderDate: "2025-09-20",
            status: "Completed",
        },
        {
            id: "LD102", customerName: "Priya Mehta", serviceType: "Repair", productModel: "Model A5",
            orderDate: "2025-09-22",
            status: "Ongoing",
        },
        {
            id: "LD103", customerName: "Abishek Shinde", serviceType: "Repair", productModel: "Model G5",
            orderDate: "2025-07-12",
            status: "Pending",
        },
        {
            id: "LD104", customerName: "Priya Patil", serviceType: "Maintanance", productModel: "Model F5",
            orderDate: "2025-09-30",
            status: "Completed",
        },
        {
            id: "LD105", customerName: "Alok Mehta", serviceType: "RO Installation", productModel: "Model A8",
            orderDate: "2025-05-27",
            status: "Ongoing",
        },
        {
            id: "LD106", customerName: "Akash Khan", serviceType: "Repair", productModel: "Model D34",
            orderDate: "2025-01-12",
            status: "Pending",
        },
        {
            id: "LD107", customerName: "Priya Mehta", serviceType: "Maintainance", productModel: "Model A5",
            orderDate: "2025-09-22",
            status: "Ongoing",
        },
        {
            id: "LD108", customerName: "Shalini Mehta", serviceType: "Repair", productModel: "Model A5",
            orderDate: "2023-09-24",
            status: "Completed",
        },
        {
            id: "LD109", customerName: "Sahil Sheikh", serviceType: "Maintainance", productModel: "Model A45",
            orderDate: "2025-09-22",
            status: "Ongoing",
        },
        {
            id: "LD110", customerName: "Abhi Admane", serviceType: "RO Installation", productModel: "Model B345",
            orderDate: "2023-07-07",
            status: "Completed",
        },

    ];

    const filteredLeads = leadsData.filter(
        (lead) =>
            (lead.customerName.toLowerCase().includes(search.toLowerCase()) ||
                lead.id.toLowerCase().includes(search.toLowerCase())) &&
            (statusFilter === "" || lead.status === statusFilter)
    );

    // Filter leads to show only the number specified by rowsPerPage
    const paginatedLeads = filteredLeads.slice(0, rowsPerPage);


    if (!vendor.id) { // Check for a unique vendor property like 'id' instead of the object itself
        return (
            <div className="flex flex-col items-center justify-center h-screen text-gray-600">
                <p>No vendor data found!</p>
                <button
                    onClick={() => navigate("/vendors")}
                    className="mt-4 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg hover:bg-[#65a89d]"
                >
                    Go Back
                </button>
            </div>
        );
    }

    // Helper function for status colors
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "text-green-600 bg-green-100";
            case "Ongoing":
                return "text-yellow-600 bg-yellow-100";
            case "Pending":
                return "text-red-600 bg-red-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col gap-6"> {/* Added p-4 for mobile spacing, p-6 for desktop */}
            <div className="flex items-center text-gray-600 text-sm font-medium mt-2 mb-4">
                <span
                    onClick={() => navigate("/vendors")}
                    className="text-[#263238] cursor-pointer hover:text-[#0088FF]"
                >
                    Vendor
                </span>
                <span className="mx-2 text-gray-400">{'>'}</span>
                <span className="text-[#0088FF]">Vendor Details</span>
            </div>

            {/* Vendor Info - Refined for responsiveness */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-6"> {/* Adjusted padding for mobile */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center"> {/* Allows wrapping on mobile */}
                    <h2 className="text-xl font-semibold text-[#263138] mb-4 sm:mb-0">Vendor Details</h2>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-2">Active Status</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isActive}
                                onChange={() => setIsActive(!isActive)}
                            />
                            {/* Standard Tailwind toggle switch */}
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5EC87E]"></div>
                        </label>
                    </div>
                </div>
                <hr className="border-t border-gray-300" />
                <h1 className="text-2xl font-semibold text-[#263138] mb-4">
                    {vendor.name || "Vendor Name"}
                </h1>

                {/* Info and Map Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"> {/* Use grid-cols-1 on mobile, grid-cols-2 on desktop */}
                    <div>
                        <div className="flex items-center mb-1">
                            {/* NOTE: Using your image source, consider replacing with a standard icon component for better scaling */}
                            <img src={AddressIcon} className="w-5 h-5 text-gray-500 mr-2" alt="Address Icon" />
                            <span className="text-[#263138] font-medium">Address</span>
                        </div>
                        <p className="text-[#7EC1B1] font-medium mb-4">{vendor.address}</p>
                        <iframe
                            title="Vendor Location"
                            className="h-60 w-full rounded-xl border border-gray-300"
                            // NOTE: The original URL for the map embed was broken, using a placeholder structure as the original JS was not executable
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(vendor.address)}&z=15&output=embed`}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col justify-start space-y-6"> {/* Increased spacing for better look */}
                        <div>
                            <div className="flex items-center mb-1">
                                {/* NOTE: Using your image source, consider replacing with a standard icon component for better scaling */}
                                <img src={CompanyIcon} className="w-5 h-5 text-gray-500 mr-2" alt="Company Icon" />
                                <span className="text-[#263138] font-medium">Company</span>
                            </div>
                            <p className="text-[#7EC1B1] font-semibold text-lg">{vendor.company}</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-1">
                                <FiPhone className="text-gray-500 w-5 h-5 mr-2" />
                                <span className="text-[#263138] font-medium">Phone No.</span>
                            </div>
                            <p className="text-[#7EC1B1] font-semibold text-lg">+91 {vendor.phone}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section - Refined for responsiveness */}
            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"> {/* Two columns on mobile, four on desktop */}
                {[
                    { title: "Total Leads Handled", value: "8,478", icon: <img src={RightIcon} alt="Right_sign" />, iconBg: "bg-[#6B46C1]" },
                    { title: "Ongoing Leads", value: "234", icon: <img src={ThreeDot} alt="ThreeDot" />, iconBg: "bg-[#FCE3A1]" },
                    { title: "Leads Rejected", value: "34", icon: <img src={RedCross} alt="RedCross" />, iconBg: "bg-[#F97C7C]" },
                    { title: "Success Rate", value: "94%", icon: <img src={PieChart} alt="PieChart" />, iconBg: "bg-[#DDF2E3]" },
                ].map((item, i) => (
                    <div
                        key={i}
                        // Removed fixed width/height for responsiveness, using flex/padding/gap instead
                        className={`bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center justify-between gap-2 sm:gap-4 ${item.iconBg}`}
                    >
                        <div>
                            <p className="text-[#606060] text-sm font-medium">{item.title}</p>
                            <p className="text-xl sm:text-2xl font-semibold text-[#263138] mt-1 sm:mt-2">{item.value}</p>
                        </div>
                        <div className="p-2 sm:p-3 rounded-xl bg-white flex items-center justify-center min-w-[40px]">
                            {/* Adjusted image size for responsiveness */}
                            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">{item.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Leads Table Section - Refined for responsiveness */}
            <div className="bg-white rounded-lg shadow-md mt-2 p-4 sm:p-6"> {/* Adjusted padding for mobile */}
                <h2 className="text-lg font-semibold text-[#263138] mb-4">Assigned Leads</h2>

                {/* Table Controls (Adapted from your reference code) */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap mb-4">
                    {/* Left: Show Entries */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-poppins text-[16px] text-gray-600 font-semibold">Show</span>
                        <select
                            value={rowsPerPage}
                            onChange={handleRowsPerPage}
                            className="p-2 border rounded w-[50px] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <span className="font-poppins text-[16px] text-gray-600 font-semibold">Entries</span>
                    </div>

                    {/* Right: Search & Status Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {/* Search Bar */}
                        <div className="relative w-full sm:w-auto max-w-[220px]">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                            <input
                                type="text"
                                placeholder="Search Lead ID/Name"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
                            />
                        </div>

                        {/* Status Filter */}
                        <div className="flex items-center gap-2">
                            <label className="text-gray-600 font-semibold whitespace-nowrap">Status:</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="p-2 border rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7EC1B1] w-full"
                            >
                                <option value="">Select Status</option>
                                <option value="Completed">Completed</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                {/* Desktop Table - Hidden on small screens */}
                <div className="hidden sm:block w-full overflow-x-auto">
                    <table className="table-auto w-full border border-gray-400 min-w-[900px]">
                        <thead>
                            <tr className="bg-[#CACACA] text-center">
                                <th className="p-3 font-poppins font-medium text-[16px]">Sr. No.</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Lead ID</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Customer Name</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Service Type</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Product Model</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Order Date</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Status</th>
                                <th className="p-3 font-poppins font-medium text-[16px]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {paginatedLeads.map((lead, index) => (
                                <tr
                                    key={lead.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                        } text-black font-poppins text-[16px]`}
                                >
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{lead.id}</td>
                                    <td className="p-3">{lead.customerName}</td>
                                    <td className="p-3">{lead.serviceType}</td>
                                    <td className="p-3">{lead.productModel}</td>
                                    <td className="p-3">{lead.orderDate}</td>
                                    <td className="p-3">
                                        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="p-3 flex justify-center">
                                        <button
                                            className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded cursor-pointer"
                                            onClick={() => console.log("Preview Lead", lead)}
                                        >
                                            <img src={PreviewIcon} alt="Preview" className="w-6 h-6" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards - Hidden on large screens */}
                <div className="sm:hidden flex flex-col gap-3">
                    {paginatedLeads.map((lead, index) => (
                        <div key={lead.id} className={`bg-white p-4 rounded-lg shadow border-l-4 ${lead.status === 'Completed' ? 'border-green-500' : lead.status === 'Ongoing' ? 'border-yellow-500' : 'border-red-500'}`}>
                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex justify-between items-center border-b pb-1">
                                    <span className="font-semibold text-gray-700">Lead ID</span>
                                    <span className="font-medium text-gray-900">{lead.id}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Customer</span>
                                    <span className="font-normal text-gray-600">{lead.customerName}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Service</span>
                                    <span className="font-normal text-gray-600">{lead.serviceType}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Model</span>
                                    <span className="font-normal text-gray-600">{lead.productModel}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Date</span>
                                    <span className="font-normal text-gray-600">{lead.orderDate}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t mt-2">
                                    <span className="font-semibold text-gray-700">Status</span>
                                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(lead.status)}`}>
                                        {lead.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-3 pt-3 border-t">
                                <button
                                    className="h-[36px] w-[36px] flex items-center justify-center rounded cursor-pointer"
                                    onClick={() => console.log("Preview Lead", lead)}
                                >
                                    <img src={PreviewIcon} alt="Preview" className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VendorDetails;