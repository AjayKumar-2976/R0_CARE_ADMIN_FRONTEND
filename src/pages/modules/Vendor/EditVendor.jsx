import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";

const EditVendor = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    address: "",
    password: "",
  });

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    navigate("/vendors");
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4 sm:p-6 flex flex-col">
      <Header2 />

      <div className="bg-white p-8 rounded-2xl shadow-md w-full h-full mt-4">
      
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Edit Vendor Details
        </h2>
        <hr className="border-gray-300 mb-6" />

       
        <form onSubmit={handleUpdate} className="flex flex-col gap-6 w-full">
    
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border "
              />
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Phone No.
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border "
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border "
              />
            </div>
          </div>

        
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border "
              />
            </div>
          </div>

          
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#7EC1B1] text-white font-medium px-20 py-2  hover:bg-[#65a89d] transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVendor;
