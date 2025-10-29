

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../../../components/superAdmin/header/Header2";
import logoImage from "../../../assets/51a2667788ebcdbeeab9f107b69a80d1053e1aa1.jpg";
import { FiPhone, FiMail, FiEdit } from "react-icons/fi";
import Icon from "../../../assets/logo.png";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(logoImage);
  const [formData, setFormData] = useState({
    name: "Albert Flores",
    contact: "+91 98765 43210",
    email: "example@kent.com",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setUser(URL.createObjectURL(file));
  };

  const handleChangePassword = () => setIsPasswordModalOpen(true);
  const handlePasswordChangeSuccess = () => {
    setIsPasswordModalOpen(false);
    setIsSuccessModalOpen(true);
  };
  const handleLoginAgain = () => {
    setIsSuccessModalOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* ✅ Added Header2 Above */}
      <div className="mb-6">
        <Header2 />
      </div>

      {/* ✅ Wrapper */}
      <div className="w-full">
        <div className="bg-white shadow-md rounded-lg px-4 sm:px-6 md:px-8 py-6 mt-2 w-full mx-auto relative">

          {!isEditing && (
            <button
              onClick={handleEdit}
              className="absolute top-4 right-4 border border-[#7EC1B1] text-[#7EC1B1] px-3 sm:px-4 py-2 rounded-md flex items-center gap-2 text-sm sm:text-base hover:bg-[#7EC1B1] hover:text-white transition cursor-pointer whitespace-nowrap"
            >
              <FiEdit className="w-4 h-4 sm:w-5 sm:h-5" />
              Edit Profile Info
            </button>
          )}

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            
            {/* Profile Image */}
            <div
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={user}
                alt="Profile"
//                 className={`w-[160px] h-[160px] rounded-full border border-gray-300 object-fit ${
//   isEditing ? "hover:opacity-80 transition" : ""
// }`}

className={`w-[90px] h-[90px] sm:w-[160px] sm:h-[160px] rounded-full border border-gray-300 object-fit ${
  isEditing ? "hover:opacity-80 transition" : ""
}`}

              />
              {isEditing && (
                <p className="text-sm sm:text-base text-gray-500 mt-1">
                  Click to change
                </p>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Profile Details */}
            <div className="flex-1 flex flex-col gap-4 w-full">
              {isEditing ? (
                <>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg"
                    />
                  </div>

                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <button
                      onClick={handleSave}
                      className="bg-[#7EC1B1] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg hover:bg-[#66b0a0] transition cursor-pointer w-full sm:w-auto"
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {formData.name}
                  </h2>

                  <div className="flex flex-col mt-2">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1 text-sm sm:text-lg">
                      <FiPhone className="text-[#7EC1B1] text-base sm:text-xl" />
                      Contact
                    </label>
                    <span className="text-blue-600 text-sm sm:text-lg">
                      {formData.contact}
                    </span>
                  </div>

                  <div className="flex flex-col mt-2 sm:mt-4">
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1 text-sm sm:text-lg">
                      <FiMail className="text-[#7EC1B1] text-base sm:text-xl" />
                      Email
                    </label>
                    <span className="text-blue-600 text-sm sm:text-lg">
                      {formData.email}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-center md:justify-center">
                    <button
                      onClick={handleChangePassword}
                      className="bg-[#7EC1B1] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg hover:bg-[#66b0a0] transition cursor-pointer w-full sm:w-auto"
                    >
                      Change Password
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

        {/* Password Modal */}
{isPasswordModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
<div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 w-11/12 sm:w-[42rem] h-auto min-h-[60vh] max-h-[92vh] flex flex-col justify-start overflow-y-auto">

      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
        Change Password
      </h2>

      <p className="text-center text-gray-600 mb-6">
        Please enter your new password
      </p>

      <div className="flex flex-col gap-6 px-2 sm:px-8">
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter old password"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Confirm Password</label>
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-3"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handlePasswordChangeSuccess}
          className="bg-[#7EC1B1] text-white px-10 py-3 rounded-md hover:bg-[#66b0a0] transition text-lg"
        >
          Change
        </button>
      </div>
    </div>
  </div>
)}


          {/* Success Modal */}
          {/* {isSuccessModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
              <div className="bg-white rounded-xl shadow-lg w-11/12 sm:w-[70vw] h-auto sm:h-[70vh] flex flex-col items-center justify-center p-6 sm:p-10 overflow-y-auto">
                <img
                  src={Icon}
                  alt="Success"
                  className="w-48 sm:w-72 h-24 sm:h-32 mb-6"
                />
                <h2 className="text-3xl sm:text-5xl font-bold text-center">
                  CONGRATS!
                </h2>
                <p className="text-gray-600 text-sm sm:text-xl mb-10 text-center">
                  Password change successful
                </p>
                <button
                  onClick={handleLoginAgain}
                  className="bg-[#7EC1B1] text-white px-8 py-3 rounded-md hover:bg-[#66b0a0] transition text-xl"
                >
                  Login Again
                </button>
              </div>
            </div>
          )} */}

          {isSuccessModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div className="bg-white rounded-xl shadow-lg w-11/12 sm:w-[48rem] min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center p-10 sm:p-14 text-center pointer-events-auto">
      
      <img
        src={Icon}
        alt="Success"
        className="w-40 sm:w-60 h-32 sm:h-44 mb-10 object-contain "
      />

      <h2 className="text-4xl sm:text-6xl font-extrabold mb-6">
        CONGRATS!
      </h2>
      
      <p className="text-gray-600 text-base sm:text-2xl mb-14 leading-relaxed">
        Password change successful
      </p>

      <button
        onClick={handleLoginAgain}
        className="bg-[#7EC1B1] text-white px-16 py-4 rounded-lg hover:bg-[#66b0a0] transition text-xl sm:text-2xl font-semibold"
      >
        Login Again
      </button>
    </div>
  </div>
)}


        </div>
      </div>
    </>
  );
};

export default Profile;
