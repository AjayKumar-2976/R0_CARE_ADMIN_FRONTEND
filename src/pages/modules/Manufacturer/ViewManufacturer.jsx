import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";
import { GoEye } from "react-icons/go";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import searchIcon from "../../../assets/search.png";
import totalOrderImg from "../../../assets/Total_order.png";
import ongoingOrdersImg from "../../../assets/ongoing_orders.png";
import ordersRejectedImg from "../../../assets/orders_rejected.png";
import successRateImg from "../../../assets/Success_rate.png";
import basilCardOutline from "../../../assets/basil_card-outline.png";
import gstIcon from "../../../assets/heroicons-outline_receipt-tax.png";
import emailIcon from "../../../assets/line-md_email.png";
import bankIcon from "../../../assets/proicons_bank.png";

const ViewManufacturer = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [manufacturer, setManufacturer] = useState(null);
  const [active, setActive] = useState(true);
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
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("manufacturers") || "[]");
    const found =
      location.state || stored.find((s) => String(s.id) === String(id));
    if (found) {
      setManufacturer({
        name: "KENT PVT. LTD.",
        address: "4140 Parker Rd, Allentown, New Mexico 3134",
        phone: "+91 98765 43210",
        email: "example@kent.com",
        aadhaar: "1234 4567 8901",
        pan: "XXXXX1234X",
        gstin: "36479564585",
        bank: {
          name: "HDFC Bank",
          account: "32345678910",
          ifsc: "HDFC0001234",
          type: "Current",
        },
        totalOrders: 8478,
        ongoingOrders: 234,
        rejectedOrders: 34,
        successRate: "94%",
      });
      setActive(found.active ?? true);
    }
  }, [id, location.state]);

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const ordersFiltered = orders.filter(
    (o) =>
      o.orderId.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase()) ||
      o.orderDate.toLowerCase().includes(search.toLowerCase()) ||
      o.status.toLowerCase().includes(search.toLowerCase())
  );

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
    <div className="bg-gray-100 p-4 min-h-screen">
      <Header2 />
      <div className="bg-white p-6 rounded-lg mt-6">
        <div className="w-full flex items-center justify-between mb-4">
          <h2 className="text-4xl font-bold text-[#263138]">
            {manufacturer?.name}
          </h2>
          <div>
            <div className="text-xl font-medium text-[#263138]">
              Active Status
            </div>
            <div className="mt-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={active}
                  onChange={() => setActive((v) => !v)}
                />
                {/* Track */}
                <span
                  className={`block w-14 h-6 rounded-full transition-colors duration-200 ${
                    active ? "bg-[#3A953A]" : "bg-gray-300"
                  }`}
                />
                {/* Thumb */}
                <span
                  className={`absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 transform ${
                    active ? "translate-x-8" : "translate-x-0"
                  }`}
                  style={{ boxShadow: "1px 0px 2px rgba(0,0,0,0.25)" }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-sm text-gray-600">📍 Address</div>
            <div className="text-[#7EC1B1] mb-4">{manufacturer?.address}</div>
            <MapContainer
              center={[35.5007, -105.5007]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "360px", width: "100%", borderRadius: "8px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              <Marker position={[35.5007, -105.5007]} icon={markerIcon}>
                <Popup>
                  <div className="font-semibold">{manufacturer?.name}</div>
                  <div className="text-sm">{manufacturer?.address}</div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="bg-white p-6 rounded-lg" style={{ height: "560px" }}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src={bankIcon} alt="phone_icon" className="w-6 h-6" />
                <div>
                  <span className="text-xl text-[#263138] block">
                    Phone No.
                  </span>
                  <span className="text-xl text-[#7EC1B1]">
                    {manufacturer?.phone}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="email_icon" className="w-6 h-6" />
                <div>
                  <span className="text-xl text-[#263138] block">Email</span>
                  <span className="text-xl text-[#7EC1B1]">
                    {manufacturer?.email}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={basilCardOutline}
                  alt="aadhaar_icon"
                  className="w-6 h-6"
                />
                <div>
                  <span className="text-xl text-[#263138] block">
                    Aadhaar No
                  </span>
                  <span className="text-xl text-[#7EC1B1]">
                    {manufacturer?.aadhaar}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={basilCardOutline}
                  alt="pan_icon"
                  className="w-6 h-6"
                />
                <div>
                  <span className="text-xl text-[#263138] block">PAN No.</span>
                  <span className="text-xl text-[#7EC1B1]">
                    {manufacturer?.pan}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src={gstIcon} alt="gstin_icon" className="w-6 h-6" />
                <div>
                  <span className="text-xl text-[#263138] block">GSTIN</span>
                  <span className="text-xl text-[#7EC1B1]">
                    {manufacturer?.gstin}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <img src={bankIcon} alt="bank_icon" className="w-6 h-6" />
                  <span className="text-xl text-[#263138]">Bank Details</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-lg text-[#606060]">Bank Name:</span>
                  <span className="text-lg text-[#7EC1B1]">
                    {manufacturer?.bank?.name}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-lg text-[#606060]">Account No:</span>
                  <span className="text-lg text-[#7EC1B1]">
                    {manufacturer?.bank?.account}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-lg text-[#606060]">IFSC:</span>
                  <span className="text-lg text-[#7EC1B1]">
                    {manufacturer?.bank?.ifsc}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-lg text-[#606060]">Account Type</span>
                  <span className="text-lg text-[#7EC1B1]">
                    {manufacturer?.bank?.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {[
            ["Total Order Handled", manufacturer?.totalOrders, totalOrderImg],
            ["Ongoing Orders", manufacturer?.ongoingOrders, ongoingOrdersImg],
            [
              "Orders Rejected",
              manufacturer?.rejectedOrders,
              ordersRejectedImg,
            ],
            ["Success Rate", manufacturer?.successRate, successRateImg],
          ].map(([title, value, img]) => (
            <div
              key={title}
              className="bg-gray-100 p-6 rounded-xl flex items-center justify-between"
              style={{ width: 243, height: 132 }}
            >
              <div>
                <div
                  className=""
                  style={{
                    width: 131,
                    height: 48,
                    margin: "0 auto",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "1px",
                    color: "#606060",
                  }}
                >
                  {title}
                </div>
                <div className="text-2xl font-bold mt-2">{value}</div>
              </div>
              <img
                src={img}
                alt={title}
                className="w-12 h-12 ml-4 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg mt-6">
          <h3 className="text-2xl font-semibold mb-4">Assigned Orders</h3>
          <div className="flex items-center my-4 p-2">
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
              <div className="relative w-[240px] max-w-full">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 pointer-events-none"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="pl-12 h-10 border rounded-md w-[240px] bg-[#F5F5F5] border-[#263138] text-[16px] text-[#606060] font-poppins"
                />
              </div>
            </div>

            {/* Right: status select */}
            <div className="flex items-center gap-3">
              <select className="p-2 border rounded-lg bg-[#F3F4F6]">
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

export default ViewManufacturer;
