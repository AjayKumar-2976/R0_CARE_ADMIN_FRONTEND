
// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import logoImage from "../../../assets/user.png";
// import { FiPhone, FiMail, FiEdit } from "react-icons/fi";
// import Icon from "../../../assets/logo.png";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(logoImage);
//   const [formData, setFormData] = useState({
//     name: "Albert Flores",
//     contact: "+91 98765 43210",
//     email: "example@kent.com",
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

//   const fileInputRef = useRef(null);

//   const handleEdit = () => setIsEditing(true);
//   const handleSave = () => setIsEditing(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageClick = () => {
//     if (isEditing && fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setUser(URL.createObjectURL(file));
//   };

//   const handleChangePassword = () => setIsPasswordModalOpen(true);
//   const handleCloseModal = () => setIsPasswordModalOpen(false);

//   const handlePasswordChangeSuccess = () => {
//     setIsPasswordModalOpen(false);
//     setIsSuccessModalOpen(true);
//   };

//   const handleLoginAgain = () => {
//     setIsSuccessModalOpen(false);
//     navigate("/"); // Redirect to login page
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg px-8 py-6 mt-6 w-full mx-auto relative">
//       {!isEditing && (
//         <button
//           onClick={handleEdit}
//           className="absolute top-4 right-4 border border-[#7EC1B1] text-[#7EC1B1] px-4 py-2 rounded-md flex items-center gap-2 text-base hover:bg-[#7EC1B1] hover:text-white transition cursor-pointer whitespace-nowrap"
//         >
//           <FiEdit className="w-5 h-5" />
//           Edit Profile Info
//         </button>
//       )}

//       <div className="flex flex-col md:flex-row items-start gap-8">
//         {/* Profile Image */}
//         <div
//           className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer"
//           onClick={handleImageClick}
//         >
//           <img
//             src={user}
//             alt="Profile"
//             className={`w-40 h-40 rounded-full border-4 border-gray-300 object-cover ${
//               isEditing ? "hover:opacity-80 transition" : ""
//             }`}
//           />
//           {isEditing && <p className="text-sm text-gray-500 mt-1">Click to change</p>}
//           <input
//             type="file"
//             accept="image/*"
//             ref={fileInputRef}
//             onChange={handleImageChange}
//             className="hidden"
//           />
//         </div>

//         {/* Profile Details */}
//         <div className="flex-1 flex flex-col gap-4">
//           {isEditing ? (
//             <>
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-1">Contact</label>
//                 <input
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 text-lg"
//                 />
//               </div>

//               <div className="mt-6 flex justify-center">
//                 <button
//                   onClick={handleSave}
//                   className="bg-[#7EC1B1] text-white px-6 py-3 rounded-md text-lg hover:bg-[#66b0a0] transition cursor-pointer"
//                 >
//                   Save
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <h2 className="text-3xl font-bold text-gray-900">{formData.name}</h2>


//    <div className="flex flex-col mt-2">
//   <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1 text-lg">
//     <FiPhone className="text-[#7EC1B1] text-xl" />
//     Contact
//   </label>
//   <span className="text-blue-600 text-lg">{formData.contact}</span>
// </div>

// <div className="flex flex-col mt-4">
//   <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1 text-lg">
//     <FiMail className="text-[#7EC1B1] text-xl" />
//     Email
//   </label>
//   <span className="text-blue-600 text-lg">{formData.email}</span>
// </div>



//               <div className="mt-6 flex justify-center md:justify-center">
//                 <button
//                   onClick={handleChangePassword}
//                   className="bg-[#7EC1B1] text-white px-6 py-3 rounded-md text-lg hover:bg-[#66b0a0] transition cursor-pointer"
//                 >
//                   Change Password
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Change Password Modal */}
//       {isPasswordModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
//           <div className="bg-white rounded-lg shadow-lg p-14 w-[40rem] h-[40rem] pointer-events-auto flex flex-col justify-center">
//             <h2 className="text-4xl font-bold mb-2 text-center">Change Password</h2>
//             <p className="text-gray-500 text-center mb-6 text-md">
//               Please enter your new password
//             </p>

