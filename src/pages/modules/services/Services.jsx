
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import edit from "../../../assets/edit.png";
// import trash from "../../../assets/trash.png";
// import arrowup from "../../../assets/arrow-up.png";
// import arrowdown from "../../../assets/arrow-down.png";
// import Header2 from '../../../components/superAdmin/header/Header2';


// const Services = () => {
//   const [rows, setRows] = useState([
//     { id: 1, service: "Web Development", subtitle: "Full Stack Development", price: "$3000", time: "1hr.30min", status: "Published" },
//     { id: 2, service: "SEO Optimization", subtitle: "On-page & Off-page SEO", price: "$1500", time: "1hr.10min", status: "UnPublished" },
//     { id: 3, service: "Graphic Design", subtitle: "Logo & Branding", price: "$1000", time: "1hr", status: "Published" },
//     { id: 4, service: "Digital Marketing", subtitle: "Social Media Marketing", price: "$2000", time: "", status: "UnPublished" },
//     { id: 5, service: "App Development", subtitle: "iOS & Android", price: "$4000", time: "1hr.40min", status: "Published" },
//     { id: 6, service: "Content Writing", subtitle: "SEO & Blogs", price: "$800", time: "1hr.30min", status: "UnPublished" },
//     { id: 7, service: "UI/UX Design", subtitle: "Mobile & Web", price: "$1200", time: "", status: "Published" },
//     { id: 8, service: "Email Marketing", subtitle: "Campaign Setup", price: "$700", time: "", status: "UnPublished" },
//   ]);

//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(7);
//   const [search, setSearch] = useState("");

//   const navigate = useNavigate();
//   const handleClick = () => navigate("/services/addservice");

//   const handleRowsPerPage = (e) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   };

//   const filteredRows = rows.filter((row) =>
//     row.service.toLowerCase().includes(search.toLowerCase())
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
// <div className="bg-gray-100 p-4 h-full overflow-y-auto flex flex-col gap-6">
// <Header2/>
//       {/* Top Controls */}
//       <div className="bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 sm:p-6 rounded-lg shadow flex-wrap">
//         {/* Left: Show Entries + Search */}
//         <div className="flex flex-wrap items-center gap-4 sm:gap-20 w-full sm:w-auto">
//           <div className="flex items-center gap-2 sm:gap-4 flex-wrap w-full sm:w-auto">


//             <span className="font-poppins text-[16px]">Show</span>
//             <select
//               value={rowsPerPage}
//               onChange={handleRowsPerPage}
//               className="p-2 border rounded w-[50px]"
//             >
//               {[...Array(7)].map((_, i) => (
//                 <option key={i} value={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <span className="font-poppins text-[16px]">Entries</span>
//           </div>

//           <div className="flex items-center gap-2 w-full sm:w-auto">
//             <label className="font-poppins text-[16px] whitespace-nowrap">Search:</label>
//             <input
//               type="text"
//               placeholder="Search service"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="p-2 border rounded w-full max-w-[200px]"
//             />
//           </div>
//         </div>

//         {/* Right: Add Service Button */}
//         <button
//           onClick={handleClick}
//                     className="w-full sm:w-[200px] h-[40px] bg-[#7EC1B1] text-white rounded-lg font-poppins text-[16px]"

//         >
//           Add Service
//         </button>
//       </div>

