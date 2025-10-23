import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";
import { GoEye } from "react-icons/go";
import searchIcon from "../../../assets/search.png";

const Order = () => {
  const navigate = useNavigate();
  const [orders] = useState([
    {
      id: 1,
      orderId: "OD54487",
      customerName: "Ajay Kumar",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Assigned",
    },
    {
      id: 2,
      orderId: "OD54488",
      customerName: "Ravi Singh",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Accepted",
    },
    {
      id: 3,
      orderId: "OD54489",
      customerName: "Priya Sharma",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "In-progress",
    },
    {
      id: 4,
      orderId: "OD54490",
      customerName: "Suresh Reddy",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "In-progress",
    },
    {
      id: 5,
      orderId: "OD54491",
      customerName: "Anita Verma",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "In-progress",
    },
    {
      id: 6,
      orderId: "OD54492",
      customerName: "Vikram Patil",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Delivered",
    },
    {
      id: 7,
      orderId: "OD54493",
      customerName: "Sunita Joshi",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Delivered",
    },
    {
      id: 8,
      orderId: "OD54494",
      customerName: "Rahul Mehta",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Delivered",
    },
    {
      id: 9,
      orderId: "OD54495",
      customerName: "Ajay Kumar",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Delivered",
    },
    {
      id: 10,
      orderId: "OD54496",
      customerName: "Ravi Singh",
      product: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "Delivered",
    },
  ]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const ordersFiltered = orders.filter((o) => {
    const matchesSearch =
      o.orderId.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase()) ||
      o.orderDate.toLowerCase().includes(search.toLowerCase()) ||
      o.status.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter ? o.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });

  const totalOrderPages = Math.max(
    1,
    Math.ceil(ordersFiltered.length / rowsPerPage)
  );
  const ordersPaginated = ordersFiltered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const statusBadgeClass = (status) =>
    status === "Assigned"
      ? "text-yellow-600"
      : status === "Accepted"
      ? "text-pink-500"
      : status === "In-progress"
      ? "text-blue-500"
      : "text-green-600";

  return (
    <div className="min-h-screen">
      <Header2 />
      <div className="bg-white rounded-lg">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center  p-2">
            {/* Left: show entries */}
            <div className="flex items-center gap-3">
              <span>Show</span>
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(+e.target.value)}
                className="p-2 border rounded-lg w-[80px] bg-[#F3F4F6]"
              >
                {[5, 10, 20, 50].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <span>Entries</span>
            </div>

            {/* Center: search */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[360px] max-w-full">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="pl-12 h-10 border rounded-full w-full bg-gray-100 border-gray-300 placeholder-gray-500 text-[16px] text-[#606060] font-poppins shadow-sm"
                />
              </div>
            </div>

            {/* Right: status select */}
            <div className="flex items-center gap-3">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setPage(1);
                }}
                className="p-2 border rounded-lg bg-[#F3F4F6]"
              >
                <option value="">Select Status</option>
                <option value="Assigned">Assigned</option>
                <option value="Accepted">Accepted</option>
                <option value="In-progress">In-progress</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border min-w-[700px]">
              <thead>
                <tr className="bg-[#F3F4F6] text-left">
                  {[
                    "Sr.No.",
                    "Order ID",
                    "Customer Name",
                    "Product Ordered",
                    "Order Date",
                    "Status",
                    "Action",
                  ].map((h) => (
                    <th key={h} className="p-3 font-medium text-[14px]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ordersPaginated.map((o, idx) => (
                  <tr key={o.id} className={"bg-white"}>
                    <td className="p-3">
                      {(page - 1) * rowsPerPage + idx + 1}
                    </td>
                    <td className="p-3">{o.orderId}</td>
                    <td className="p-3">{o.customerName}</td>
                    <td className="p-3">{o.product}</td>
                    <td className="p-3">{o.orderDate}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${statusBadgeClass(
                          o.status
                        )}`}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        className="text-[#0088FF]"
                        onClick={() =>
                          navigate(`/orders/view/${o.orderId}`, { state: o })
                        }
                      >
                        <GoEye className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
                {ordersPaginated.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      No orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2 text-gray-700 font-semibold">
            <span>
              Showing{" "}
              {ordersFiltered.length === 0 ? 0 : (page - 1) * rowsPerPage + 1}{" "}
              to {Math.min(page * rowsPerPage, ordersFiltered.length)} of{" "}
              {ordersFiltered.length} entries
            </span>
            <div className="flex flex-wrap gap-2 text-[#7EC1B1]">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 border border-[#7EC1B1] rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              {[...Array(totalOrderPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`p-2 border rounded-lg border-[#7EC1B1] ${
                    page === i + 1 ? "bg-[#7EC1B1] text-white" : ""
                  } w-[36px]`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalOrderPages}
                onClick={() => setPage((p) => Math.min(totalOrderPages, p + 1))}
                className="px-4 py-2 border border-[#7EC1B1] rounded-lg disabled:opacity-50"
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

export default Order;
