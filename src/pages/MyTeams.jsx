import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

const MyTeams = () => {
  const [user, setUser] = useState({ name: "", email: "", contact: "" });
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }

    fetch("/api/team-members") // Api here
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Error fetching team members:", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="background-circle circle-1 z-0"></div>
      <div className="background-circle circle-2 z-0"></div>
      <main className="px-4 md:px-16 py-8">
        <div className="min-h-screen bg-transparent text-white p-4 md:p-14">
          <div className="flex items-center space-x-4">
            <Link to="/Dashboard">
              <div className="flex items-center md:ml-12">
                <ArrowLeft style={{ color: "white" }} />
                <h1 className="text-yellow-500 ml-4 font-bold text-3xl">
                  My Teams
                </h1>
              </div>
            </Link>
          </div>
          <div className="md:px-28 md:py-10 px-14 py-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Current User
            </h2>
            <div className="p-4 rounded-lg">
              <p className="flex justify-between">
                <strong className="text-white">Name:</strong>{" "}
                <span className="text-gray-400">{user.name}</span>
              </p>
              <p className="flex justify-between">
                <strong className="text-white">E-mail:</strong>{" "}
                <span className="text-gray-400">{user.email}</span>
              </p>
              <p className="flex justify-between">
                <strong className="text-white">Contact No:</strong>{" "}
                <span className="text-gray-400">{user.contact}</span>
              </p>
            </div>
            <h2 className="text-lg font-semibold text-white mt-6">
              Team Members
            </h2>
            {teamMembers.length > 0 ? (
              <ul className="text-gray-400">
                {teamMembers.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">Currently there is no Team Member</p>
            )}

            <div className="flex justify-center mt-6">
              <button className="bg-white text-black px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
                Manage Team
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyTeams;
