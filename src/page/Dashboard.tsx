// src/pages/Dashboard.tsx
import React from "react";
import {
  Inbox,
  Calendar,
  Clock,
  TrendingUp,
  Layers,
  Sun,
  Package,
  CheckCircle2,
} from "lucide-react";
import DashboardAnalytics from "../components/DashboardAnalytics";
import RecentOrders from "../components/RecentsOrders";

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto p-2 mobile:p-4 tablet:p-6">
      {/* Title */}
      <div className="flex flex-col mobile:flex-row mobile:items-center justify-between gap-2 border-b border-gray-200/80 pb-4">
        <div>
          <h1 className="text-xl mobile:text-2xl tablet:text-3xl font-black text-gray-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs mobile:text-sm text-gray-500 font-medium mt-0.5">
            Welcome back! Jacinta, Here is what is happening with Online Boundary Market today.
          </p>
        </div>

        {/* Brand Theme Badge */}
        <div className="self-start mobile:self-auto px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-primary flex items-center gap-1.5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Live Metrics
        </div>
      </div>

      {/* TOP ROW: Revenue & Sales Cards (Responsive Grid using custom breakpoints) */}
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 web:grid-cols-5 gap-3 mobile:gap-4">
        {/* Today Orders */}
        <div className="bg-linear-to-br from-emerald-50 via-emerald-50/30 to-white p-4 mobile:p-5 rounded-2xl border border-emerald-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-48 group">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:scale-110 transition-transform">
              <Inbox size={20} />
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-primary-dark uppercase">
              Today
            </span>
          </div>

          <div>
            <div className="text-2xl mobile:text-3xl font-black text-gray-900 tracking-tight">₦108012</div>
            <div className="text-xs font-bold text-gray-500 mt-1">Today Orders</div>
          </div>

          <div className="grid grid-cols-3 gap-1 pt-3 border-t border-emerald-100 text-[11px]">
            <div>
              <div className="text-gray-400 font-medium">Cash</div>
              <div className="font-extrabold text-gray-800">₦108o12</div>
            </div>
            <div>
              <div className="text-gray-400 font-medium">Card</div>
              <div className="font-extrabold text-gray-800">₦0.00</div>
            </div>
            <div>
              <div className="text-gray-400 font-medium">Credit</div>
              <div className="font-extrabold text-gray-800">₦0.00</div>
            </div>
          </div>
        </div>

        {/* Yesterday Orders */}
        <div className="bg-linear-to-br from-orange-50 via-orange-50/20 to-white p-4 mobile:p-5 rounded-2xl border border-orange-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-48 group">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold group-hover:scale-110 transition-transform">
              <Inbox size={20} />
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-orange-100 text-secondary-dark uppercase">
              Yesterday
            </span>
          </div>

          <div>
            <div className="text-2xl mobile:text-3xl font-black text-gray-900 tracking-tight">₦0.00</div>
            <div className="text-xs font-bold text-gray-500 mt-1">Yesterday Orders</div>
          </div>

          <div className="grid grid-cols-3 gap-1 pt-3 border-t border-orange-100 text-[11px]">
            <div>
              <div className="text-gray-400 font-medium">Cash</div>
              <div className="font-extrabold text-gray-800">₦0.00</div>
            </div>
            <div>
              <div className="text-gray-400 font-medium">Card</div>
              <div className="font-extrabold text-gray-800">₦0.00</div>
            </div>
            <div>
              <div className="text-gray-400 font-medium">Credit</div>
              <div className="font-extrabold text-gray-800">₦0.00</div>
            </div>
          </div>
        </div>

        {/* This Month */}
        <div className="bg-linear-to-br from-emerald-50 via-teal-50/20 to-white p-4 mobile:p-5 rounded-2xl border border-emerald-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-48 group">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Calendar size={20} />
          </div>

          <div>
            <div className="text-2xl mobile:text-3xl font-black text-gray-900 tracking-tight">1,528.13</div>
            <div className="text-xs font-bold text-gray-500 mt-1">This Month</div>
          </div>

          <div className="text-[11px] font-semibold text-primary">
            +12.4% from last month
          </div>
        </div>

        {/* Last Month */}
        <div className="bg-linear-to-br from-orange-50 via-amber-50/30 to-white p-4 mobile:p-5 rounded-2xl border border-orange-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-48 group">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
            <Clock size={20} />
          </div>

          <div>
            <div className="text-2xl mobile:text-3xl font-black text-gray-900 tracking-tight">1,631.00</div>
            <div className="text-xs font-bold text-gray-500 mt-1">Last Month</div>
          </div>

          <div className="text-[11px] font-semibold text-gray-400">
            Finalized total
          </div>
        </div>

        {/* All-Time Sales */}
        <div className="bg-linear-to-br from-emerald-100/60 via-orange-50/50 to-white p-4 mobile:p-5 rounded-2xl border border-emerald-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-48 group mobile:col-span-2 tablet:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-linear-to-r from-primary to-secondary flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
            <TrendingUp size={20} />
          </div>

          <div>
            <div className="text-2xl mobile:text-3xl font-black text-gray-900 tracking-tight truncate">1,349,278.21</div>
            <div className="text-xs font-bold text-gray-500 mt-1">All-Time Sales</div>
          </div>

          <div className="text-[11px] font-extrabold text-secondary-dark">
            Overall Earnings
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Order Status Summary */}
      <div className="grid grid-cols-1 small:grid-cols-2 tablet:grid-cols-4 gap-3 mobile:gap-4">
        {/* Total Order */}
        <div className="bg-white p-4 mobile:p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-orange-200 transition-all flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-secondary shrink-0">
            <Layers size={24} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-gray-500 truncate">Total Order</div>
            <div className="text-2xl font-black text-gray-900 mt-0.5">1448</div>
          </div>
        </div>

        {/* Orders Pending */}
        <div className="bg-white p-4 mobile:p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-emerald-200 transition-all flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary shrink-0">
            <Sun size={24} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-gray-500 truncate">Orders Pending</span>
              <span className="px-1.5 py-0.5 text-[10px] font-black text-red-600 bg-red-50 border border-red-100 rounded-md shrink-0">
                50,041.61
              </span>
            </div>
            <div className="text-2xl font-black text-gray-900 mt-0.5">104</div>
          </div>
        </div>

        {/* Orders Processing */}
        <div className="bg-white p-4 mobile:p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-orange-200 transition-all flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-secondary shrink-0">
            <Package size={24} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-gray-500 truncate">Orders Processing</div>
            <div className="text-2xl font-black text-gray-900 mt-0.5">43</div>
          </div>
        </div>

        {/* Orders Delivered */}
        <div className="bg-white p-4 mobile:p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-emerald-200 transition-all flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-gray-500 truncate">Orders Delivered</div>
            <div className="text-2xl font-black text-gray-900 mt-0.5">157</div>
          </div>
        </div>
      </div>
      {/*end BOTTOM ROW: Order Status Summary */}

      {/* Charts */}
      <DashboardAnalytics/>
      {/*end Charts */}
      {/* Recents Orders */}
      <RecentOrders/>
      {/*end Recents Orders */}
    </div>
  );
};

export default Dashboard;