//       {/* Table / Mobile Cards */}
//       <div className="bg-white p-3 sm:p-5 rounded-lg shadow flex flex-col gap-4 overflow-x-auto">
//         {/* Desktop Table */}
//         <div className="hidden sm:block">
//           <table className="table-auto w-full border border-gray-400 min-w-[600px]">
//             <thead>
//               <tr className="bg-[#CACACA] text-center">
//                 <th className="p-3 font-poppins font-medium text-[18px]">
//                   <div className="flex justify-center items-center gap-1">
//                     Sr. No.
//                     <img src={arrowup} alt="up" className="w-4 h-6" />
//                     <img src={arrowdown} alt="down" className="w-4 h-6" />
//                   </div>
//                 </th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">
//                   <div className="flex justify-center items-center gap-1">
//                     Service
//                     <img src={arrowup} alt="up" className="w-4 h-6" />
//                     <img src={arrowdown} alt="down" className="w-4 h-6" />
//                   </div>
//                 </th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">
//                   <div className="flex justify-center items-center gap-1">
//                     Service Subtitle
//                     <img src={arrowup} alt="up" className="w-4 h-6" />
//                     <img src={arrowdown} alt="down" className="w-4 h-6" />
//                   </div>
//                 </th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Price</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Time</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Status</th>
//                 <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-center">
//               {paginatedRows.map((row, index) => (
//                 <tr key={row.id} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-[#000]`}>
//                   <td className="p-3 font-poppins font-normal">{row.id}</td>
//                   <td className="p-3 font-poppins font-normal capitalize">{row.service}</td>
//                   <td className="p-3 font-poppins font-normal capitalize">{row.subtitle}</td>
//                   <td className="p-3 font-poppins font-normal">{row.price}</td>
//                   <td className="p-3 font-poppins font-normal">{row.time || "-"}</td>
//                   <td className="p-3">
//                     <div className={`p-1 rounded-full border font-poppins font-medium ${
//                       row.status === "Published"
//                         ? "text-[#7EC1B1] border-[#7EC1B1]"
//                         : "text-[#C17E7F] border-[#C17E7F]"
//                     }`}>
//                       {row.status}
//                     </div>
//                   </td>
//                   <td className="p-3 flex justify-center gap-2 flex-wrap">
//                     <div className="bg-[#C17E7F] h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded">
//                       <img src={trash} alt="delete" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
//                     </div>
//                     <div className="bg-[#007AFF] h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded">
//                       <img src={edit} alt="edit" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
//                     </div>
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
//               <div className="flex justify-between"><span className="font-semibold">Service</span><span>{row.service}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Subtitle</span><span>{row.subtitle}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Price</span><span>{row.price}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Time</span><span>{row.time || "-"}</span></div>
//               <div className="flex justify-between"><span className="font-semibold">Status</span>
//                 <span className={`p-1 rounded-full text-center ${row.status === "Published" ? "text-[#7EC1B1] border border-[#7EC1B1]" : "text-[#C17E7F] border border-[#C17E7F]"}`}>{row.status}</span>
//               </div>
//               <div className="flex gap-2 mt-2 justify-center flex-wrap">
//                 <div className="bg-[#C17E7F] h-[32px] w-[32px] flex items-center justify-center rounded">
//                   <img src={trash} alt="delete" className="w-5 h-5 cursor-pointer" />
//                 </div>
//                 <div className="bg-[#007AFF] h-[32px] w-[32px] flex items-center justify-center rounded">
//                   <img src={edit} alt="edit" className="w-5 h-5 cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 flex-wrap font-semibold text-gray-700">
//           <span>
//             Showing {Math.min((page - 1) * rowsPerPage + 1, filteredRows.length)} to {Math.min(page * rowsPerPage, filteredRows.length)} of {filteredRows.length} entries
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
//                 className={`p-2 border rounded-lg border-[#7EC1B1] ${page === idx + 1 ? "bg-[#7EC1B1] text-white" : ""} w-[36px]`}
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

// export default Services;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviewIcon from '../../../assets/preview1.svg'
import EditIcon from '../../../assets/edit1.svg'
import Deleteicon from '../../../assets/delete.svg'
import Header2 from '../../../components/superAdmin/header/Header2';
import SearchIcon from "../../../assets/search.png";


