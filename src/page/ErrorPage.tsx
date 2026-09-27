// src/pages/NotFound.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, HelpCircle, ShieldAlert } from "lucide-react";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Visual Badge & Brand Touch */}
        <div className="relative inline-block">
          {/* Subtle glowing background ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-75"></div>
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white border border-gray-100 rounded-3xl shadow-lg flex items-center justify-center mx-auto text-primary">
            <ShieldAlert size={48} strokeWidth={1.5} className="text-secondary" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 bg-emerald-50 text-primary border border-emerald-200/60 rounded-full text-xs font-black tracking-widest uppercase">
            Error 404
          </span>
          
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Page Not Found
          </h1>
          
          <p className="text-sm sm:text-base text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
            The page or record you are trying to access might have been moved, renamed, or does not exist on Online Boundary Market.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Go Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>

          {/* Return Home Button */}
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home size={16} />
            <span>Return to Dashboard</span>
          </Link>
        </div>

        {/* Support Link Footer */}
        <div className="pt-6 border-t border-gray-200/60 flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium">
          <HelpCircle size={14} />
          <span>Need help resolving a list or order issue?</span>
          <a
            href="mailto:support@onlineboundarymarket.com"
            className="text-secondary font-bold hover:underline"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;