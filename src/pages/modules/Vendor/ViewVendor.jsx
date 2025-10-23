import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
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
    const vendor = location.state;

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

    if (!vendor) {
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

    return (
        <div className="min-h-screen bg-gray-100 p-6">
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

            {/* Vendor Info */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6 mt-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-[#263138]">Vendor Details</h2>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-2">Active Status</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isActive}
                                onChange={() => setIsActive(!isActive)}
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5EC87E]"></div>
                        </label>
                    </div>
                </div>
                <hr className="border-t border-gray-300" />
                <h1 className="text-2xl font-semibold text-[#263138] mb-4">
                    {vendor?.name || "Vendor Name"}
                </h1>

                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <div className="flex items-center mb-1">
                            <img src={AddressIcon} className="text-gray-500 mr-2 text-lg" />
                            <span className="text-[#263138] font-medium">Address</span>
                        </div>
                        <p className="text-[#7EC1B1] font-medium mb-4">{vendor.address}</p>
                        <iframe
                            title="Vendor Location"
                            className="h-60 w-full rounded-xl border border-gray-300"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(vendor.address)}&z=15&output=embed`}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col justify-start space-y-4 mt-[-4px]">
                        <div>
                            <div className="flex items-center mb-1">
                                <img src={CompanyIcon} className="text-gray-500 mr-2 text-lg" />
                                <span className="text-[#263138] font-medium">Company</span>
                            </div>
                            <p className="text-[#7EC1B1] font-semibold text-lg">{vendor.company}</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-1">
                                <FiPhone className="text-gray-500 mr-2 text-lg" />
                                <span className="text-[#263138] font-medium">Phone No.</span>
                            </div>
                            <p className="text-[#7EC1B1] font-semibold text-lg">+91 {vendor.phone}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: "Total  Leads Handled", value: "8,478", icon: <img src={RightIcon} alt="Right_sign" />, iconBg: "bg-[#6B46C1]" },
                    { title: "Ongoing Leads", value: "234", icon: <img src={ThreeDot} alt="ThreeDot" />, iconBg: "bg-[#FCE3A1]" },
                    { title: "Leads Rejected", value: "34", icon: <img src={RedCross} alt="RedCross" />, iconBg: "bg-[#F97C7C]" },
                    { title: "Success Rate", value: "94%", icon: <img src={PieChart} alt="PieChart" />, iconBg: "bg-[#DDF2E3]" },
                ].map((item, i) => (
                    <div key={i} className={`w-[243px] h-[132px] bg-white rounded-lg shadow-md p-4 border border-gray-100 flex items-center gap-4 ${item.iconBg}`}>
                        <div>
                            <p className="text-[#606060] text-sm">{item.title}</p>
                            <p className="text-2xl font-semibold text-[#263138] mt-2">{item.value}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white flex items-center justify-center">{item.icon}</div>
                    </div>
                ))}
            </div>

            {/* Leads Table Section */}

            <div className="bg-white rounded-lg shadow-md mt-8 p-6">
                
                <h2 className="text-lg font-semibold text-[#263138] mb-4">Assigned Leads</h2>

               
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                 
                   

                    {/* Entries Dropdown */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 font-semibold">Show</span>
                        <select
                            value={rowsPerPage}
                            onChange={handleRowsPerPage}
                            className="p-2 border border-gray-300 rounded-md w-[70px] text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#0088FF]"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                        <span className="text-gray-600 font-semibold">Entries</span>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full sm:w-auto max-w-[220px]">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-600 w-full focus:outline-none focus:ring-1 focus:ring-[#0088FF]"
                        />
                    </div>
                     <div className="flex items-center gap-2">
                        <label className="text-gray-600 font-semibold">Status:</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#0088FF]"
                        >
                            <option value="">Select Status</option>
                            <option value="Completed">Completed</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>

                {/* Table Section */}
                <div className="w-full overflow-x-auto">
                    <table className="table-auto w-full border border-gray-400 min-w-[700px]">
                        <thead>
                            <tr className="text-center text-xl">
                                <th className="p-3 font-poppins font-medium text-[18px]">Sr. No.</th>
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
                            {filteredLeads.slice(0, rowsPerPage).map((lead, index) => (
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
                                    <td className="p-3">{lead.status}</td>
                                    <td className="p-3 flex justify-center">
                                        <div
                                            className="flex items-center justify-center cursor-pointer"
                                            onClick={() => console.log("Preview Lead", lead)}
                                        >
                                            <div style={{ width: 30, height: 24 }}>
                                                <img src={PreviewIcon} alt="Preview" className="text-[#0088FF] w-full h-full" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    );
};

export default VendorDetails;