//             <div className="flex flex-col gap-4 px-8">
//               <div className="flex flex-col">
//                 <label className="text-gray-700 mb-1 text-lg">Old Password</label>
//                 <input
//                   type="password"
//                   name="oldPassword"
//                   placeholder="Old Password"
//                   value={formData.oldPassword}
//                   onChange={handleChange}
//                   autoComplete="current-password"
//                   className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-5 py-4 text-xl"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="text-gray-700 mb-1 text-lg">New Password</label>
//                 <input
//                   type="password"
//                   name="newPassword"
//                   placeholder="New Password"
//                   value={formData.newPassword}
//                   onChange={handleChange}
//                   autoComplete="new-password"
//                   className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-5 py-4 text-xl"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="text-gray-700 mb-1 text-lg">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   autoComplete="new-password"
//                   className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-5 py-4 text-xl"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-center mt-10">
//               <button
//                 onClick={handlePasswordChangeSuccess}
//                 className="bg-[#7EC1B1] text-white px-8 py-2 rounded-md hover:bg-[#66b0a0] transition text-xl"
//               >
//                 Change
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Password Success Modal */}
//      {isSuccessModalOpen && (
//   <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
//     <div className="bg-white rounded-xl shadow-lg w-[70vw] h-[70vh] flex flex-col items-center justify-center p-10">
//       <img src={Icon} alt="Success" className="w-72 h-32 mb-6" />
//       <h2 className="text-5xl font-bold mb-2 text-center">CONGRATS!</h2>
//       <p className="text-gray-600 text-xl mb-10 text-center">Password change successful</p>
//       <button
//         onClick={handleLoginAgain}
//         className="bg-[#7EC1B1] text-white px-8 py-4 rounded-md hover:bg-[#66b0a0] transition text-xl"
//       >
//         Login Again
//       </button>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };

// export default Profile;


import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../../assets/user.png";
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
  const handleCloseModal = () => setIsPasswordModalOpen(false);

  const handlePasswordChangeSuccess = () => {
    setIsPasswordModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleLoginAgain = () => {
    setIsSuccessModalOpen(false);
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="bg-white shadow-md rounded-lg px-4 sm:px-6 md:px-8 py-6 mt-6 w-full mx-auto relative">
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
            className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-300 object-cover ${
              isEditing ? "hover:opacity-80 transition" : ""
            }`}
          />
          {isEditing && (
            <p className="text-sm sm:text-base text-gray-500 mt-1">Click to change</p>
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
                <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">Email</label>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{formData.name}</h2>

              <div className="flex flex-col mt-2">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1 text-sm sm:text-lg">
                  <FiPhone className="text-[#7EC1B1] text-base sm:text-xl" />
                  Contact
                </label>
                <span className="text-blue-600 text-sm sm:text-lg">{formData.contact}</span>
              </div>

              <div className="flex flex-col mt-2 sm:mt-4">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1 text-sm sm:text-lg">
                  <FiMail className="text-[#7EC1B1] text-base sm:text-xl" />
                  Email
                </label>
                <span className="text-blue-600 text-sm sm:text-lg">{formData.email}</span>
              </div>

            <div className="mt-4  flex justify-center md:justify-center">
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

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-14 w-11/12 sm:w-[40rem] max-w-full sm:max-w-[40rem] h-auto sm:h-[40rem] pointer-events-auto flex flex-col justify-center overflow-y-auto">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Change Password</h2>
            <p className="text-gray-500 text-center mb-4 sm:mb-6 text-sm sm:text-md">
              Please enter your new password
            </p>

            <div className="flex flex-col gap-4 px-4 sm:px-8">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1 text-sm sm:text-lg">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 sm:px-5 sm:py-4 text-sm sm:text-xl"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-1 text-sm sm:text-lg">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 sm:px-5 sm:py-4 text-sm sm:text-xl"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-1 text-sm sm:text-lg">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 sm:px-5 sm:py-4 text-sm sm:text-xl"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6 sm:mt-10">
              <button
                onClick={handlePasswordChangeSuccess}
                className="bg-[#7EC1B1] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-[#66b0a0] transition text-sm sm:text-xl w-full sm:w-auto"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto">
          <div className="bg-white rounded-xl shadow-lg w-11/12 sm:w-[70vw] h-auto sm:h-[70vh] flex flex-col items-center justify-center p-6 sm:p-10 overflow-y-auto">
            <img src={Icon} alt="Success" className="w-48 sm:w-72 h-24 sm:h-32 mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-5xl font-bold mb-2 text-center">CONGRATS!</h2>
            <p className="text-gray-600 text-sm sm:text-xl mb-6 sm:mb-10 text-center">
              Password change successful
            </p>
            <button
              onClick={handleLoginAgain}
              className="bg-[#7EC1B1] text-white px-6 sm:px-8 py-2 sm:py-4 rounded-md hover:bg-[#66b0a0] transition text-sm sm:text-xl w-full sm:w-auto"
            >
              Login Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
