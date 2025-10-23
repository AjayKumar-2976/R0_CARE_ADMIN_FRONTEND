import React from "react";
import RevenueSummaryGraph from "./RevenueSummaryGraph";
import ManufacturerStatus from "./ManufacturerStatus";
import { Pie } from "react-chartjs-2";
import Header2 from "../../../components/superAdmin/header/Header2";
import manufIcon from "../../../assets/dashboard_total manufacture.png";
import vendorsIcon from "../../../assets/dashboard_total vendors.png";
import serviceEngIcon from "../../../assets/dashboard_total service Engineering.png";
import customerIcon from "../../../assets/Customer.png";
import ordersIcon from "../../../assets/Orders.png";
import trendingUp from "../../../assets/Trending Up.png";
import trendingDown from "../../../assets/Trending Down.png";

// GrowthIcon removed — using trending image assets instead

// ServiceBookingGraph moved to its own file and renamed to RevenueSummaryGraph.
// We import it from './ServiceBookingGraph' which exports default RevenueSummaryGraph.

// ManufacturerStatus moved into its own file `ManufacturerStatus.jsx` and will be imported where needed.

// SalesRevenueChart removed per request

// SalesAnalyticsChart removed per request

// TechnicianPerformanceChart and TrendChart components removed per request

const Dashboard = () => {
  const statCards = [
    {
      title: "Total Manufacturers",
      value: "3590",
      icon: <img src={manufIcon} alt="manufacturers" className="w-10 h-10" />,
      bgColor: "bg-[#7373E5]/25",
      trend: "up",
      percentage: "2.4%",
    },
    {
      title: "Total Vendors",
      value: "3590",
      icon: <img src={vendorsIcon} alt="vendors" className="w-10 h-10" />,
      bgColor: "bg-[#FEC53D]/25",
      trend: "down",
      percentage: "3.5%",
    },
    {
      title: "Total Service Engineers",
      value: "58,934",
      icon: (
        <img
          src={serviceEngIcon}
          alt="service engineers"
          className="w-10 h-10"
        />
      ),
      bgColor: "bg-[#FF9066]/25",
      trend: "up",
      percentage: "2.6%",
    },
    {
      title: "Total Customers",
      value: "94,89,948",
      icon: <img src={customerIcon} alt="customers" className="w-10 h-10" />,
      bgColor: "bg-[#4AD991]/25",
      trend: "up",
      percentage: "9.7%",
    },
    {
      title: "Total Orders",
      value: "1,23,456",
      icon: <img src={ordersIcon} alt="orders" className="w-10 h-10" />,
      bgColor: "bg-[#4AD99140]",
      trend: "down",
      percentage: "3.5%",
    },
  ];

  const overviewCards = [
    {
      title: "Vendors",
      data: { active: 1890, inactive: 1700 },
      colors: ["#CB30E0", "#FF2D55"],
    },
    {
      title: "Service Engineers",
      data: { active: 29467, inactive: 29467 },
      colors: ["#FF8D28", "#FFCC00"],
    },
    {
      title: "Customers",
      data: { active: 918900, inactive: 300948 },
      colors: ["#6155F5", "#00C3D0"],
    },
  ];

  return (
    <div className="flex flex-col bg-white p-4 sm:p-6 gap-y-6 sm:gap-y-8 -h-screen font-sans">
      <div className="flex flex-col">
        {/* Header */}
        <Header2 />
      </div>

      {/* Stat Cards - horizontal scroll showing up to 5 cards in a row */}
      <div className="w-full">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[22%] min-w-[220px] flex flex-col justify-between p-5 bg-gray-100 rounded-2xl font-semibold shadow-lg min-h-[160px]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base text-gray-600">{card.title}</h3>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-800">
                    {card.value}
                  </p>
                </div>
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl p-0 overflow-hidden ${card.bgColor}`}
                >
                  {React.isValidElement(card.icon)
                    ? React.cloneElement(card.icon, {
                        className:
                          card.title === "Total Customers" ||
                          card.title === "Total Orders"
                            ? "w-full h-full object-contain"
                            : "w-full h-full object-cover",
                      })
                    : card.icon}
                </div>
              </div>

              <div className="flex items-center mt-4">
                <img
                  src={card.trend === "up" ? trendingUp : trendingDown}
                  alt={card.trend}
                  className="w-4 h-4"
                />
                <p
                  className={`font-bold ml-2 ${
                    card.trend === "up" ? "text-[#7EC1B1]" : "text-[#FF6B6B]"
                  }`}
                >
                  {card.percentage}
                </p>
                <p className="text-gray-500 font-normal text-sm ml-2">
                  from past month
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Booking & Customer Satisfaction 70/30 */}

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-[70%]">
          <RevenueSummaryGraph />
        </div>
        <div className="w-full lg:w-[30%] ">
          <ManufacturerStatus />
        </div>
      </div>

      {/* Revenue & Sales Analytics removed per request */}

      {/* User stats cards removed (caused runtime error) */}

      {/* Overview Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {overviewCards.map((card, index) => {
          const { active, inactive } = card.data;
          const data = {
            labels: ["Active", "Inactive"],
            datasets: [
              {
                data: [active, inactive],
                backgroundColor: card.colors,
                borderWidth: 0,
              },
            ],
          };

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-start bg-[#F5F5F5] p-6 rounded-[16px]"
              style={{
                width: 332,
                height: 350,
                position: "relative",
                padding: 24,
              }}
            >
              <h1
                className="mb-4"
                style={{
                  width: 284,
                  height: 23.02,
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#263138",
                }}
              >
                {card.title}
              </h1>

              {/* absolute-positioned chart (Figma: left 94px, top 83.01px) */}
              <div
                style={{
                  position: "absolute",
                  left: 94,
                  top: 83.01,
                  width: 144,
                  height: 144,
                  filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.25))",
                }}
              >
                <div style={{ width: "100%", height: "100%" }}>
                  <Pie
                    data={data}
                    options={{
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                    }}
                  />
                </div>
              </div>

              {/* spacer to reserve space for absolute chart so numbers/legend sit below */}
              <div style={{ height: 160, width: "100%" }} />

              <div
                className="flex items-center justify-between gap-8 mt-0"
                style={{ width: 284 }}
              >
                <div className="flex flex-col items-center">
                  <div style={{ width: 67, height: 36 }}>
                    <div
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: 26.4444,
                        lineHeight: "36px",
                        letterSpacing: 0.944444,
                        color: "#263138",
                        textAlign: "center",
                      }}
                    >
                      {active.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      style={{
                        width: 11.33,
                        height: 11.34,
                        backgroundColor: card.colors[0],
                        borderRadius: 99,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: 15.1111,
                        color: "#263138",
                        opacity: 0.8,
                      }}
                    >
                      Active
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div style={{ width: 72.33, height: 36 }}>
                    <div
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: 26.4444,
                        lineHeight: "36px",
                        letterSpacing: 0.944444,
                        color: "#263138",
                        textAlign: "center",
                      }}
                    >
                      {inactive.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      style={{
                        width: 11.33,
                        height: 11.34,
                        backgroundColor: card.colors[1],
                        borderRadius: 99,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: 15.1111,
                        color: "#263138",
                        opacity: 0.8,
                      }}
                    >
                      Inactive
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technician Performance & Sales Trend removed as requested */}
    </div>
  );
};

export default function App() {
  return <Dashboard />;
}
