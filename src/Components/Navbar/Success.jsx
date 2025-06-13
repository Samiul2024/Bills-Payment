import React from "react";
import CountUp from "react-countup";
// import successLawyer from '../assets/success-doctor.png';
// import successCases from '../assets/success-patients.png';
// import successReview from '../assets/success-review.png';
// // import successStaffs from '../assets/success-staffs.png';
// import { FaUsers, FaAward, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const stats = [
    {
        number: 575000, title: "Happy Customers"
    },
    {
        number: 21, title: "Years in Banking"
    },
    { number: 350, title: "Sub Branches" },
    { number: 250, title: "Branches" },
    { number: 8250, title: "ATM & CRM" },
    { number: 5986, title: "Agent Outlets" },
];

const SuccessSection = () => {
    return (
        <>
            <section className="py-12 px-4 bg-amber-100 ">
                <div className="flex flex-col gap-4 px-6 text-center md:items-center pb-4">
                    
                </div>
                <div className="py-4">
                    <div className="max-w-6xl mx-auto  px-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-base-300 shadow-md rounded-2xl py-3 flex flex-col items-center text-center"
                                >
                                    <div className="text-blue-600 mb-3">{item.icon}</div>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        <CountUp end={item.number} duration={40} suffix="+" />
                                    </h2>
                                    <p className="mt-2 text-gray-600 text-lg">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SuccessSection;