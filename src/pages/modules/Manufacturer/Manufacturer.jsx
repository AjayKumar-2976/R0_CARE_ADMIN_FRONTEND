import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Header2 from "../../../components/superAdmin/header/Header2";
import searchIcon from "../../../assets/search.png";

const Manufacturer = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "KENT PVT LTD",
      phone: "9876543210",
      email: "example@mail.com",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
      id: 2,
      name: "Aquaguard",
      phone: "9876543210",
      email: "example@mail.com",
      address: "218 Thornridge Cir. Syracuse, 35624",
    },
    {
      id: 3,
      name: "Native",
      phone: "9876543210",
      email: "example@mail.com",
      address: "275 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      id: 4,
      name: "LG",
      phone: "9876543210",
      email: "example@mail.com",
      address: "271 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      id: 5,
      name: "Havells",
      phone: "9876543210",
      email: "example@mail.com",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
    },
    {
      id: 6,
      name: "Lypure",
      phone: "9876543210",
      email: "example@mail.com",
      address: "218 Thornridge Cir. Syracuse, 35624",
    },
    {
      id: 7,
      name: "Pureit",
      phone: "9876543210",
      email: "example@mail.com",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
      id: 8,
      name: "Aqua Fresh",
      phone: "9876543210",
      email: "example@mail.com",
      address: "275 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      id: 9,
      name: "AO Smith",
      phone: "9876543210",
      email: "example@mail.com",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
    },
    {
      id: 10,
      name: "Blue Star",
      phone: "9876543210",
      email: "example@mail.com",
      address: "218 Thornridge Cir. Syracuse, 35624",
    },
  ]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("manufacturers") || "[]");
      if (Array.isArray(stored) && stored.length) {
        setRows((prev) => {
          const map = new Map(prev.map((r) => [r.id, { ...r }]));
          stored.forEach((s) => {
            map.set(s.id, { ...(map.get(s.id) || {}), ...s });
          });
          return Array.from(map.values());
        });
      }
    } catch (e) {
      console.warn("Failed to load stored manufacturers", e);
    }
  }, []);

  const handleAdd = () => navigate("/manufacturer/addmanufacturer");

  const handleEdit = (row) => {
    navigate(`/manufacturer/editmanufacturer/${row.id}`, { state: row });
  };

  const handleView = (row) => {
    navigate(`/manufacturer/viewmanufacturer/${row.id}`, { state: row });
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
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
    <div
      className="p-4 h-full overflow-y-auto flex flex-col gap-2"
    >
      <Header2 />

{/* Top Controls */}
<div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-4 gap-2 md:gap-4">

  {/* Left Controls */}
  <div className="flex items-center gap-2 flex-wrap">
    <span>Show</span>
    <select
      value={rowsPerPage}
      onChange={handleRowsPerPage}
      className="bg-gray-100 p-2 border rounded w-[60px] md:w-[80px] text-sm"
    >
      {[5, 10, 25].map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
    <span>Entries</span>
  </div>

  {/* Center: Search */}
  <div className="flex-1 flex justify-center w-full md:w-auto mb-2 md:mb-0">

    <div className="relative w-full max-w-[320px]">
      <img
        src={searchIcon}
        alt="Search"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-12 h-10 border rounded-md w-full bg-[#F5F5F5] border-[#263138] text-[14px] md:text-[16px] text-[#606060] font-poppins"
      />
    </div>
  </div>

  {/* Right: Add Manufacturer Button */}
  <div className="w-full md:w-auto flex justify-end">
    <button
      onClick={handleAdd}
      className="bg-[#7EC1B1] w-full md:w-[200px] text-white p-2 rounded-lg hover:bg-[#65a89d] transition"
    >
      Add Manufacturer
    </button>
  </div>
</div>


      {/* Table */}
      <div className="bg-white p-4 w-full rounded-lg shadow overflow-x-auto">
        <table className="table-auto w-full border border-gray-400 min-w-[600px] sm:min-w-[700px]">
          <thead>
            <tr className="bg-[#F3F4F6] text-center text-base sm:text-xl">
              <th className="h-[60px] font-poppins font-medium text-[14px] sm:text-[18px] text-black">
                Sr.No.
              </th>
              <th className="p-3 font-poppins font-medium text-[14px] sm:text-[18px] text-black">
                Manufacturer Name
              </th>
              <th className="p-3 font-poppins font-medium text-[14px] sm:text-[18px] text-black">
                Phone No.
              </th>
              <th className="p-3 font-poppins font-medium text-[14px] sm:text-[18px] text-black hidden sm:table-cell">
                Email
              </th>
              <th className="p-3 font-poppins font-medium text-[14px] sm:text-[18px] text-black hidden lg:table-cell">
                Address
              </th>
              <th className="p-3 font-poppins font-medium text-[14px] sm:text-[18px] text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {paginatedRows.map((row) => (
              <tr key={row.id} className="text-black font-poppins text-[14px] sm:text-[16px]">
                <td className="p-3">{row.id}</td>
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.phone}</td>
                <td className="p-3 hidden sm:table-cell">{row.email}</td>
                <td className="p-3 hidden lg:table-cell">{row.address}</td>
                <td className="p-3 flex gap-2 justify-center flex-wrap">
                  <div
                    className="flex items-center justify-center cursor-pointer"
                    onClick={() => handleView(row)}
                    title="View"
                  >
                    <div style={{ width: 26, height: 20 }}>
                      <GoEye className="text-[#0088FF] w-full h-full" />
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center rounded cursor-pointer"
                    onClick={() => handleEdit(row)}
                  >
                    <div style={{ width: 26, height: 20 }}>
                      <FaRegEdit className="text-[#0088FF] w-full h-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded cursor-pointer">
                    <div style={{ width: 26, height: 20 }}>
                      <RiDeleteBinLine className="text-[#FF383C] w-full h-full" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2 flex-wrap font-semibold text-gray-700 text-sm">
          <span className="whitespace-nowrap">
            {filteredRows.length === 0 ? (
              "Showing 0 to 0 of 0 entries"
            ) : (
              <>
                Showing{" "}
                {Math.min((page - 1) * rowsPerPage + 1, filteredRows.length)} to{" "}
                {Math.min(page * rowsPerPage, filteredRows.length)} of{" "}
                {filteredRows.length} entries
              </>
            )}
          </span>
          <div className="flex flex-wrap gap-2 text-[#7EC1B1] justify-center bg-white overflow-x-auto">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 border border-[#7EC1B1] rounded-lg text-sm"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`p-2 border rounded-lg border-[#7EC1B1] ${
                  page === idx + 1 ? "bg-[#7EC1B1] text-white" : ""
                } w-[36px] text-sm`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 border border-[#7EC1B1] rounded-lg text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
