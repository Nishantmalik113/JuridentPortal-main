import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Refunds() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>

      <h1 className="text-2xl font-semibold text-center py-4 bg-[#CDA454] mb-8">
          Refunds And Cancellation
        </h1>

      {/* Refunds Section */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
      

        <div className="space-y-8">
          <h2 className="text-[#CDA454] text-2xl font-semibold">Cancellation and Refund Policy</h2>
          
          <div className="space-y-6">
            <h3 className="font-semibold">Jurident's Internship Placement & Lawyer Subscription Plans</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Cancellation Period:</h4>
                <p className="text-gray-300">
                  Registrants in both internship placement plans and lawyer subscription plans have the right to cancel 
                  their registration within 24 hours of payment, provided that the internship placement process or 
                  subscription access has not commenced. No cancellation fees will be charged if cancelled within this 
                  period.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Refund Policy:</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">For Law Graduates (Internship Placement Plans):</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>6 Month Plan (Rs.15,000) and 12 Month Plan (Rs.20,000): Provide assistance in securing internship placements for 6 months and 12 months, respectively.</li>
                      <li>If Jurident fails to secure an internship placement due to our shortcomings, a full refund will be issued.</li>
                      <li>No refund will be provided if the student is unsuccessful in securing an internship due to performance during interviews or application processes. However, Jurident will continue its efforts to place the student at 3 law firms with a lawyer.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold">For Lawyers (Subscription Plans):</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>Yearly Plan (Rs.5,000), 6-Month Plan (Rs.2,500), 3-Month Plan (Rs.1,250), and Monthly Plan (Rs.500) provide set-time access and additional features.</li>
                      <li>If the subscription is cancelled within 24 hours, a full refund will be issued.</li>
                      <li>No refunds will be provided once the subscription has started and features have been accessed.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Process for Cancellation:</h4>
                <p className="text-gray-300">
                  To cancel a registration or subscription, participants must contact our customer support team via 
                  email at <a href="mailto:juridentv1@gmail.com" className="text-[#CDA454]">juridentv1@gmail.com</a>. Our team is available Monday to Friday, 9 am to 5 pm.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Unforeseen Circumstances:</h4>
                <p className="text-gray-300">
                  Jurident reserves the right to cancel or delay any service due to unforeseen circumstances, such as 
                  technical issues, partner law firm availability, or force/force majeure. In such cases, participants will be 
                  notified, and a refund may be issued.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Legal Compliance:</h4>
                <p className="text-gray-300">
                  This policy is subject to all applicable local, state, and federal laws and regulations governing 
                  cancellations and refunds for online services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Terms Changes:</h4>
                <p className="text-gray-300">
                  Jurident reserves the right to modify this policy at any time without prior notice. 
                  Changes will be communicated via email to registered participants.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Contact Information:</h4>
                <p className="text-gray-300">
                  For inquiries or assistance, please contact our support team at juridentv1@gmail.com, Monday to 
                  Friday, 9 am to 5 pm.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Arbitration:</h4>
                <p className="text-gray-300">
                  Any disputes arising out of or related to this policy shall be resolved through arbitration in accordance 
                  with the rules of arbitration in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Refunds; 