const Services = () => {
  const [rows, setRows] = useState([
    { id: 1, category: "Service", serviceAMC: "Water Purifier Service Maintenance Service", price: "₹899.00", warrenty: "NA", discount: "10%" },
    { id: 2, category: "AMC Plan", serviceAMC: "Silver Annual Maintenance Contract (AMC) Plan Premium Service.", price: "₹1899.00", warrenty: "1 Year", discount: "10%" },
    { id: 3, category: "Service", serviceAMC: "Gold Annual Maintenance Contract (AMC) Plan Premium Service.", price: "₹2899.00", warrenty: "1 Year", discount: "10%" },
    { id: 4, category: "AMC Plan", serviceAMC: "Dimond Annual Maintenance Contract (AMC) Plan Premium Service.", price: "₹3899.00", warrenty: "1 Year", discount: "10%" },
    { id: 5, category: "AMC Plan", serviceAMC: "Platinum Annual Maintenance Contract (AMC) Plan Premium Service.", price: "₹4899.00", warrenty: "1 Year", discount: "10%" },
    { id: 6, category: "Service", serviceAMC: "Installation RO Water Purifier Service", price: "₹899.00", warrenty: "NA", discount: "10%" },
    { id: 7, category: "AMC Plan", serviceAMC: "Uninstallation RO Water Purifier Service", price: "₹899.00", warrenty: "NA", discount: "10%" },
    { id: 8, category: "AMC Plan", serviceAMC: "Water Purifier Service Maintenance Service", price: "₹899.00", warrenty: "NA", discount: "10%" },
    { id: 9, category: "Service", serviceAMC: "Water Purifier Service Maintenance Service", price: "₹899.00", warrenty: "NA", discount: "10%" },
    { id: 10, category: "AMC Plan", serviceAMC: "Water Purifier Service Maintenance Service", price: "₹899.00", warrenty: "NA", discount: "10%" },
  ]);


  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");


  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
 


  const handleClick = () => navigate("/services/addservice");


 


  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };


  const filteredRows = rows
    .filter((row) => row.category.toLowerCase().includes(search.toLowerCase()))
    .filter((row) => (statusFilter ? row.category === statusFilter : true));


  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );


  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setPage(newPage);
  };


  return (
    <div className="bg-white p-4 h-full overflow-y-auto flex flex-col gap-6">
      <Header2 />


      {/* (Top Controls + Table) */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col gap-4 overflow-x-auto">


        {/* Top Controls */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Left: Show Entries + Search + Category */}
          <div className="flex flex-wrap items-center gap-4 ">
            <div className="flex items-center gap-2 flex-wrap text-sm md:text-base mr-10">
              <span>Show</span>
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPage}
                className="p-1 md:p-2 border rounded w-[60px]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <span>Entries</span>
            </div>


            <div className="flex items-center gap-2 flex-wrap text-sm md:text-base mr-15">


              <div className="relative w-full max-w-[200px]">
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5"
                />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="p-1 pl-8 md:p-2 md:pl-9 border rounded w-full text-sm md:text-base"
                />
              </div>
            </div>


            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="p-1 md:p-2 border rounded w-full md:w-[200px] text-sm md:text-base"
              >
                <option value="">Select Category</option>
                <option value="Service">Service</option>
                <option value="AMC Plan">AMC Plan</option>
              </select>
            </div>
          </div>


          {/* Right: Add Service Button */}
          <button
            onClick={handleClick}
            className="w-full sm:w-[200px] h-[40px] bg-[#7EC1B1] text-white rounded-lg font-poppins text-[16px]"
          >
            Add Service/AMC
          </button>
        </div>


        {/* Table / Mobile Cards */}
        <div className="flex flex-col gap-4">
          {/* Desktop Table */}
          <div className="hidden sm:block">
            <table className="table-auto w-full border border-gray-400 min-w-[600px]">
              <thead>
                <tr className="bg-gray-100 text-center">
                  <th className="p-3 font-poppins font-medium text-[18px]">Sr. No.</th>
                  <th className="p-3 font-poppins font-medium text-[18px]">Category</th>
                  <th className="p-3 font-poppins font-medium text-[18px]">Service & AMC Plan Name</th>
                  <th className="p-3 font-poppins font-medium text-[18px]">Price</th>
                  <th className="p-3 font-poppins font-medium text-[18px]">Warrenty/Validity</th>
                  <th className="p-3 font-poppins font-medium text-[18px]">Discount</th>
                  <th className="p-3 font-poppins font-medium text-[18px]">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {paginatedRows.map((row) => (
                  <tr key={row.id} className="bg-white">
                    <td className="p-3 font-poppins font-normal">{row.id}</td>
                    <td className="p-3 font-poppins font-normal capitalize">{row.category}</td>
                    <td className="p-3 font-poppins font-normal capitalize truncate max-w-[150px] md:max-w-[200px]">{row.serviceAMC}</td>
                    <td className="p-3 font-poppins font-normal">{row.price}</td>
                    <td className="p-3 font-poppins font-normal">{row.warrenty}</td>
                    <td className="p-3 font-poppins font-normal">{row.discount}</td>
                    <td className="p-3 flex justify-center gap-2 flex-wrap">
                      <div className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded">
                        <img src={PreviewIcon}  onClick={() => navigate2("/services/servicedetails", { state: row })} alt="preview" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                      </div>
                      <div className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded">
                        <img src={EditIcon} onClick={()=>navigate3("/services/editservice", { state:row } ) } alt="edit" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                      </div>
                      <div className="h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] flex items-center justify-center rounded">
                        <img src={Deleteicon} alt="delete" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Mobile Cards */}
          <div className="sm:hidden flex flex-col gap-3">
            {paginatedRows.map((row) => (
              <div key={row.id} className="bg-gray-100 p-3 rounded-lg shadow flex flex-col gap-2">
                <div className="flex justify-between"><span className="font-semibold">Sr. No.</span><span>{row.id}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Category</span><span>{row.category}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Service & AMC Plan</span><span>{row.serviceAMC}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Price</span><span>{row.price}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Warrenty</span><span>{row.warrenty}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Discount</span><span>{row.discount}</span></div>
                <div className="flex gap-2 mt-2 justify-center flex-wrap">
                  <div className="h-[32px] w-[32px] flex items-center justify-center rounded">
                    <img src={PreviewIcon} onClick={() => navigate2("/services/servicedetails", { state: row })} alt="preview" className="w-5 h-5 cursor-pointer" />
                  </div>
                  <div className="h-[32px] w-[32px] flex items-center justify-center rounded">
                    <img src={EditIcon} onClick={() => navigate3("/services/editservice",{ state:row } ) } alt="edit" className="w-5 h-5 cursor-pointer" />
                  </div>
                  <div className="h-[32px] w-[40px] flex items-center justify-center rounded">
                    <img src={Deleteicon} alt="delete" className="w-5 h-5 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 flex-wrap font-semibold text-gray-700">
            <span>
              Showing {Math.min((page - 1) * rowsPerPage + 1, filteredRows.length)} to {Math.min(page * rowsPerPage, filteredRows.length)} of {filteredRows.length} entries
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
    </div>
  );
};


export default Services;