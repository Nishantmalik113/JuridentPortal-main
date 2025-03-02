import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="min-h-screen overflow-hidden py-10 sm:py-0  flex flex-col bg-[#060223] items-center justify-center relative">
        <img src="../ellipse-top.png" className='absolute rotate-27 right-[-25vw] top-[-20vh] sm:right-[-150px] sm:top-[-200px] ' alt="" />
        <img src="../ellipse-bottom.png" className='absolute sm:bottom-[-300px] bottom-[-20vh]' alt="" />
        <img src="../JURIDENT.png" className='absolute opacity-0 sm:opacity-[1] left-5' alt="" />
        <img src="../Jurident-Logo-bottom.png" className='absolute opacity-0 sm:opacity-[1] right-5 bottom-5' alt="" />
      {/* Pop-up Message */}
      {showPopup && (
        <div className="absolute top-20 bg-white text-black px-4 py-2 rounded-lg shadow-lg font-semibold">
          Selected as {selectedRole}
        </div>
      )}

      {/* Container for Image & Form (Centers content on large screens) */}
      <div className="grid sm:grid-cols-3 items-center justify-center">
        {/* Image Section */}
        <div className="flex flex-col items-center justify-center">
          <img src='../LawyerImage.png' alt="Lawyer" className=" w-[150px]" />
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-5 text-center w-full col-span-2 z-10">
          <h1 className="text-[#C99F4A] text-5xl font-bold mb-3">Welcome to Jurident!</h1>
          <div className="flex flex-col gap-5 text-center w-full px-10">
            <div className="grid grid-cols-2 gap-4 px-10 justify-center">
              <button
                className={`p-4 rounded-[15px] ${
                  selectedRole === "Lawyer/Student" ? "bg-[#C99F4A] text-black" : "bg-white text-black"
                }`}
                onClick={() => handleRoleSelection("Lawyer/Student")}
              >
                Lawyer / Student
              </button>
              <button
                className={`p-4 rounded-xl ${
                  selectedRole === "Client" ? "bg-[#C99F4A] text-black" : "bg-white text-black"
                }`}
                onClick={() => handleRoleSelection("Client")}
              >
                Client
              </button>
            </div>

            <div className="flex flex-col items-center px-10">
              <Link
                to={selectedRole === "Lawyer/Student" ? "/LawyerSignIn" : selectedRole === "Client" ? "/ClientSignIn" : "#"}
                className={`w-full py-4 text-center bg-blue-600 text-white rounded-xl mb-2 ${
                  selectedRole ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Login
              </Link>
              <Link
                to={selectedRole === "Lawyer/Student" ? "/LawyerSignUp" : selectedRole === "Client" ? "/ClientSignUp" : "#"}
                className={`w-full py-4 text-center bg-white text-black rounded-xl ${
                  selectedRole ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;