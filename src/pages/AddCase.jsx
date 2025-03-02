import React from "react";
import { ArrowLeft, Pencil, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddCase() {
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
                Add Case
              </h1>
            </div>
          </Link>
          <div className="flex justify-end space-x-4 mr-12">
            <button className="bg-[#060125] rounded-md border border-white text-white py-2 px-4">
              Save as Draft
            </button>
            <button className="bg-white text-[#060125] rounded-md py-2 px-4">
              Save
            </button>
          </div>
        </div>
        <div className="flex-grow mt-8 mb-12 flex items-center justify-center relative z-10">
          <div className=" bg-[#dddddd]/10 text-white p-5 w-3/4 rounded-[40px] min-h-full">
            <form className="min-h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center p-5 gap-[65px]">
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block mb-2">Case Status</label>
                    <select
                      name="caseStatus"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    >
                      <option>Choose Status</option>
                      <option>Pending</option>
                      <option>Disposed</option>
                    </select>
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Case Number</label>
                    <input
                      name="caseNumber"
                      type="text"
                      className="bg-[#060125] text-white p-2 rounded w-full outline-none"
                    />
                    <Pencil className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Case Type</label>
                    <input
                      name="caseType"
                      type="text"
                      className="bg-[#060125] text-white p-2 rounded w-full outline-none"
                    />
                    <Pencil className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Case Year</label>
                    <input
                      name="caseYear"
                      type="text"
                      className="bg-[#060125] text-white p-2 rounded w-full outline-none"
                    />
                    <Pencil className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Hearing Date</label>
                    <input
                      name="hearingDate"
                      type="date"
                      placeholder="Choose Date"
                      className="bg-[#060125] text-white w-full p-2 outline-none"
                    />
                    <Calendar className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Court</label>
                    <select
                      name="court"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    >
                      <option>Choose Court</option>
                      <option>Supreme Court</option>
                      <option>High Court</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="mb-4 relative">
                    <label className="block mb-2">Appearing for:</label>
                    <select
                      name="appearing"
                      className="bg-[#060125] text-[#676767] p-2 rounded w-full"
                    >
                      <option>Choose One</option>
                      <option>Supreme Court</option>
                      <option>High Court</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Petitioner Name</label>
                    <input
                      name="petitionerName"
                      type="text"
                      className="bg-[#060125] text-white p-2 rounded w-full outline-none"
                    />
                    <Pencil className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Respondent Name</label>
                    <input
                      name="respondentName"
                      type="text"
                      className="bg-[#060125] text-white p-2 rounded w-full outline-none"
                    />
                    <Pencil className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 relative">
                    <label className="block mb-2">Party Contact Number</label>
                    <input
                      name="partyContactNumber"
                      type="text"
                      className="bg-[#060125] text-white p-2 rounded w-full outline-none"
                    />
                    <Pencil className="absolute top-3/4 right-3 transform -translate-y-1/2 text-white" />
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-3">
                    <button className="bg-white text-[#060125] rounded-md py-2 px-2 font-bold">
                      Add Case Notes
                    </button>
                    <button className="bg-white text-[#060125] rounded-md py-2 px-2 font-bold">
                      Upload files
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

export default AddCase;
