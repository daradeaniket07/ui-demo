"use client";


export const dynamic = "force-dynamic";

import { useState } from "react";

export default function OPR026({ awb }: { awb: string }) {
  const [activeTab, setActiveTab] = useState("general");

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
    statusBadge: "Ready for Carriage",
  };

  return (
    <div className="w-full bg-white border rounded-md shadow-sm mt-10 p-4">

      {/* ---------- AWB HEADER ----------
      <div className="border rounded-md p-3 shadow-sm mb-4">
        <div className="text-xs text-gray-600 mb-1">AWB Number</div>

        <div className="flex items-center gap-2">
          <div className="bg-yellow-300 px-2 py-1 rounded text-sm font-medium min-w-[56px] text-center">
            {awb ? awb.slice(0, 3) : "098"}
          </div>

          <div className="bg-yellow-200 px-3 py-1 rounded text-sm font-medium">
            {awb ? awb.slice(3) : "49170704"}
          </div>
        </div>
      </div> */}

      {/* ---------- TAB HEADERS ---------- */}
      <div className="px-3 pt-2">
        <nav className="flex gap-2 text-sm">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-3 py-2 bg-white border rounded-t ${
              activeTab === "general" ? "text-blue-600 font-semibold" : "text-gray-600"
            }`}
          >
            General
          </button>

          <button
            onClick={() => setActiveTab("charges")}
            className={`px-3 py-2 bg-white border rounded-t ${
              activeTab === "charges" ? "text-blue-600 font-semibold" : "text-gray-600"
            }`}
          >
            Charges and Accounting
          </button>
        </nav>
      </div>

      {/* ---------- TAB CONTENT ---------- */}
      <div className="p-4">
        {activeTab === "general" && <GeneralTab data={data} />}
        {activeTab === "charges" && <ChargesTab />}
      </div>
    </div>
  );
}

/* ---------------------------------------------------
                GENERAL TAB
--------------------------------------------------- */
function GeneralTab({ data }: any) {
  return (
    <>
      {/* TOP ROW */}
      <div className="grid grid-cols-12 gap-4 items-center">

        <div className="col-span-2">
          <label className="text-xs text-gray-600">Origin *</label>
          <input className="w-full border rounded px-2 py-1" value={data.origin} readOnly />
        </div>

        <div className="col-span-2">
          <label className="text-xs text-gray-600">Destination *</label>
          <input className="w-full border rounded px-2 py-1" value={data.destination} readOnly />
        </div>

        <div className="col-span-3">
          <label className="text-xs text-gray-600">Routing *</label>
          <input className="w-full border rounded px-2 py-1" value={data.routing} readOnly />
        </div>

        <div className="col-span-3">
          <label className="text-xs text-gray-600">Requested Flight</label>
          <input className="w-full border rounded px-2 py-1" value={data.requestedFlight} readOnly />
        </div>

        <div className="col-span-1">
          <label className="text-xs text-gray-600">SCC</label>
          <input className="w-full border rounded px-2 py-1" value="GEN" readOnly />
        </div>

        <div className="col-span-1">
          <label className="text-xs text-gray-600">Product</label>
          <input className="w-full border rounded px-2 py-1" value="AGC" readOnly />
        </div>
      </div>

      <div className="h-4" />

      {/* AGENT DETAILS */}
      <div className="border rounded p-3 bg-gray-50">
        <div className="text-sm font-semibold mb-2">AGENT DETAILS</div>

        <div className="grid grid-cols-12 gap-4">

          <div className="col-span-2">
            <label className="text-xs text-gray-600">Code</label>
            <input className="w-full border rounded px-2 py-1" value={data.agentCode} readOnly />
          </div>

          <div className="col-span-5">
            <label className="text-xs text-gray-600">Name</label>
            <input className="w-full border rounded px-2 py-1" value={data.agentName} readOnly />
          </div>

          <div className="col-span-2">
            <label className="text-xs text-gray-600">IATA Code</label>
            <input className="w-full border rounded px-2 py-1" value={data.iataCode} readOnly />
          </div>

          <div className="col-span-2">
            <label className="text-xs text-gray-600">CASS Code</label>
            <input className="w-full border rounded px-2 py-1" value={data.cassCode} readOnly />
          </div>

          <div className="col-span-1 flex items-end">
            <button className="px-3 py-1 border rounded text-sm">Tax Info</button>
          </div>

        </div>
      </div>

      <div className="h-4" />

      {/* SHIPPER & CONSIGNEE */}
      <div className="grid grid-cols-12 gap-4">

        {/* SHIPPER */}
        <div className="col-span-6 border rounded p-3 bg-white">
          <div className="text-sm font-semibold mb-2">SHIPPER / CONSIGNEE DETAILS</div>

          <div className="text-xs text-gray-600 mb-1">
            Shipper : {data.shipper}
          </div>

          <div className="grid grid-cols-12 gap-2 mt-2">
            <div className="col-span-6">
              <label className="text-xs text-gray-600">Code *</label>
              <input className="w-full border rounded px-2 py-1" value="C1001" readOnly />
            </div>

            <div className="col-span-6">
              <label className="text-xs text-gray-600">A/C Number</label>
              <input className="w-full border rounded px-2 py-1" readOnly />
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 border rounded text-sm bg-gray-100">Capture Irregularity</button>
            <button className="px-3 py-1 border rounded text-sm">Split Shipment</button>
            <button className="px-3 py-1 border rounded text-sm">HAWB</button>
            <button className="px-3 py-1 border rounded text-sm">Accept</button>
          </div>
        </div>

        {/* CONSIGNEE */}
        <div className="col-span-6 border rounded p-3 bg-white">
          <div className="text-sm font-semibold mb-2">CONSIGNEE</div>

          <div className="text-xs text-gray-600 mb-1">
            Consignee : {data.consignee}
          </div>

          <div className="grid grid-cols-12 gap-2 mt-2">
            <div className="col-span-6">
              <label className="text-xs text-gray-600">Code *</label>
              <input className="w-full border rounded px-2 py-1" value="C1001" readOnly />
            </div>

            <div className="col-span-6">
              <label className="text-xs text-gray-600">A/C Number</label>
              <input className="w-full border rounded px-2 py-1" readOnly />
            </div>
          </div>

          <div className="mt-3 flex justify-end gap-2">
            <button className="px-3 py-1 border rounded text-sm bg-blue-600 text-white">View/Upload Files</button>
            <button className="px-3 py-1 border rounded text-sm bg-gray-200">Print</button>
            <button className="px-3 py-1 border rounded text-sm bg-blue-600 text-white">Send</button>
          </div>
        </div>

      </div>
    </>
  );
}

/* ---------------------------------------------------
                CHARGES TAB (FULL UI)
--------------------------------------------------- */
function ChargesTab() {
  return (
    <div className="px-2 text-sm">

      <div className="border p-3 rounded bg-white shadow-sm mb-5">
        <div className="font-semibold mb-2">
          Shipment Details — DEL → MEL | 8 pcs | 181 KG | GEN
        </div>

        {/* FIRST GRID */}
        <div className="grid grid-cols-12 gap-4 mb-3">

          <InputBox label="Currency" value="INR" />
          <InputBox label="Charge Code" value="PP" />
          <InputBox label="Payment Type *" value="PP" />
          <InputBox label="Insurance Amt" value="0.00" />
          <InputBox label="DV for customs" value="0.00" />
          <InputBox label="DV for carriage" value="0.00" />

        </div>

        {/* SECOND GRID */}
        <div className="grid grid-cols-12 gap-4 mb-3">
          <div className="col-span-3">
            <label className="text-xs text-gray-600">Rated Customer *</label>
            <input className="border rounded px-2 py-1 w-full" value="NIKKDELIN" readOnly />
          </div>

          <div className="col-span-3 flex items-end">
            <input type="checkbox" defaultChecked className="mr-2" />
            <span className="text-xs">Apply Higher Weight Break Rate</span>
          </div>
        </div>

        {/* THIRD GRID */}
        <div className="grid grid-cols-12 gap-4">

          <InputBox label="Date of Journey" value="29-OCT-2025" />
          <InputBox label="Unique Reference" value="" />
          <InputBox label="Spot Rate ID" value="" />
          <InputBox label="Construct Rate ID" value="0" />

        </div>
      </div>

      {/* RATING DETAILS TABLE */}
      <div className="font-semibold text-sm">RATING DETAILS</div>

      <div className="overflow-auto border rounded mt-2 text-xs bg-white">
        <table className="min-w-[1200px] border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {[
                "No of Pcs", "Weight", "Adjusted Weight", "RCP", "Rate Class",
                "Commodity", "IATA Code", "Service Code", "Chargeable Weight",
                "IATA Rate", "IATA Charge", "Volume", "Country of Origin",
                "ULD", "Description", "Rate/Pivot", "Net Charge"
              ].map((h, i) => (
                <th key={i} className="border px-2 py-1">{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              {[
                "8", "181", "0", "Q", "GEN", "-", "-", "-", "230",
                "330", "75,900.00", "1.38", "-", "NO",
                "SAID TO CONTAIN", "226.95", "52,198.50"
              ].map((v, i) => (
                <td key={i} className="border px-2 py-1">{v}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* CHARGE DETAILS */}
      <div className="mt-6 font-semibold text-sm">CHARGE DETAILS</div>

      <div className="border rounded p-3 bg-white mt-2">
        <div className="text-xs mb-3">
          Payment Type *
          <input className="border ml-2 rounded px-2 py-1 w-20" value="PP" readOnly />
        </div>

        <table className="min-w-full text-xs border-collapse border">
          <thead className="bg-gray-100">
            <tr>
              {["", "Code", "Charge Head Name", "Charge", "PP/CC", "Due Carrier", "Due Agent", "Remarks"]
                .map((h, i) => (
                  <th key={i} className="border px-2 py-1">{h}</th>
                ))}
            </tr>
          </thead>

          <tbody>
            {[["DT","DOCUMENTATION CHARGE","300.00","PP","✔","✔"],
              ["FL","HANDLING CHARGES OUTE","713.00","PP","✔","✔"]]
              .map((row, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1"><input type="checkbox" /></td>
                  <td className="border px-2 py-1">{row[0]}</td>
                  <td className="border px-2 py-1">{row[1]}</td>
                  <td className="border px-2 py-1">{row[2]}</td>
                  <td className="border px-2 py-1">{row[3]}</td>
                  <td className="border px-2 py-1">{row[4]}</td>
                  <td className="border px-2 py-1">{row[5]}</td>
                  <td className="border px-2 py-1"></td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACCOUNTING SUMMARY */}
      <div className="mt-6 flex justify-end">
        <div className="border rounded p-3 bg-white text-xs w-[350px] shadow-sm">

          <div className="font-semibold text-sm mb-2">Auto Compute Tax</div>

          <table className="min-w-full border-collapse">
            <tbody>

              <tr>
                <td className="border px-2 py-1">Prepaid</td>
                <td className="border px-2 py-1">Weight Charge</td>
                <td className="border px-2 py-1">Collect</td>
              </tr>

              <tr>
                <td className="border px-2 py-1">75,900.00</td>
                <td className="border px-2 py-1">0.00</td>
                <td className="border px-2 py-1">0.00</td>
              </tr>

              <tr>
                <td className="border px-2 py-1">9,743.65</td>
                <td className="border px-2 py-1">0.00</td>
                <td className="border px-2 py-1">0.00</td>
              </tr>

              <tr>
                <td className="border px-2 py-1">1,933.00</td>
                <td className="border px-2 py-1">0.00</td>
                <td className="border px-2 py-1">0.00</td>
              </tr>

              <tr className="font-semibold">
                <td className="border px-2 py-1">87,576.65</td>
                <td className="border px-2 py-1">Total</td>
                <td className="border px-2 py-1">0.00</td>
              </tr>

            </tbody>
          </table>

          <button className="mt-3 w-full bg-gray-200 py-1 rounded text-sm">
            Compute Total
          </button>

        </div>
      </div>

    </div>
  );
}

/* ----- SMALL HELPER COMPONENT FOR CLEANER UI ------ */
function InputBox({ label, value }: any) {
  return (
    <div className="col-span-2">
      <label className="text-xs text-gray-600">{label}</label>
      <input className="border rounded px-2 py-1 w-full" value={value} readOnly />
    </div>
  );
}
