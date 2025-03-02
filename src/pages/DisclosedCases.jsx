import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const disclosedCases = [
  {
    id: "23-FA-234600",
    name: "Property Case",
    partyName: "Jane Smith",
    status: "Disclosed",
    disclosureDate: "2024-03-01",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234601",
    name: "Family Case",
    partyName: "Robert Johnson",
    status: "Disclosed",
    disclosureDate: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

function DisclosedCases() {
  return (
    <>
      <Navbar />
      <div className="p-12">
        <div className="background-circle circle-1 z-0"></div>
        <div className="background-circle circle-2 z-0"></div>
        <main className="px-4 md:px-16 py-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-start w-full mb-8">
              <Link to="/Dashboard" className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mb-10 mt-1">
              <Link
                to="/pendingcases"
                className="bg-white bg-opacity-80 rounded-lg p-6 hover:bg-opacity-60 transition cursor-pointer text-center w-96"
              >
                <h3 className="text-black text-2xl mb-2">Pending Cases</h3>
                <p className="text-black text-3xl font-bold">2</p>
              </Link>
              <Link
                to="/disclosedcases"
                className="bg-yellow-300 bg-opacity-60 rounded-lg p-6 hover:bg-opacity-80 transition cursor-pointer text-center w-96"
              >
                <h3 className="text-xl mb-2 text-white">Disclosed Cases</h3>
                <p className="text-3xl font-bold text-white">2</p>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-24">
            {disclosedCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                to={`/case/${caseItem.id}`}
                className="bg-[#37376e] rounded-lg p-3 hover:bg-gray-700 transition max-w-max pl-4 pr-20"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={caseItem.image}
                    alt={caseItem.name}
                    className="size-[73px] rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-400">
                      Case Number: {caseItem.id}
                    </p>
                    <p className="font-medium">{caseItem.name}</p>
                    <p className="text-sm text-gray-400">
                      Party Name: {caseItem.partyName}
                    </p>
                    <p className="text-sm text-green-500">
                      Disclosed on: {caseItem.disclosureDate}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default DisclosedCases;
