// src/components/DashboardAnalytics.tsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// 1. Dummy Data for Weekly Sales Line Chart
const salesData = [
  { date: "2026-09-24", Sales: 195, Orders: 40 },
  { date: "2026-09-25", Sales: 150, Orders: 28 },
  { date: "2026-09-26", Sales: 108, Orders: 15 },
];

// 2. Dummy Data for Best Selling Products Pie Chart
const productData = [
  { name: "Onion", value: 30, color: "#10b981" }, // Primary Brand Green
  { name: "Pepper", value: 25, color: "#3b82f6" }, // Blue
  { name: "Tomato", value: 25, color: "#f97316" }, // Secondary Brand Orange
  { name: "ugwu", value: 20, color: "#0ea5e9" }, // Sky Blue
  { name: "Red Oil", value: 10, color: "#0ea5e4" }, // Sky Blue
];

export const DashboardAnalytics: React.FC = () => {
  // State for toggling between Sales and Orders view
  const [activeTab, setActiveTab] = useState<"Sales" | "Orders">("Sales");

  return (
    <div className="grid grid-cols-1 web:grid-cols-2 gap-4 mobile:gap-6 mt-6">
      
      {/* ==================== LEFT CARD: WEEKLY SALES CHART ==================== */}
      <div className="bg-white p-4 mobile:p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
        {/* Header & Tabs */}
        <div>
          <h2 className="text-lg font-black text-gray-900 tracking-tight mb-3">
            Weekly Sales
          </h2>

          {/* Sales vs Orders Tab Buttons */}
          <div className="flex gap-4 border-b border-gray-100 text-sm font-bold">
            <button
              type="button"
              onClick={() => setActiveTab("Sales")}
              className={`pb-2 transition-colors cursor-pointer ${
                activeTab === "Sales"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Sales
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("Orders")}
              className={`pb-2 transition-colors cursor-pointer ${
                activeTab === "Orders"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Orders
            </button>
          </div>
        </div>

        {/* Responsive Line Chart Container */}
        <div className="h-64 mobile:h-72 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} />
              <YAxis domain={[100, 200]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0" }} />
              
              <Line
                type="monotone"
                dataKey={activeTab}
                stroke={activeTab === "Sales" ? "#10b981" : "#f97316"} // Green for Sales, Orange for Orders
                strokeWidth={3}
                dot={{ r: 5, fill: activeTab === "Sales" ? "#10b981" : "#f97316" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ==================== RIGHT CARD: BEST SELLING PRODUCTS ==================== */}
      <div className="bg-white p-4 mobile:p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
        <h2 className="text-lg font-black text-gray-900 tracking-tight">
          Best Selling Products
        </h2>

        {/* Responsive Pie Chart Container */}
        <div className="h-64 mobile:h-72 w-full mt-2 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={90}
                dataKey="value"
                paddingAngle={0}
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0" }} />
              <Legend
                verticalAlign="top"
                align="center"
                iconType="square"
                wrapperStyle={{ fontSize: "11px", fontWeight: "600" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default DashboardAnalytics;