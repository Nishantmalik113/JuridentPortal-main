import React, { useState } from "react";
import { ArrowLeft, Pencil, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Cases() {

    const [courtcode, setCourtcode] = useState('')
    const [stateCode, setStateCode] = useState('')
    const [court_complex_code, setCourt_complex_] = useState('')
    const [status, setStatus] = useState('')
    const [petName, setPetName] = useState('')
    const [regYear, setRegYear] = useState('')



  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="px-4 md:px-16 py-8">
        <div className="background-circle circle-1 z-0"></div>
        <div className="background-circle circle-2 z-0"></div>
        <div className="relative z-10 grid grid-cols-2 items-center p-4">
          <Link to="/Dashboard">
            <div className="flex items-center md:ml-12">
              <ArrowLeft style={{ color: "white" }} />
              <h1 className="text-yellow-500 ml-4 font-bold text-3xl">
                Search Cases
              </h1>
            </div>
          </Link>

        </div>
        <div className="flex-grow mt-8 mb-12 flex items-center justify-center relative z-10">
          <div className=" bg-[#dddddd]/10 text-white p-5 w-3/4 rounded-[40px] max-w-sm">
            <form className="">
              <div className="flex flex-col items-center p-5 gap-[65px]">
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block mb-2">Court Name/ID</label>
                    <select
                    value={courtcode}
                    onChange={(e)=>{setCourtcode(e.target.value)}}
                      name="CourtName"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    >
                      <option>Choose Court</option>
                      <option>Pending</option>
                      <option>Disposed</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Bench Name</label>
                    <select
                    value={stateCode}
                    onChange={(e)=>{setStateCode(e.target.value)}}
                      name="caseStatus"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    >
                      <option>Choose Bench</option>
                      <option>Pending</option>
                      <option>Disposed</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Petitioner Name</label>
                    <input
                    value={petName}
                    onChange={(e)=>{setPetName(e.target.value)}}
                      name="caseStatus"
                      type="text"
                      placeholder="Name"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Case Status</label>
                    <select
                    value={status}
                    onChange={(e)=>{setStatus(e.target.value)}}
                      name="caseStatus"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    >
                      <option>Status</option>
                      <option>Pending</option>
                      <option>Disposed</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div className="mb-4 flex flex-col items-center justify-center gap-3">
                    <button className="bg-white text-[#060125] rounded-md py-2 px-5 font-bold">
                      Search Cases
                    </button>
                  </div>
                  </div>
                  </div>
            </form>
            </div>
          </div>
      </main>
    </div>
  );
}

export default Cases;
