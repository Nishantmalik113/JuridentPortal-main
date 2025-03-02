import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B26]">
      <Header/>
      <div className="background-circle circle-1 -z-10"></div>
      <div className="background-circle circle-2 -z-10"></div>

      
      <div className="relative bg-[#CDA454] py-4 mb-6">
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-center font-semibold text-white text-2xl ">Contact Us</h1>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-4xl bg-[#1E1E45] rounded-2xl p-6 sm:p-10">
          {/* Description */}
          <p className="text-white/80 text-center mb-8 sm:mb-12">
            Please choose what types of support do you need and let us know.
          </p>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Support Chat */}
            <div className="bg-[#2A2A55] p-6 rounded-xl flex flex-col items-center hover:bg-[#2A2A55]/80 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">Support Chat</h3>
              <p className="text-white/60 text-sm text-center">24/7 Online Support</p>
            </div>

            {/* Call Center */}
            <div className="bg-[#2A2A55] p-6 rounded-xl flex flex-col items-center hover:bg-[#2A2A55]/80 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">Call Center</h3>
              <p className="text-white/60 text-sm text-center">24/7 Customer Service</p>
            </div>

            {/* Email */}
            <div className="bg-[#2A2A55] p-6 rounded-xl flex flex-col items-center hover:bg-[#2A2A55]/80 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">Email</h3>
              <p className="text-white/60 text-sm text-center">jurident@gmail.com</p>
            </div>

            {/* FAQ */}
            <div className="bg-[#2A2A55] p-6 rounded-xl flex flex-col items-center hover:bg-[#2A2A55]/80 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                </svg>
              </div>
              <h3 className="text-white font-medium mb-2">FAQ</h3>
              <p className="text-white/60 text-sm text-center">+55 Answers</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;