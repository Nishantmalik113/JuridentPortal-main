// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { useState } from 'react';

// function Profile() {
//   const [settings, setSettings] = useState({
//     phoneNumber: true,
//     email: true,
//     lawyerId: true,
//     location: true,
//     googleCalendar: false
//   });

//   const [userInfo, setUserInfo] = useState({
//     name: 'Rohan',
//     type: 'Lawyer',
//     practiceAs: 'Individual',
//     phoneNumber: '+91 - 0123456789',
//     lawDegree: 'B.Sc.LLB',
//     practiceType: 'Civil',
//     enrollmentId: 'Code / ID / Year',
//     email: 'example@gmail.com',
//     address: 'Hyderabad, Telangana'
//   });

//   const toggleSetting = (setting) => {
//     setSettings(prev => ({
//       ...prev,
//       [setting]: !prev[setting]
//     }));
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col">
//       <Navbar />
//       <div className="background-circle circle-1 z-0"></div>
//       <div className="background-circle circle-2 z-0"></div>

//       <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 max-w-5xl">
//         {/* Personal Information Card */}
//         <div className="bg-white/5 backdrop-blur-md w-full z-10 rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">
//           <h2 className="text-xl font-semibold text-[#CDA454] mb-4 sm:mb-6">Personal Information</h2>
          
//           {/* Profile Image */}
//           <div className="relative mb-6">
//             <img 
//               src="https://placekitten.com/100/100" 
//               alt="Profile" 
//               className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto sm:mx-0"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {/* Left Column */}
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm text-gray-400">Lawyer Name*</label>
//                 <div className="text-white bg-[#06030f] p-2 rounded-md text-sm sm:text-base">{userInfo.name}</div>
//               </div>
//               <div>
//                 <label className="text-sm text-gray-400">Practice as*</label>
//                 <div className="text-white bg-[#06030f] p-2 rounded-md text-sm sm:text-base">{userInfo.practiceAs}</div>
//               </div>
//               <div>
//                 <label className="text-sm text-gray-400">Phone Number</label>
//                 <div className="text-white bg-[#06030f] p-2 rounded-md text-sm sm:text-base">{userInfo.phoneNumber}</div>
//               </div>
//             </div>

//             {/* Middle Column */}
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm text-gray-400">Lawyer or Law student*</label>
//                 <select className="w-full bg-[#06030f] rounded-md p-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#CDA454]">
//                   <option value="lawyer">{userInfo.type}</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="text-sm text-gray-400">Law Degree</label>
//                 <select className="w-full bg-[#06030f] rounded-md p-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#CDA454]">
//                   <option value="bsc">{userInfo.lawDegree}</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="text-sm text-gray-400">Type</label>
//                 <select className="w-full bg-[#06030f] rounded-md p-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#CDA454]">
//                   <option value="civil">{userInfo.practiceType}</option>
//                 </select>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm text-gray-400">Enrollment ID</label>
//                 <div className="text-white bg-[#06030f] p-2 rounded-md text-sm sm:text-base">{userInfo.enrollmentId}</div>
//               </div>
//               <div>
//                 <label className="text-sm text-gray-400">Email</label>
//                 <div className="text-white bg-[#06030f] p-2 rounded-md text-sm sm:text-base">{userInfo.email}</div>
//               </div>
//               <div>
//                 <label className="text-sm text-gray-400">Address</label>
//                 <div className="text-white bg-[#06030f] p-2 rounded-md text-sm sm:text-base">{userInfo.address}</div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
//             <button className="w-full sm:w-auto px-6 py-2 bg-[#CDA454] rounded-md hover:bg-[#c49b2f] transition-colors text-sm sm:text-base">
//               Save Changes
//             </button>
//             <button className="w-full sm:w-auto px-6 py-2 bg-[#4a4a4a] rounded-md hover:bg-[#3a3a3a] transition-colors text-sm sm:text-base">
//               Logout
//             </button>
//             <button className="w-full sm:w-auto px-6 py-2 bg-red-500 rounded-md hover:bg-red-600 transition-colors text-sm sm:text-base">
//               Delete Account
//             </button>
//           </div>
//         </div>

//         {/* Settings Section */}
//         <div className="backdrop-blur-md z-10 mx-auto max-w-2xl px-4 sm:px-8 rounded-xl p-4 sm:p-8">
//           <h2 className="text-lg sm:text-xl font-semibold mb-2">Settings</h2>
//           <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">Choose what you want to show to other lawyers and users</p>

//           <div className="space-y-3 sm:space-y-4">
//             {Object.entries(settings).map(([key, value]) => (
//               <div key={key} className="flex items-center justify-between p-3 sm:p-4 bg-[#06030f] rounded-lg">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <span className="text-base sm:text-lg">
//                     {key === 'phoneNumber' && '📱'}
//                     {key === 'email' && '✉️'}
//                     {key === 'lawyerId' && '🆔'}
//                     {key === 'location' && '📍'}
//                     {key === 'googleCalendar' && '📅'}
//                   </span>
//                   <span className="capitalize text-sm sm:text-base">
//                     {key === 'lawyerId' ? 'Lawyer ID' : 
//                      key === 'googleCalendar' ? 'Google Calendar Access' : 
//                      key}
//                   </span>
//                 </div>
//                 <button 
//                   onClick={() => toggleSetting(key)}
//                   className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
//                     value ? 'bg-[#CDA454]' : 'bg-gray-600'
//                   }`}
//                 >
//                   <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
//                     value ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
//                   }`} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Profile; 