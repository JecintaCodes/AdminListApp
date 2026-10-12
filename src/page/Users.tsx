import { Calendar, Check, Copy, Mail, Phone, User, LineDotRightHorizontalIcon } from "lucide-react";
import { useState } from "react";

const Users = () => {
  const [copiedRef, setCopiedRef] = useState(null);
  const handleCopyRef = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedRef(id);
    setTimeout(() => setCopiedRef(null), 2000);
  };
  console.log(copiedRef);

  const data = [
    {
      id: "gh8sn0214n",
      no: 1,
      name: "Jacinta",
      email: "jacinta@gmail.com",
      contact: "0912614352",
      Address: "90 old ojo road amuwo odofin",
      date: "thursday 7 may 2026 12:30pm",
      role: "Admin",
    },
    {
      id: "vcnbb2n09n",
      no: 2,
      name: "Uchechukwu Jacinta Ugochi",
      email: "jacinta@gmail.com",
      contact: "0912614352",
      Address: "90 old ojo road amuwo odofin",
      date: "thursday 7 may 2026 12:30pm",
      role: "Admin",
    },
    {
      id: "g70h725gd",
      no: 3,
      name: "Augustin Blessyn",
      email: "augustinblessyn@gmail.com",
      contact: "09062578244",
      Address: "790 muyibi road ",
      date: "sunday 01 january 2025 2:00pm",
      role: "User",
    },
    {
      id: "103xuao5b8",
      no: 4,
      name: "ochonogo Esther Ifeoma",
      email: "ochonogostherifeoma@gmail.com",
      contact: "0912614352",
      Address: "block 9 surlere  Lagos ",
      date: "friday 12 December 2024 6:00am",
      role: "Seller",
    },
    {
      id: "7hat09nus",
      no: 5,
      name: "Uchechukwu Chinonso Gerald",
      email: "uchechukwuchinonsogerald@gmail.com",
      contact: "08126578955",
      Address: "Ikeja High Way, mortala mohammed Airport Road",
      date: "wedness 7 Nov 202025 2:00pm",
      role: "Admin",
    },
  ];
  return (
    <div className="w-full h-full flex justify-center ">
      <div className="w-[90%] ">
        {/* first Section */}
        <div className="flex justify-between items-center w-full ">
          <input
            type="search"
            placeholder="search with #, name, email, phone number "
            className="w-100 h-10 border-none rounded-2xl p-2 border-green-700 text-[12px] font-semibold  "
          />
          <input
            type="button"
            value="Add Users"
            className="p-2 rounded-xl border-green-700 border-2 text-[15px] font-bold text-green-700 cursor-pointer outline-none   "
          />
        </div>
        <br />
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden mt-10 ">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-225">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-extrabold uppercase text-gray-400 tracking-wider">
                  <th className="py-4 px-6">No</th>
                  <th className="py-4 px-6">#Id</th>

                  <th className="py-4 px-4">Name</th>
                  <th className="py-4 px-4">Email</th>
                  <th className="py-4 px-4">Contact</th>
                  <th className="py-4 px-4">Address</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-6 text-right">role</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
                {data.map((data) => (
                  <tr
                    key={data.id}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    <td>
                      {" "}
                      <span className="font-extrabold text-gray-900 p-2 ml-5 font-mono text-[11px]">
                        {data.no}
                      </span>
                    </td>
                    {/* data Number */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-lg font-mono text-[11px]">
                          {data.id}
                        </span>
                        <button
                          className="font-extrabold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-lg font-mono text-[11px]"
                          type="button"
                          onClick={() => handleCopyRef(data.id)}
                          // className="p-1 hover:text-primary rounded cursor-pointer transition-colors text-gray-400"
                          // title="Copy Reference"
                        >
                          {copiedRef === data.id ? (
                            <Check size={14} className="text-primary" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    </td>

                    {/* Customer Details */}
                    <td className="py-4 px-4 whitespace-nowrap  ">
                      <div className="space-y-0.5">
                        <div className="font-extrabold text-gray-900 flex items-center gap-1.5">
                          <User size={13} className="text-primary shrink-0" />
                          {data.name}
                        </div>
                      </div>
                    </td>
                    {/* mail */}
                    <td>
                      {" "}
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5 whitespace-nowrap  ">
                        <Mail size={11} className="shrink-0" />
                        {data.email}
                      </div>
                    </td>

                    {/* contact */}
                    <td>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5 whitespace-nowrap  ">
                        <Phone size={11} className="shrink-0" />
                        {data.contact}
                      </div>
                    </td>

                    {/* Address */}
                    <td className="py-4 px-4 whitespace-nowrap  ">
                      <div className="font-extrabold text-gray-800">
                        {data.Address}
                      </div>
                    </td>
                    <td>
                      {/* date */}
                      <td className="py-4 px-4 text-gray-500 whitespace-nowrap text-[11px]">
                        <div className="flex items-center gap-1">
                          <Calendar size={13} />
                          {data.date}
                        </div>
                      </td>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-4 font-bold text-gray-700">
                      {data.role}
                    </td>
                    {/* Action */}
                    <td className="py-4 px-4 text-gray-500 whitespace-nowrap text-[11px]">
                        <div className="flex items-center  gap-1">
                          <LineDotRightHorizontalIcon size={13} className="shrink-0" />
                         
                        </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/*end second Section */}
      </div>
    </div>
  );
};

export default Users;
