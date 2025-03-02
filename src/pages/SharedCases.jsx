import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SharedCases() {
  return (
    <>
      <Navbar />
      <div className="background-circle circle-1 z-0"></div>
      <div className="background-circle circle-2 z-0"></div>
      <main className="px-4 md:px-16 py-8">
      <div className="min-h-screen bg-[#0A0821] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold text-yellow-500">Shared Cases</h1>
          </div>

          <div className="flex flex-col items-center justify-center h-[60vh]">
            <p className="text-gray-400 text-xl ">Currently No Shared Cases</p>
          </div>
        </div>
      </div>
      </main>
      
    </>
  );
}
