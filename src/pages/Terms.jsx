import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Terms() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navbar className="z-10" />
      <div className="background-circle circle-1 -z-10"></div>
      <div className="background-circle circle-2 -z-10"></div>

      <h1 className="text-2xl font-semibold text-center py-4 bg-[#CDA454] mb-8">
          Terms And Conditions
        </h1>

      {/* Terms Section */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
       

        <div className="space-y-6">
          {/* Last Updated Section */}
          <div className="flex gap-2 mb-8">
            <p>Last updated on January 01, 2024</p>
            <p className="text-[#CDA454]">AGREEMENT TO OUR LEGAL TERM</p>
          </div>

          {/* Terms Content */}
          <div className="space-y-6 text-gray-300">
            <p>
              We are Valsco Technology Private Limited ('Company', 'we', 'us', or 'our'), a company registered in 
              India at J-3 SHAHABDI ENCLAVE NOIDA UTTAR PRADESH 201301 IN, Noida, Uttar Pradesh 201301.
            </p>

            <p>
              We operate the website <a href="http://www.jurident.com" className="text-[#CDA454]">http://www.jurident.com</a> (the 'Site'), 
              the mobile application <span className="text-[#CDA454]">Jurident</span> (the 'App'), as well as any other related products and 
              services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
            </p>

            <p>
              Jurident is a cutting-edge mobile application designed to revolutionize legal professionals' 
              productivity. Jurident empowers lawyers to manage their workflow and streamline their practices 
              efficiently. Our vision is to redefine how legal work is conducted, making it easier for lawyers to stay 
              organized, collaborate effectively, and connect with clients while providing a centralized platform for 
              legal tasks.
            </p>

            <p>
              You can contact us by email at valscotech@gmail.com, or by mail to J-3 SHAHABDI ENCLAVE NOIDA 
              UTTAR PRADESH 201301 IN, Noida, Uttar Pradesh 201301, India.
            </p>

            <p>
              These Legal Terms constitute a legally binding agreement made between you, whether personally or 
              on behalf of an entity ('you'), and Valsco Technology Private Limited, concerning your access to and 
              use of the Services. You agree that by accessing the Services, you have read, understood, and agreed 
              to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN 
              YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE 
              IMMEDIATELY.
            </p>

            <p>
              We will provide you with prior notice of any scheduled changes to the Services you are using. The 
              modified Legal Terms will become effective upon posting or notifying you by juridentv1@gmail.com, 
              as stated in the email message. By continuing to use the Services after the effective date of any 
              changes, you agree to be bound by the modified terms.
            </p>

            <p>
              The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not 
              permitted to use or register for the Services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms; 