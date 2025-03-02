import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Faq() {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const faqs = [
    {
      id: 1,
      question: "What legal services are offered on this app?",
      answer:
        "Jurident facilitates access to a wide range of legal services, covering areas such as family law, criminal defense, business law, and more. The app connects you with experienced lawyers across various specialties to meet your specific needs.",
    },
    {
      id: 2,
      question: "How do I communicate with a lawyer on this app?",
      answer:
        "Communicating with a lawyer on Jurident is straightforward. Utilize the secure in-app messaging system to discuss your case, share documents, and receive timely updates. This ensures efficient and confidential communication between you and your legal professional.",
    },
    {
      id: 3,
      question: "How much does this app cost?",
      answer:
        "Jurident offers flexible pricing plans tailored to your legal requirements. The cost varies based on the complexity of services needed. You can find detailed pricing information on our website or within the app.",
    },
    {
      id: 4,
      question: "Is my information secure on this app?",
      answer:
        "Absolutely. Jurident prioritizes the security and confidentiality of your information. We employ advanced encryption and security measures to safeguard your data, ensuring a safe and protected environment for all users.",
    },
    {
      id: 5,
      question: "Can I use this app if I am outside the US?",
      answer:
        "Availability and scope of services vary by location, so please contact us to discuss your specific legal needs.",
    },
  ];

  const toggleQuestion = (id) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(id)) {
      newOpenQuestions.delete(id);
    } else {
      newOpenQuestions.add(id);
    }
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>
      <main className="px-4 md:px-16 py-8">
      <h1 className="text-2xl font-semibold text-center py-4 bg-[#CDA454] mb-8">
        Frequently Asked Questions (FAQs)
      </h1>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-8 max-w-3xl">
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-2xl">
                  {openQuestions.has(faq.id) ? "−" : "+"}
                </span>
              </button>

              {openQuestions.has(faq.id) && (
                <div className="px-6 py-4 bg-white/5">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Query Input */}
        <div className="mt-12">
          <p className="text-sm text-gray-400 mb-4">
            *For any queries please send to us
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write your query"
              className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:outline-none focus:border-[#CDA454]"
            />
            <button className="p-2 bg-[#CDA454] rounded-lg">
              <svg
                className="w-6 h-6 transform rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11h2v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Faq;
