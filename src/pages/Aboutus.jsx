import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Aboutus() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="background-circle circle-1 -z-10 "></div>
      <div className="background-circle circle-2 -z-10 "></div>
      <Navbar/>

      <div className="relative bg-[#CDA454] py-4 mb-6">
          <Link to="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-center font-semibold text-white text-2xl ">About Us</h1>
        </div>
      
      <div className=" px-4 sm:px-6 py-8">
        

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Vision Section */}
          <div>
            <h2 className="text-[#CDA454] text-2xl font-semibold mb-3">VISION</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis finibus 
              congue. Vestibulum ornare tellus ut efficitur posuere. Praesent sodales vitae 
              eros eu auctor. Aenean sit amet ultrices dolor. Etiam ullamcorper porttitor 
              justo vitae rutrum.
            </p>
          </div>

          {/* Goal Section */}
          <div>
            <h2 className="text-[#CDA454] text-2xl font-semibold mb-3">GOAL</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis finibus 
              congue. Vestibulum ornare tellus ut efficitur posuere. Praesent sodales vitae 
              eros eu auctor. Aenean sit amet ultrices dolor. Etiam ullamcorper porttitor 
              justo vitae rutrum.
            </p>
          </div>

          {/* Additional Content */}
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis finibus 
              congue. Vestibulum ornare tellus ut efficitur posuere. Praesent sodales vitae 
              eros eu auctor. Aenean sit amet ultrices dolor. Etiam ullamcorper porttitor 
              justo vitae rutrum.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis finibus 
              congue. Vestibulum ornare tellus ut efficitur posuere. Praesent sodales vitae 
              eros eu auctor. Aenean sit amet ultrices dolor. Etiam ullamcorper porttitor 
              justo vitae efficitur posuere. Praesent sodales vitae eros eu auctor. Aenean 
              sit amet ultrices dolor. Etiam ullamcorper porttitor justo vitae rutrum.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutus;