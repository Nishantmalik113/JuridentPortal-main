import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

function CaseDetails() {
  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-12">
        <div className="background-circle circle-1 z-0"></div>
        <div className="background-circle circle-2 z-0"></div>

        <div className="flex items-center justify-between mb-8">
          <Link to="/allcases" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link to="/case/:id/edit">
            <button className="bg-white text-black px-4 py-2 rounded-lg">
              Edit Case Details
            </button>
          </Link>
        </div>

        <div className="bg-[#1E1E45] rounded-lg p-6 md:p-12 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="/casedetails">
                <label className="block text-gray-400 mb-1">Case Number</label>
                <input
                  type="text"
                  value="123456789"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Case Name</label>
                <input
                  type="text"
                  value="Criminal Case"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Hearing Date</label>
                <input
                  type="text"
                  value="00/00/0000"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Court Name</label>
                <input
                  type="text"
                  value="High Court"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">Party Contact Number</label>
                <input
                  type="text"
                  value="123456789"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Respondent Name</label>
                <input
                  type="text"
                  value="John Doe"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Petitioner Name</label>
                <input
                  type="text"
                  value="Jane Smith"
                  disabled
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row md:flex-row justify-end space-x-0 md:space-x-4 mt-8 gap-2 md:gap-2 ">
            <button className="bg-white text-black px-6 py-2 rounded-lg mb-2 md:mb-0">Allow Access</button>
            <Link to="/case/:id/notes">
              <button className="bg-white text-black px-6 py-2 rounded-lg mb-2 md:mb-0">Case Notes</button>
            </Link>
            <button className="bg-white text-black px-6 py-2 rounded-lg mb-2 md:mb-0">Case Files</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;