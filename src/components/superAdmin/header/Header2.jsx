
// // Header2.js
// import { Link, useLocation } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";

// const Header2 = () => {
//   const location = useLocation();

//   // Define your route labels
//   const routeLabels = {
//     "/dashboard": "Dashboard",

//     // Services & Products
//     "/services": "Services",
//     "/addservice": "Add Services",
//     "/product": "Products",
//     "/product/add-product": "Add Product",

//     // Users
//     "/customers": "Customers",
//     "/technician": "Technicians",
//     "/partner": "Partners",

//     // Manufacturer
//     "/manufacturer": "Manufacturer",
//     "/manufacturer/addManufacturer": "Add Manufacturer",
//     "/manufacturer/addmanufacturer": "Add Manufacturer",
//     "/manufacturer/editManufacturer/:id": "Edit Manufacturer",
//     "/manufacturer/editmanufacturer": "Edit Manufacturer",
//     "/manufacturer/editmanufacturer/:id": "Edit Manufacturer",
//     "/manufacturer/viewmanufacturer": "Manufacturer Details",
//     "/manufacturer/viewmanufacturer/:id": "Manufacturer Details",

//     // Vendors
//     "/vendors": "Vendor",
//     "/vendors/addvendor": "Add Vendor",
//     "/vendors/editvendor/:id": "Edit Vendor",

//     // Technicians Activity
//     "/pendingServices": "Pending Services",
//     "/technicianActivity": "Technician Activity",
//     "/technicianMonitoring": "Technician Monitor",

//     // Partners Activity
//     "/service-list": "Service List",
//     "/client-list": "Existing Client List",
//     "/payout-list": "Partner Payout List",
//   };

//   // Helper to match dynamic routes
//   const getLabel = (path) => {
//     // First try exact match
//     if (routeLabels[path]) return routeLabels[path];

//     // Check for dynamic routes (like /editvendor/:id)
//     for (const route in routeLabels) {
//       if (route.includes(":")) {
//         const regex = new RegExp("^" + route.replace(/:\w+/g, "[^/]+") + "$");
//         if (regex.test(path)) {
//           return routeLabels[route];
//         }
//       }
//     }

//     // Fallback: last part of the path
//     return path.split("/").pop();
//   };

//   const pathParts = location.pathname.split("/").filter(Boolean);
//   const rawBreadcrumbs = pathParts.map((part, index) => {
//     const path = "/" + pathParts.slice(0, index + 1).join("/");
//     return { path, label: getLabel(path) };
//   });

//   const seen = new Set();
//   const breadcrumbs = [];
//   for (const crumb of rawBreadcrumbs) {
//     if (!crumb.label) continue;
//     const label = String(crumb.label).trim();
//     if (seen.has(label.toLowerCase())) continue;
//     seen.add(label.toLowerCase());
//     breadcrumbs.push({ ...crumb, label });
//   }

//   // Default heading is last breadcrumb label
//   let heading = breadcrumbs.length
//     ? breadcrumbs[breadcrumbs.length - 1].label
//     : "Page";

//   let displayBreadcrumbs = breadcrumbs;
//   if (
//     location.pathname === "/manufacturer" ||
//     location.pathname === "/manufacturer/"
//   ) {
//     displayBreadcrumbs = [{ path: "/manufacturer", label: "Manufacturer" }];
//     heading = "Manufacturer List";
//   }

//   return (
//     <div className="w-full flex flex-col pt-2 pb-3 border-b border-gray-200">
//       {/* Breadcrumb row */}
//       <div className="flex items-center space-x-2">
//         <MdDashboard className="w-6 h-6 text-gray-600 flex-shrink-0" />

//         <span className="flex items-center">
//           <Link to="/dashboard" className="sr-only">
//             Dashboard
//           </Link>
//           <span className="mx-2 text-gray-400">&gt;</span>
//         </span>

//         {displayBreadcrumbs.map(
//           (crumb, idx) =>
//             crumb.label &&
//             crumb.label.toLowerCase() !== "dashboard" &&
//             (idx < displayBreadcrumbs.length - 1 ? (
//               <span key={crumb.path} className="flex items-center">
//                 <Link to={crumb.path} className="font-medium hover:underline">
//                   {crumb.label}
//                 </Link>
//                 <span className="mx-2 text-gray-400">&gt;</span>
//               </span>
//             ) : (
//               <span key={crumb.path} className="text-[#0088FF] font-medium">
//                 {crumb.label}
//               </span>
//             ))
//         )}
//       </div>

