import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Feedback() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>

      <div className="container mx-auto px-6 py-8 max-w-xl">
        <div className="bg-[#1a1a2e] rounded-xl p-8">
          <h2 className="text-xl font-semibold text-[#CDA454] text-center mb-8">
            Feedback Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">First Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#0a051e] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#CDA454]"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Last Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#0a051e] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#CDA454]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0a051e] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#CDA454]"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Phone number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-[#0a051e] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-[#CDA454]"
                />
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Feedback</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"
                className="w-full bg-[#0a051e] border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-[#CDA454]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#CDA454] text-white py-2 rounded-lg hover:bg-[#c49b2f] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback; 