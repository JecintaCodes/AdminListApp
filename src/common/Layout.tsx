// src/layouts/AdminLayout.tsx
import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ListOrdered,
  Users,
  Grid,
  Tag,
  Settings,
  Bell,
  BookAIcon,
} from "lucide-react";
import Sider, { SiderItem } from "./Sider";
export const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { text: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin" },
    { text: "List Histroy", icon: <ShoppingBag size={20} />, path:"list-histroy" },
    { text: "Products", icon: <ShoppingBag size={20} />, path: "/admin/products" },
    { text: "Order Histroy", icon: <ListOrdered size={20} />, path: "order-histroy", alert: true },
    { text: "Categories", icon: <Grid size={20} />, path: "/admin/categories" },
    { text: "Services", icon: <Grid size={20} />, path: "/services" },
    { text: " Users", icon: <Users size={20} />, path: "users" },
    { text: "Ledger", icon: <BookAIcon size={20} />, path: "customer-ledger" },
    { text: "Discounts & Promos", icon: <Tag size={20} />, path: "/admin/promos" },
    { text: "Notifications", icon: <Bell size={20} />, path: "/admin/notifications" },
    { text: "Settings", icon: <Settings size={20} />, path: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Container */}
      <Sider>
        {navItems.map((item) => (
          <SiderItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={location.pathname === item.path}
            alert={item.alert}
            onClick={() => navigate(item.path)}
          />
        ))}
      </Sider>

      {/* Main Admin Page Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;