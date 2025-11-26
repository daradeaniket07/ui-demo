"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [selectedScreen, setSelectedScreen] = useState("");
  const [awb, setAwb] = useState("");

  // const handleListClick = () => {
  //   if (!selectedScreen || !awb) return;
  //   router.push(`/awb?screen=${selectedScreen}&awb=${awb}`);
  // };
  const handleListClick = () => {
  if (!selectedScreen || !awb) return;

  if (selectedScreen === "OPR026") {
    router.push(`/awb?awb=${awb}`);
  } 
  else if (selectedScreen === "OPR352") {
    router.push(`/opr352?awb=${awb}`);
  }
};


  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* TOP NAV BAR */}
      <div className="w-full bg-[#0E4F6F] h-14 flex items-center px-5 text-white">
        <div className="font-bold text-xl">iCargo</div>

        {/* SEARCH DROPDOWN */}
        <div className="flex items-center ml-10 w-1/2">
          <select
            className="w-full bg-[#1B6685] text-white p-2 rounded outline-none"
            value={selectedScreen}
            onChange={(e) => setSelectedScreen(e.target.value)}
          >
            <option value="">Search / Select Screen...</option>
            <option value="OPR026">OPR026 – Capture AWB Screen</option>
            <option value="OPR352">OPR352 – AWB Enquiry Screen</option>
          </select>
        </div>

        {/* RIGHT INFO SECTION */}
        <div className="ml-auto text-sm">
          Logged in as: USER | AT: BOM | RoleGroup: TCSGRABPO
        </div>
      </div>

      {/* BODY */}
      <div className="p-6">
        {selectedScreen && (
          <div className="flex items-end gap-4 mt-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                AWB Number
              </label>

              <input
                type="text"
                placeholder="Enter AWB Number"
                value={awb}
                onChange={(e) => setAwb(e.target.value)}
                className="border rounded p-2 w-60"
              />
            </div>

            {/* LIST BUTTON */}
            <button
              onClick={handleListClick}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              LIST
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
