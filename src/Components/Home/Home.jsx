import React, { useState } from 'react';
import SwiperCarousel from '../SwiperCarousel';
// import PhonesContainer from '../PhonesContainer';
import { useLoaderData } from 'react-router';
import Footer from '../Footer/Footer';
import FAQSection from '../FAQ/Faq';
import SuccessSection from '../Navbar/Success';

const Home = () => {
    // const data = useLoaderData();
    // const [phones, setPhones] = useState(data);


    return (
        <div>
            <h2 className='text-7xl text-center font-bold text-green-900 p-16'>sBanking</h2>
            <p className='text-3xl text-center text-blue-950 p-4'> Your Trusted One stop Online Banking Solution.</p>
            <SwiperCarousel />
            {/* Services section start*/}
            <div className="our-services bg-base-300 mt-8 px-8 text-center py-8">
                <h1 className="text-3xl font-bold mb-6">Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="service-item bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                        Electricity Bill Payment
                    </div>
                    <div className="service-item bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                        Gas Bill Payment
                    </div>
                    <div className="service-item bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                        Water Bill Payment
                    </div>
                    <div className="service-item bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                        Internet Bill Payment
                    </div>

                </div>
            </div>
            {/* Services section end */}

            {/* Feature section start */}
            <div className="why-choose-us text-center px-8 py-12 bg-blue-50">
                <h1 className="text-3xl font-bold mb-8">Why Choose Us</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="feature-item bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">Secure Payments</h2>
                        <p className="text-gray-600">Your transactions are encrypted and 100% safe with us.</p>
                    </div>
                    <div className="feature-item bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">Fast Processing</h2>
                        <p className="text-gray-600">Instant bill confirmation and payment processing.</p>
                    </div>
                    <div className="feature-item bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
                        <p className="text-gray-600">We’re here for you anytime you need help or have questions.</p>
                    </div>
                </div>
            </div>
            {/* Feature section end */}

            {/* testimonial Section start */}
            <div className="testimonials px-4 bg-gray-50 py-12">
                <h1 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h1>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    <div className="testimonial p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-gray-700 mb-4 italic">"Paying my electricity bill has never been easier! Quick, safe, and very user-friendly."</p>
                        <h3 className="font-semibold">— Fatima Rahman</h3>
                        <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                    </div>
                    <div className="testimonial p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-gray-700 mb-4 italic">"Excellent service and 24/7 support. Highly recommend for hassle-free bill payments."</p>
                        <h3 className="font-semibold">— Arif Hossain</h3>
                        <p className="text-sm text-gray-500">Chittagong, Bangladesh</p>
                    </div>
                    <div className="testimonial p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-gray-700 mb-4 italic">"Great platform! Paying my water and internet bills online saved me so much time."</p>
                        <h3 className="font-semibold">— Nusrat Jahan</h3>
                        <p className="text-sm text-gray-500">Khulna, Bangladesh</p>
                    </div>
                    <div className="testimonial p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-gray-700 mb-4 italic">"Reliable, fast, and secure. This app is a game-changer for utility payments."</p>
                        <h3 className="font-semibold">— Kamal Ahmed</h3>
                        <p className="text-sm text-gray-500">Sylhet, Bangladesh</p>
                    </div>
                </div>
            </div>
            {/* testimonial Section end */}
            {/* success section starts */}
            <SuccessSection></SuccessSection>
            {/* success section ends */}
            {/* FAQ Section starts */}
            <FAQSection></FAQSection>
            {/* FAQ Section End */}
        </div>
    );
};

export default Home;