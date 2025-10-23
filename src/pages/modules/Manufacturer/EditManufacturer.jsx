import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";
import bankIcon from "../../../assets/proicons_bank.png";

const EditManufacturer = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    address: "",
    email: "",
    aadhaar: "",
    pan: "",
    gstin: "",
    bankName: "",
    bankAccount: "",
    bankIfsc: "",
    bankBranch: "",
    bankType: "",
  });

  useEffect(() => {
    if (location.state) {
      const s = location.state;
      setFormData({
        name: s.name || "",
        company: s.company || "",
        phone: s.phone || "",
        address: s.address || "",
        email: s.email || "",
        aadhaar: s.aadhaar || s.Aadhaar || "",
        pan: s.pan || "",
        gstin: s.gstin || "",
        bankName: s.bank?.name || "",
        bankAccount: s.bank?.account || "",
        bankIfsc: s.bank?.ifsc || "",
        bankBranch: s.bank?.branch || "",
        bankType: s.bank?.type || "",
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updated = {
      id,
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      address: formData.address,
      email: formData.email,
      aadhaar: formData.aadhaar,
      pan: formData.pan,
      gstin: formData.gstin,
      bank: {
        name: formData.bankName,
        account: formData.bankAccount,
        ifsc: formData.bankIfsc,
        branch: formData.bankBranch,
        type: formData.bankType,
      },
      active: true,
    };

    // TODO: persist via API
    try {
      const existing = JSON.parse(localStorage.getItem("manufacturers") || "[]");
      const idx = existing.findIndex((m) => String(m.id) === String(id));
      if (idx >= 0) existing[idx] = updated;
      else existing.push(updated);
      localStorage.setItem("manufacturers", JSON.stringify(existing));
    } catch (e) {
      console.warn("Could not persist updated manufacturer", e);
    }

    navigate(`/manufacturer/viewmanufacturer/${id}`, { state: updated });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header2 />

      <div className="bg-white p-6 shadow-lg flex flex-col gap-8 w-full h-full">
        <form onSubmit={handleUpdate} className="flex flex-col gap-8 w-full">
          {/* Top Row: Manufacturer Name & Phone */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Manufacturer Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Manufacturer Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              />
            </div>
          </div>

          {/* Second Row: Email & Address */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
                className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
              />
            </div>
          </div>

          {/* Aadhaar & PAN */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Aadhaar No.</label>
              <input type="text" name="aadhaar" placeholder="Enter Aadhaar No" value={formData.aadhaar} onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5]" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">PAN No.</label>
              <input type="text" name="pan" placeholder="Enter PAN No." value={formData.pan} onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5]" />
            </div>
          </div>

          {/* GSTIN */}
          <div className="flex flex-col gap-6 w-1/2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">GSTIN</label>
            <input type="text" name="gstin" placeholder="Enter GSTIN" value={formData.gstin} onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5] w-full" />
          </div>

          {/* Bank Details heading */}
          <div className="mt-4">
            <h2 className="text-[#2F8868] font-semibold flex items-center gap-2">
              <span className="text-2xl">
                <img src={bankIcon} alt="bank" />
              </span>
              Bank Details
            </h2>
          </div>

          {/* Bank fields */}
          <div className="flex flex-col md:flex-row gap-6 w-full mt-2">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Select Bank</label>
              <select value={formData.bankName} name="bankName" onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5]">
                <option value="">Select Bank</option>
                <option value="HFFC Bank">HFFC Bank</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="SBI">SBI</option>
                <option value="ICICI">ICICI</option>
                <option value="Axis Bank">Axis Bank</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Account No</label>
              <input type="text" name="bankAccount" placeholder="Enter Account No" value={formData.bankAccount} onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5]" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full mt-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">IFSC</label>
              <input type="text" name="bankIfsc" placeholder="Enter IFSC Code" value={formData.bankIfsc} onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5]" />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <label className="font-poppins font-medium text-gray-700 text-[16px]">Select Account Type</label>
              <select value={formData.bankType} name="bankType" onChange={handleChange} className="p-3 border border-[#606060] bg-[#F5F5F5]">
                <option value="">Select</option>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
              </select>
            </div>
          </div>

          {/* Update Button */}
          <div className="flex justify-center w-full mt-6">
            <button type="submit" className="bg-[#7EC1B1] text-white font-poppins font-semibold px-6 py-3 rounded-lg hover:bg-[#65a89d] transition w-full md:w-1/8">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditManufacturer;