//       {/* Heading */}
//       <h2 className="mt-2 text-[20px] font-600 font-semibold text-[black]">
//         {heading}
//       </h2>
//     </div>
//   );
// };

// export default Header2;


import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Header2 = () => {
  const location = useLocation();

  // Define your route labels
  const routeLabels = {
    "/dashboard": "Dashboard",
    "/services": "Services",
    "/addservice": "Add Services",
    "/product": "Products",
    "/product/add-product": "Add Product",

    "/customers": "Customers",
    "/technician": "Technicians",
    "/partner": "Partners",

    "/manufacturer": "Manufacturer",
    "/manufacturer/addManufacturer": "Add Manufacturer",
    "/manufacturer/addmanufacturer": "Add Manufacturer",
    "/manufacturer/editManufacturer/:id": "Edit Manufacturer",
    "/manufacturer/editmanufacturer": "Edit Manufacturer",
    "/manufacturer/editmanufacturer/:id": "Edit Manufacturer",
    "/manufacturer/viewmanufacturer": "Manufacturer Details",
    "/manufacturer/viewmanufacturer/:id": "Manufacturer Details",

    "/vendors": "Vendor",
    "/vendors/addvendor": "Add Vendor",
    "/vendors/editvendor/:id": "Edit Vendor",

    "/pendingServices": "Pending Services",
    "/technicianActivity": "Technician Activity",
    "/technicianMonitoring": "Technician Monitor",

    "/service-list": "Service List",
    "/client-list": "Existing Client List",
    "/payout-list": "Partner Payout List",

    // 👇 Add route for your Messages
    "/messages": "Message",
    "/messages/:id": "Message",
  };

  // Helper to match dynamic routes
  const getLabel = (path) => {
    if (routeLabels[path]) return routeLabels[path];

    for (const route in routeLabels) {
      if (route.includes(":")) {
        const regex = new RegExp("^" + route.replace(/:\w+/g, "[^/]+") + "$");
        if (regex.test(path)) {
          return routeLabels[route];
        }
      }
    }

    // Fallback: last part of the path
    return path.split("/").pop();
  };

  const pathParts = location.pathname.split("/").filter(Boolean);

  const rawBreadcrumbs = pathParts.map((part, index) => {
    const path = "/" + pathParts.slice(0, index + 1).join("/");
    let label = getLabel(path);

    // ✨ Convert breadcrumb label to UPPERCASE
    if (label) {
      label = label.toString().toUpperCase();
    }

    return { path, label };
  });

  const seen = new Set();
  const breadcrumbs = [];

  for (const crumb of rawBreadcrumbs) {
    if (!crumb.label) continue;

    const label = crumb.label.trim();
    // ✅ Skip breadcrumbs that are just numbers (ID part)
    if (/^\d+$/.test(label)) continue;

    if (seen.has(label.toLowerCase())) continue;
    seen.add(label.toLowerCase());
    breadcrumbs.push({ ...crumb, label });
  }

  // Default heading is last breadcrumb label
  let heading = breadcrumbs.length ? breadcrumbs[breadcrumbs.length - 1].label : "PAGE";

  // Manufacturer special case
  let displayBreadcrumbs = breadcrumbs;
  if (location.pathname === "/manufacturer" || location.pathname === "/manufacturer/") {
    displayBreadcrumbs = [{ path: "/manufacturer", label: "MANUFACTURER" }];
    heading = "MANUFACTURER LIST";
  }

  return (
    <div className="w-full flex flex-col pt-2 pb-3 border-b border-gray-200">
      {/* Breadcrumb row */}
      <div className="flex items-center space-x-2">
        <MdDashboard className="w-6 h-6 text-gray-600 flex-shrink-0" />
        <span className="flex items-center">
          <Link to="/dashboard" className="sr-only">
            Dashboard
          </Link>
          <span className="mx-2 text-gray-400">&gt;</span>
        </span>

        {displayBreadcrumbs.map(
          (crumb, idx) =>
            crumb.label &&
            crumb.label.toLowerCase() !== "dashboard" &&
            (idx < displayBreadcrumbs.length - 1 ? (
              <span key={crumb.path} className="flex items-center">
                <Link to={crumb.path} className="font-medium hover:underline">
                  {crumb.label}
                </Link>
                <span className="mx-2 text-gray-400">&gt;</span>
              </span>
            ) : (
              <span key={crumb.path} className="text-[#0088FF] font-medium">
                {crumb.label}
              </span>
            ))
        )}
      </div>

      {/* Heading */}
      <h2 className="mt-2 text-[20px] font-600 font-semibold text-[black]">
        {heading}
      </h2>
    </div>
  );
};

export default Header2;
