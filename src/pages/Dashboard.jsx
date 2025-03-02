import { Link } from "react-router-dom";
import {
  Files,
  PlusCircle,
  Users,
  FileText,
  Calendar,
  HelpCircle,
  Settings,
  AppWindow,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="space-y-2">
        <div className="p-12">
          <div className="background-circle circle-1 z-0"></div>
          <div className="background-circle circle-2 z-0"></div>

          <div className="flex justify-end items-center mb-5">
            <div className="relative w-64 max-w-md">
              <input
                type="text"
                placeholder="Search a Lawyer"
                className="w-full bg-gray-800 rounded-lg py-2 px-4 text-white"
              />
              <button className="absolute right-3 top-2.5">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-8 items-center mb-6 p-6 md:flex-row">
            <Link
              to="/pendingcases"
              className="bg-white bg-opacity-80 rounded-lg p-6 hover:bg-opacity-60 transition cursor-pointer text-center w-96"
            >
              <h3 className="text-black text-2xl mb-2">Pending Cases</h3>
              <p className="text-black text-3xl font-bold">2</p>
            </Link>
            <Link
              to="/disclosedcases"
              className="bg-white bg-opacity-80 rounded-lg p-6 hover:bg-opacity-60 transition cursor-pointer text-center w-96"
            >
              <h3 className="text-2xl mb-2 text-black">Disclosed Cases</h3>
              <p className="text-3xl font-bold text-black">2</p>
            </Link>
          </div>

          <section>
            <h2 className="text-2xl font-bold mt-4 mb-8 text-center">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center ml-18 mr-18 px-10 mb-6">
              <div className="pl-7 pr-7">
                <Link
                  to="/allcases"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 px-6 py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <Files className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>All Cases</span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/addcase"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <PlusCircle className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>Add Cases</span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/MyTeams"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <Users className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>My Teams</span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/sharedcases"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <FileText className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>Shared Cases</span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/tasksevents"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <Calendar className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>Tasks & Events</span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/juridentassistence"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <Settings className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>Jurident Assitence </span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/faq"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <HelpCircle className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>FAQ ?</span>
                  </div>
                </Link>
              </div>
              <div className="pl-7 pr-7">
                <Link
                  to="/MyFiles"
                  className="bg-gray-800 rounded-lg md:px-6 md:py-6 flex items-center space-x-4 hover:bg-gray-700 transition w-full"
                >
                  <AppWindow className="w-8 h-8 text-blue-400" />
                  <div className="flex-1 justify-center text-center">
                    <span>MyFiles</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
