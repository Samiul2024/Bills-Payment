import { useState } from "react";

const faqData = [
  {
    question: "Which bills can I pay using this platform?",
    answer: "You can pay electricity, gas, water, internet, and mobile recharge bills through our website. We are continuously adding more services."
  },
  {
    question: "Is it safe to use my card or mobile banking here?",
    answer: "Yes. We use end-to-end encryption and comply with industry security standards to protect your personal and payment information."
  },
  {
    question: "Do I need to create an account to pay a bill?",
    answer: "Yes. Creating an account helps you track your payments, download receipts, and get instant payment confirmations."
  },
  {
    question: "How long does it take for my payment to process?",
    answer: "Most payments are processed instantly. In rare cases, it may take up to 24 hours depending on the service provider."
  },
  {
    question: "What should I do if my payment fails?",
    answer: "If your payment fails but money is deducted, please contact our 24/7 support team with your transaction ID. We will resolve the issue promptly."
  },
  {
    question: "Is there any extra charge for using this service?",
    answer: "We charge a small convenience fee on some transactions. The exact amount is displayed before you confirm your payment."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-12 bg-base-200">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-2xl hover:shadow-lg transition cursor-pointer"
          >
            <div
              className="p-5 flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <span className="text-blue-500 text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-5 pb-5 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
