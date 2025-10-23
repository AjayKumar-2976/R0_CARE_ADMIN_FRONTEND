import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";
import bankIcon from "../../../assets/proicons_bank.png";

const AddManufacturer = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");
  const [gstin, setGstin] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankIfsc, setBankIfsc] = useState("");
  const [bankBranch] = useState("");
  const navigate = useNavigate();
  const [bankType, setBankType] = useState("");

  const handleAdd = () => {
    // Create a minimal manufacturer object and navigate to view
    const newManufacturer = {
      id: Date.now(),
      name: fullName,
      company,
      phone,
      address,
      email,
      aadhaar,
      pan,
      gstin,
      bank: {
        name: bankName,
        account: bankAccount,
        ifsc: bankIfsc,
        branch: bankBranch,
        type: bankType,
      },
      active: true,
    };

    // Persist to localStorage for demo purposes (replace with API call in production)
    try {
      const existing = JSON.parse(
        localStorage.getItem("manufacturers") || "[]"
      );
      existing.push(newManufacturer);
      localStorage.setItem("manufacturers", JSON.stringify(existing));
    } catch (e) {
      console.warn("Could not persist manufacturer", e);
    }

    navigate(`/manufacturer/viewmanufacturer/${newManufacturer.id}`, {
      state: newManufacturer,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header2 />

      {/* Form */}
      <div className="bg-white p-6 shadow-lg flex flex-col gap-8 w-full h-full">
        {/* Top Row: Manufacturer Name & Phone */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Manufacturer Name Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Manufacturer Name
            </label>
            <input
              type="text"
              placeholder="Enter Manufacturer Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>

          {/* Phone Field (moved to top row) */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>
        </div>

        {/* Second Row: Email & Address */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Email Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>

          {/* Address Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>
        </div>

        {/* Aadhaar & PAN side-by-side */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Aadhaar No.
            </label>
            <input
              type="text"
              placeholder="Enter Aadhaar No"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              PAN No.
            </label>
            <input
              type="text"
              placeholder="Enter PAN No."
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5]"
            />
          </div>
        </div>

        {/* GSTIN */}
        <div className="flex flex-col gap-6 w-1/2">
          <label className="font-poppins font-medium text-gray-700 text-[16px]">
            GSTIN
          </label>
          <input
            type="text"
            placeholder="Enter GSTIN"
            value={gstin}
            onChange={(e) => setGstin(e.target.value)}
            className="p-3 border border-[#606060] bg-[#F5F5F5] w-full"
          />
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

        {/* Bank fields: select bank + account no */}
        <div className="flex flex-col md:flex-row gap-6 w-full mt-2">
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Select Bank
            </label>
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5]"
            >
              <option value="" disabled>
                Select Bank
              </option>
              <option value="HFFC Bank">HFFC Bank</option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="SBI">SBI</option>
              <option value="ICICI">ICICI</option>
              <option value="Axis Bank">Axis Bank</option>
            </select>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Account No
            </label>
            <input
              type="text"
              placeholder="Enter Account No"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5]"
            />
          </div>
        </div>

        {/* IFSC + Account Type */}
        <div className="flex flex-col md:flex-row gap-6 w-full mt-4">
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              IFSC
            </label>
            <input
              type="text"
              placeholder="Enter IFSC Code"
              value={bankIfsc}
              onChange={(e) => setBankIfsc(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Select Account Type
            </label>
            <select
              value={bankType}
              onChange={(e) => setBankType(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5]"
            >
              <option value="">Select</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-center w-full mt-6">
          <button
            onClick={handleAdd}
            className="bg-[#7EC1B1] text-white font-poppins font-semibold px-6 py-3 rounded-lg hover:bg-[#65a89d] transition w-full md:w-1/8"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddManufacturer;
