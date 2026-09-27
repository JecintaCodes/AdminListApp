// src/components/Sider.tsx
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import img from "../assets/hero.png";

interface SiderContextType {
  expanded: boolean;
}

const SiderContext = createContext<SiderContextType>({ expanded: true });

interface SiderProps {
  children: ReactNode;
}

export const Sider: React.FC<SiderProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen bg-white sticky top-0 z-30">
      <nav className="h-full flex flex-col justify-between border-r border-gray-100 shadow-xs p-3 transition-all duration-300">
        <div>
          {/* Header & Toggle Button */}
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-100">
            {expanded ? (
              <span
                className={`overflow-hidden transition-all duration-300 font-black text-xl text-emerald-700 tracking-tight whitespace-nowrap ${
                  expanded ? "w-28 opacity-100" : "w-0 opacity-0"
                }`}
              >
                OBM Admin
              </span>
            ) : (
              <span className=" text-emerald-700 text- font-semibold ">
                OBM
              </span>
            )}
            <button
              type="button"
              onClick={() => setExpanded((curr) => !curr)}
              className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors cursor-pointer flex items-center justify-center shrink-0"
            >
              {expanded ? (
                <ChevronFirst size={20} />
              ) : (
                <ChevronLast size={20} />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <SiderContext.Provider value={{ expanded }}>
            <ul className="flex flex-col gap-1.5">{children}</ul>
          </SiderContext.Provider>
        </div>

        {/* Admin Profile Footer */}
        <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
          <img
            className="rounded-xl w-10 h-10 object-cover border border-gray-200 shrink-0"
            src={img}
            alt="Jacinta"
          />

          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? "w-40 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <div className="leading-tight truncate">
              <h4 className="font-bold text-xs text-gray-900 truncate">
                Jacinta
              </h4>
              <span className="text-emerald-700 font-medium text-[11px] truncate block">
                admin@boundarymarket.com
              </span>
            </div>
            <button
              type="button"
              className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sider;

// Individual Navigation Item Component
interface SiderItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

export const SiderItem: React.FC<SiderItemProps> = ({
  icon,
  text,
  active = false,
  alert = false,
  onClick,
}) => {
  const { expanded } = useContext(SiderContext);

  return (
    <li
      onClick={onClick}
      className={`relative flex items-center p-3 font-bold text-xs rounded-xl cursor-pointer transition-all duration-200 group ${
        active
          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
          : "hover:bg-orange-50 text-emerald-900 hover:text-orange-600"
      }`}
    >
      {/* Icon always stays visible */}
      <span className="shrink-0">{icon}</span>

      {/* Text smoothly hides/shows when toggled */}
      <span
        className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${
          expanded ? "w-36 ml-3 opacity-100" : "w-0 opacity-0 ml-0"
        }`}
      >
        {text}
      </span>

      {/* Alert Dot */}
      {alert && (
        <div
          className={`absolute rounded-full bg-orange-500 transition-all ${
            expanded
              ? "right-3 w-2 h-2"
              : "top-2 right-2 w-2 h-2 ring-2 ring-white"
          }`}
        />
      )}

      {/* Hover Tooltip when sidebar is collapsed */}
      {!expanded && (
        <div className="absolute left-full rounded-md px-2.5 py-1.5 ml-4 bg-gray-900 text-white text-xs font-bold opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
          {text}
        </div>
      )}
    </li>
  );
};
