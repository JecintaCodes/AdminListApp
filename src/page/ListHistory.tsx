// src/pages/ListHistory.tsx
import React, { useState } from "react";
import {
  Search,
  Receipt,
  Copy,
  Check,
  Phone,
  Mail,
  User,
  Calendar,
  Eye,
  X,
} from "lucide-react";

// Types matching your exact list values + item breakdown
export interface HistoricalListItem {
  id: string;
  itemName: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface ListHistoryRecord {
  id: string;
  referenceNumber: string;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  items: HistoricalListItem[];
  amount: number; // Subtotal/base amount
  deliveryFee: number;
  total: number;
  paymentMethod: "Card" | "Bank Transfer" | "Cash on Delivery";
  orderDate: string;
  status: "Completed" | "Refunded" | "Disputed";
}

// Sample initial list history records
const sampleHistory: ListHistoryRecord[] = [
  {
    id: "hist-001",
    referenceNumber: "OBM-PAY-8849201",
    customerName: "Amina Bello",
    customerPhoneNumber: "+234 803 123 4567",
    customerEmail: "amina.bello@gmail.com",
    items: [
      { id: "i1", itemName: "Fresh Tomatoes (Basket)", unitPrice: 12000, quantity: 1, totalPrice: 12000 },
      { id: "i2", itemName: "Red Bell Peppers (Tatashe)", unitPrice: 4500, quantity: 2, totalPrice: 9000 },
      { id: "i3", itemName: "Onions (Bag)", unitPrice: 8500, quantity: 1, totalPrice: 8500 },
    ],
    amount: 29500,
    deliveryFee: 1500,
    total: 31000,
    paymentMethod: "Card",
    orderDate: "Sep 27, 2026 - 10:15 AM",
    status: "Completed",
  },
  {
    id: "hist-002",
    referenceNumber: "OBM-PAY-7731902",
    customerName: "Emeka Okafor",
    customerPhoneNumber: "+234 812 987 6543",
    customerEmail: "emeka.okafor@yahoo.com",
    items: [
      { id: "i4", itemName: "Basmati Rice 5kg", unitPrice: 18500, quantity: 1, totalPrice: 18500 },
      { id: "i5", itemName: "Vegetable Oil 5L", unitPrice: 14000, quantity: 1, totalPrice: 14000 },
    ],
    amount: 32500,
    deliveryFee: 2000,
    total: 34500,
    paymentMethod: "Bank Transfer",
    orderDate: "Sep 26, 2026 - 02:40 PM",
    status: "Completed",
  },
];

export const ListHistory: React.FC = () => {
  const [history, setHistory] = useState<ListHistoryRecord[]>(sampleHistory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<ListHistoryRecord | null>(null);
  const [copiedRef, setCopiedRef] = useState<string | null>(null);
console.log(setHistory)
  // Copy reference number helper
  const handleCopyRef = (refNum: string) => {
    navigator.clipboard.writeText(refNum);
    setCopiedRef(refNum);
    setTimeout(() => setCopiedRef(null), 2000);
  };

  // Filter records based on search query
  const filteredHistory = history.filter((record) => {
    const q = searchQuery.toLowerCase();
    return (
      record.customerName.toLowerCase().includes(q) ||
      record.customerEmail.toLowerCase().includes(q) ||
      record.customerPhoneNumber.includes(q) ||
      record.referenceNumber.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-2 mobile:p-4 tablet:p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col tablet:flex-row tablet:items-center justify-between gap-4 border-b border-gray-200/80 pb-4">
        <div>
          <h1 className="text-xl mobile:text-2xl tablet:text-3xl font-black text-gray-900 tracking-tight">
            Customer List History
          </h1>
          <p className="text-xs mobile:text-sm text-gray-500 font-medium mt-0.5">
            Archived record of all paid market lists and customer order references for support resolution.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-primary flex items-center gap-2">
            <Receipt size={16} />
            <span>{history.length} Total Archival Records</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-3 mobile:p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col mobile:flex-row items-center gap-3">
        <div className="relative w-full flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by customer name, email, phone, or reference number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400 placeholder:font-semibold"
          />
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-extrabold uppercase text-gray-400 tracking-wider">
                <th className="py-4 px-6">Reference No</th>
                <th className="py-4 px-4">Customer Details</th>
                <th className="py-4 px-4">Items Summary</th>
                <th className="py-4 px-4">Amount</th>
                <th className="py-4 px-4">Total Paid</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
              {filteredHistory.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50/80 transition-colors">
                  
                  {/* Reference Number */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-lg font-mono text-[11px]">
                        {record.referenceNumber}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyRef(record.referenceNumber)}
                        className="p-1 hover:text-primary rounded cursor-pointer transition-colors text-gray-400"
                        title="Copy Reference"
                      >
                        {copiedRef === record.referenceNumber ? (
                          <Check size={14} className="text-primary" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  </td>

                  {/* Customer Details */}
                  <td className="py-4 px-4">
                    <div className="space-y-0.5">
                      <div className="font-extrabold text-gray-900 flex items-center gap-1.5">
                        <User size={13} className="text-primary shrink-0" />
                        {record.customerName}
                      </div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                        <Phone size={11} className="shrink-0" />
                        {record.customerPhoneNumber}
                      </div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5 truncate max-w-[180px]">
                        <Mail size={11} className="shrink-0" />
                        {record.customerEmail}
                      </div>
                    </div>
                  </td>

                  {/* Item Summary */}
                  <td className="py-4 px-4">
                    <div className="font-extrabold text-gray-800">
                      {record.items.length} Unique Items
                    </div>
                    <div className="text-[11px] text-gray-400 truncate max-w-[200px]">
                      {record.items.map((i) => i.itemName).join(", ")}
                    </div>
                  </td>

                  {/* Subtotal Amount */}
                  <td className="py-4 px-4 font-bold text-gray-700">
                    ₦{record.amount.toLocaleString()}
                  </td>

                  {/* Total Paid */}
                  <td className="py-4 px-4 font-black text-primary-dark">
                    ₦{record.total.toLocaleString()}
                  </td>

                  {/* Order Date */}
                  <td className="py-4 px-4 text-gray-500 whitespace-nowrap text-[11px]">
                    <div className="flex items-center gap-1">
                      <Calendar size={13} />
                      {record.orderDate}
                    </div>
                  </td>

                  {/* Action View */}
                  <td className="py-4 px-6 text-right">
                    <button
                      type="button"
                      onClick={() => setSelectedRecord(record)}
                      className="px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-secondary border border-orange-200 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5 ml-auto cursor-pointer"
                    >
                      <Eye size={14} />
                      <span>View List</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL DETAILED LIST BREAKDOWN ================= */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden space-y-4 p-6 animate-in fade-in zoom-in duration-150">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  Archived List Details
                </h3>
                <p className="text-xs font-bold text-primary font-mono mt-0.5">
                  Ref: {selectedRecord.referenceNumber}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRecord(null)}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-700 cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Customer Contact Card */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3.5 grid grid-cols-1 mobile:grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-gray-400 font-medium block">Customer Name</span>
                <span className="font-black text-gray-900">{selectedRecord.customerName}</span>
              </div>
              <div>
                <span className="text-gray-400 font-medium block">Phone Number</span>
                <span className="font-bold text-gray-900">{selectedRecord.customerPhoneNumber}</span>
              </div>
              <div>
                <span className="text-gray-400 font-medium block">Email Address</span>
                <span className="font-bold text-gray-900 truncate block">{selectedRecord.customerEmail}</span>
              </div>
            </div>

            {/* Items Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 font-black uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Item Name</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-right">Unit Price</th>
                    <th className="p-3 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-semibold text-gray-800">
                  {selectedRecord.items.map((item) => (
                    <tr key={item.id}>
                      <td className="p-3 font-bold">{item.itemName}</td>
                      <td className="p-3 text-center">{item.quantity}</td>
                      <td className="p-3 text-right">₦{item.unitPrice.toLocaleString()}</td>
                      <td className="p-3 text-right font-black">₦{item.totalPrice.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Financial Summary Footer */}
            <div className="border-t border-gray-100 pt-3 flex flex-col mobile:flex-row justify-between items-center gap-2 text-xs">
              <div className="text-gray-500 font-medium">
                Payment Method: <span className="font-extrabold text-gray-900">{selectedRecord.paymentMethod}</span>
              </div>
              <div className="text-right space-y-0.5">
                <div className="text-gray-500 font-medium">
                  Subtotal: ₦{selectedRecord.amount.toLocaleString()} + Delivery: ₦{selectedRecord.deliveryFee.toLocaleString()}
                </div>
                <div className="text-base font-black text-primary-dark">
                  Grand Total: ₦{selectedRecord.total.toLocaleString()}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ListHistory;