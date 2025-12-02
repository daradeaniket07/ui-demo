"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

export default function AwbPageComponent() {
  const [awb, setAwb] = useState("");
  const [showContent, setShowContent] = useState(false);

  const data = {
    ownerCode: "AI",
    ubrNo: "NIKKDELNDELMEL0",
    groupId: "",
    origin: "DEL",
    destination: "MEL",
    routing: "MEL AI",
    requestedFlight: "AI0308 29-Oct-2025",
    agentCode: "NIKKDELN",
    agentName: "NIKKON AIR FREIGHT SER",
    iataCode: "143 5472",
    cassCode: "0004",
    shipper: "ADITYA INDUSTRIES",
    consignee: "S S FAMILY TRUST ATF SLOGGER PTY LTD",
  };

  const handleList = () => {
    if (!awb.trim()) return;
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-sm">

      {/* TOP HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between">
          <div className="text-sm text-gray-600">🏠 Home</div>
          <div className="text-blue-600 font-semibold text-sm">
            Capture AWB / Screen : OPR026
          </div>
          <div className="text-sm text-gray-600">User: C_DIVESH.CHOUDHARY1</div>
        </div>
      </header>

      {/* MAIN INPUT AREA */}
      <div className="max-w-[1200px] mx-auto px-4 mt-6">

        {/* AWB INPUT BLOCK */}
        <div className="bg-white border rounded-md p-4 shadow-sm flex gap-4 items-end">

          {/* AWB INPUT */}
          <div className="flex-1">
            <label className="text-xs text-gray-600">AWB Number</label>
            <input
              type="text"
              className="border rounded px-2 py-2 w-full"
              placeholder="Enter AWB Number"
              value={awb}
              onChange={(e) => setAwb(e.target.value)}
            />
          </div>

          {/* OWNER CODE */}
          <div>
            <label className="text-xs text-gray-600">Owner Code</label>
            <input
              className="border rounded px-2 py-2 w-20"
              value={data.ownerCode}
              readOnly
            />
          </div>

          {/* LIST BUTTON */}
          <button
            onClick={handleList}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            LIST
          </button>
        </div>
      </div>

      {/* ---------------- PAGE CONTENT (HIDDEN UNTIL LIST) ---------------- */}
      {showContent && (
        <div className="max-w-[1200px] mx-auto px-4 mt-6">

          {/* AWB DETAILS HEADER */}
          <div className="bg-white border rounded-md p-3 shadow-sm">

            <div className="grid grid-cols-12 gap-4 items-center">

              <div className="col-span-3">
                <label className="text-xs text-gray-600">AWB Number</label>
                <input className="border rounded px-2 py-1 w-full" value={awb} readOnly />
              </div>

              <div className="col-span-2">
                <label className="text-xs text-gray-600">Owner Code</label>
                <input className="border rounded px-2 py-1 w-full" value={data.ownerCode} readOnly />
              </div>

              <div className="col-span-4">
                <label className="text-xs text-gray-600">UBR No</label>
                <input className="border rounded px-2 py-1 w-full" value={data.ubrNo} readOnly />
              </div>

              <div className="col-span-2">
                <label className="text-xs text-gray-600">Group ID</label>
                <input className="border rounded px-2 py-1 w-full" value={data.groupId} readOnly />
              </div>

              <div className="col-span-1 flex gap-2 items-end">
                <button className="px-3 py-1 border rounded text-sm bg-green-600 text-white">
                  List
                </button>
              </div>

            </div>
          </div>

          {/* PLACE YOUR OLD OPR026 CONTENT HERE (unchanged) */}
          <div className="mt-6 bg-white border rounded-md p-4 shadow-sm">
            {/* Entire old OPR026 UI goes here */}
            <div className="font-semibold text-gray-700">
              AWB026 main details will appear here...
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
