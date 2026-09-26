// src/components/RecentOrders.tsx
import React, { useState } from "react";
import { Printer, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface Order {
  invoiceNo: string;
  orderTime: string;
  customerName: string;
  method: string;
  amount: string;
  status: "Delivered" | "Processing" | "Cancel" | "Pending";
}

// Dummy order data
const initialOrders: Order[] = [
  {
    invoiceNo: "44",
    orderTime: "Sep 26, 2026 5:38 AM",
    customerName: "Keerthi Keerthi",
    method: "Cash",
    amount: "₦108.12",
    status: "Delivered",
  },
  {
    invoiceNo: "12426",
    orderTime: "Sep 25, 2026 12:56 PM",
    customerName: "Health AID Pharma",
    method: "Cash",
    amount: "₦165.20",
    status: "Processing",
  },
  {
    invoiceNo: "12419",
    orderTime: "Sep 24, 2026 5:15 AM",
    customerName: "testschy testschy",
    method: "Cash",
    amount: "₦193.67",
    status: "Delivered",
  },
  {
    invoiceNo: "12417",
    orderTime: "Sep 13, 2026 8:35 AM",
    customerName: "test tets",
    method: "Card",
    amount: "₦447.96",
    status: "Cancel",
  },
  {
    invoiceNo: "12423",
    orderTime: "Sep 11, 2026 4:32 PM",
    customerName: "arfin naim",
    method: "Cash",
    amount: "₦50.82",
    status: "Delivered",
  },
  {
    invoiceNo: "12422",
    orderTime: "Sep 5, 2026 5:41 PM",
    customerName: "Bishal Maji",
    method: "Cash",
    amount: "₦40.00",
    status: "Pending",
  },
  {
    invoiceNo: "12407",
    orderTime: "Sep 5, 2026 5:40 PM",
    customerName: "Leather fff",
    method: "Cash",
    amount: "₦964.14",
    status: "Delivered",
  },
  {
    invoiceNo: "67",
    orderTime: "Sep 1, 2026 8:25 AM",
    customerName: "REHANA PARVIN",
    method: "Cash",
    amount: "₦211.38",
    status: "Delivered",
  },
];

export const RecentOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10; // Set to match design or dynamic length

  // Helper for status badge styles
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-500 text-white";
      case "Processing":
        return "bg-pink-500 text-white";
      case "Pending":
        return "bg-secondary text-white";
      case "Cancel":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const handleStatusChange = (index: number, newStatus: Order["status"]) => {
    const updated = [...orders];
    updated[index].status = newStatus;
    setOrders(updated);
  };

  return (
    <div className="mt-8">
      {/* Title */}
      <h2 className="text-xl font-black text-gray-900 tracking-tight mb-4">
        Recent Order
      </h2>

      {/* Main Table Container */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-extrabold uppercase text-gray-400 tracking-wider">
                <th className="py-4 px-6">Invoice No</th>
                <th className="py-4 px-4">Order Time</th>
                <th className="py-4 px-4">Customer Name</th>
                <th className="py-4 px-4">Method</th>
                <th className="py-4 px-4">Amount</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Action</th>
                <th className="py-4 px-6 text-right">Invoice</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
              {orders.map((order, idx) => (
                <tr
                  key={`${order.invoiceNo}-${idx}`}
                  className="hover:bg-gray-50/80 transition-colors"
                >
                  <td className="py-4 px-6 font-extrabold text-gray-900">
                    {order.invoiceNo}
                  </td>
                  <td className="py-4 px-4 text-gray-500 whitespace-nowrap">
                    {order.orderTime}
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-800 whitespace-nowrap">
                    {order.customerName}
                  </td>
                  <td className="py-4 px-4 font-extrabold text-gray-900">
                    {order.method}
                  </td>
                  <td className="py-4 px-4 font-black text-gray-900">
                    {order.amount}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide ${getStatusBadge(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(
                          idx,
                          e.target.value as Order["status"],
                        )
                      }
                      className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-700 focus:outline-none focus:border-primary cursor-pointer shadow-2xs"
                    >
                      <option value="Delivered">Delivered</option>
                      <option value="Processing">Processing</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancel">Cancel</option>
                    </select>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                      <button
                        type="button"
                        className="p-1.5 hover:text-primary hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                        title="Print Invoice"
                      >
                        <Printer size={16} />
                      </button>
                      <button
                        type="button"
                        className="p-1.5 hover:text-secondary hover:bg-orange-50 rounded-lg transition-colors cursor-pointer"
                        title="View Order Details"
                      >
                        <ZoomIn size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= PAGINATION FOOTER ================= */}
        <div className="py-6 px-4 border-t border-gray-100 flex items-center justify-center">
          <div className="flex items-center gap-1 mobile:gap-2 text-xs font-bold text-gray-600">
            {/* Previous Button */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-primary disabled:opacity-40 disabled:hover:text-gray-600 transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              <span className="hidden mobile:inline">Previous</span>
            </button>

            {/* Page 1 */}
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                currentPage === 1
                  ? "bg-white border border-gray-200 shadow-xs text-gray-900 font-extrabold"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                currentPage === 2
                  ? "bg-white border border-gray-200 shadow-xs text-gray-900 font-extrabold"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              2
            </button>

            {/* Page 3 */}
            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                currentPage === 3
                  ? "bg-white border border-gray-200 shadow-xs text-gray-900 font-extrabold"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              3
            </button>

            {/* Ellipsis */}
            <span className="px-1 text-gray-400 font-extrabold">...</span>

            {/* Last Page (42) */}
            <button
              type="button"
              onClick={() => setCurrentPage(totalPages)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                currentPage === totalPages
                  ? "bg-white border border-gray-200 shadow-xs text-gray-900 font-extrabold"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {totalPages}
            </button>

            {/* Next Button */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-primary disabled:opacity-40 disabled:hover:text-gray-600 transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              <span className="hidden mobile:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
