import React, { useState, useEffect } from "react";
import { Filter, Search, ArrowLeft, User, Building, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'

// Mock data for cases
const caseData = [
  {
    id: "23-FA-234598",
    type: "Criminal Case",
    partyName: "Sambashiva Rao",
    court: "Supreme Court",
  },
  {
    id: "22-FA-123456",
    type: "Criminal Case",
    partyName: "Rajesh Kumar",
    court: "High Court",
  },
  {
    id: "21-FA-987654",
    type: "Civil Case",
    partyName: "Priya Sharma",
    court: "District Court",
  },
  {
    id: "23-FA-456789",
    type: "Criminal Case",
    partyName: "Vikram Singh",
    court: "Supreme Court",
  },
  {
    id: "22-FA-345678",
    type: "Civil Case",
    partyName: "Ananya Patel",
    court: "High Court",
  },
  {
    id: "21-FA-234567",
    type: "Criminal Case",
    partyName: "Sambashiva Rao",
    court: "District Court",
  },
  {
    id: "23-FA-876543",
    type: "Civil Case",
    partyName: "Kiran Reddy",
    court: "Supreme Court",
  },
  {
    id: "22-FA-765432",
    type: "Criminal Case",
    partyName: "Meera Desai",
    court: "High Court",
  },
  {
    id: "21-FA-654321",
    type: "Criminal Case",
    partyName: "Sambashiva Rao",
    court: "District Court",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filteredCases, setFilteredCases] = useState(caseData);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search");

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredCases(caseData);
      return;
    }

    let filtered = caseData;

    if (filterType === "court") {
      filtered = caseData.filter((item) =>
        item.court.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (filterType === "name") {
      filtered = caseData.filter((item) =>
        item.partyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // Default search across all fields
      filtered = caseData.filter(
        (item) =>
          item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.partyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.court.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCases(filtered);
  }, [searchQuery, filterType]);

  const handleFilterSelect = (type) => {
    setFilterType(type);
    setShowFilterOptions(false);

    if (type === "court") {
      setSearchPlaceholder("Search by court name");
    } else if (type === "name") {
      setSearchPlaceholder("Search by party name");
    }

    // Focus on search input after selecting filter
    document.getElementById("search-input").focus();
  };

  return (
    <div className="min-h-screen bg-[#0c0a29] text-white relative">
      <Navbar/>
      <div className="background-circle circle-1 z-0"></div>
      <div className="background-circle circle-2 z-0"></div>
      <main className="px-4 md:px-16 py-8">
        {/* Page Title */}
        <div className="flex items-center mb-6">
          <Link to="/Dashboard">
            <div className="flex items-center md:ml-12">
              <ArrowLeft style={{ color: "white" }} />
              <h1 className="text-yellow-500 ml-4 font-bold text-3xl">
                All Case
              </h1>
            </div>
          </Link>
        </div>

        <div className="md:p-18">
          {/* Search and Filter */}
          <div className="px-6 py-4 flex justify-end relative">
            <div className="relative flex items-center w-full max-w-md">
              <button
                className="absolute left-0 flex items-center text-gray-400 p-3"
                onClick={() => setShowFilterOptions(true)}
              >
                <Filter className="h-5 w-5 text-yellow-500" />
                <span className="ml-2 text-lg text-yellow-500">Filter</span>
              </button>

              <div className="w-full ml-24">
                <div className="relative rounded-full bg-gray-800 flex items-center">
                  <Search className="absolute left-3 text-gray-400" />
                  <input
                    id="search-input"
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-full py-3 pl-10 pr-4 bg-gray-800 rounded-full focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Filter Options Modal */}
            {showFilterOptions && (
              <div className="absolute top-16 right-6 bg-white text-black rounded-lg p-6 shadow-lg z-10 w-72">
                <h3 className="text-2xl font-bold mb-6">Filter Options</h3>

                <div
                  className="flex items-center p-3 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => handleFilterSelect("court")}
                >
                  <Building className="mr-4" />
                  <span className="text-lg">Court</span>
                </div>

                <div
                  className="flex items-center p-3 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => handleFilterSelect("name")}
                >
                  <User className="mr-4" />
                  <span className="text-lg">Name</span>
                </div>

                <div className="mt-6 text-right">
                  <button
                    className="text-purple-400 text-lg"
                    onClick={() => setShowFilterOptions(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:px-12">
          {/* Case Cards */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                to={`/case/${caseItem.id}`}
                className="block bg-[#1e1b4b] rounded-lg p-4 hover:bg-[#2d2a5a] transition-colors duration-200"
              >
                <div className="flex">
                  <div className="mr-4 flex items-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Scale size={48} color="#FFD700" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400">Case Number: {caseItem.id}</p>
                    <h3 className="text-xl font-bold">{caseItem.type}</h3>
                    <p>Party Name: {caseItem.partyName}</p>
                    <p>Court: {caseItem.court}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-purple-900 rounded-full opacity-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-purple-900 rounded-full opacity-10 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
    </div>
  );
}

export default App;
