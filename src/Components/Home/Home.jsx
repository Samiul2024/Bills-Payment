import React, { useState } from 'react';
import SwiperCarousel from '../SwiperCarousel';
// import PhonesContainer from '../PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const data = useLoaderData();
    // const [phones, setPhones] = useState(data);


    return (
        <div>
            <h2 className='text-7xl text-center font-bold text-green-900 p-16'>sBanking</h2>
            <SwiperCarousel />
            <p className='text-3xl text-center text-blue-950 p-4'> Your Trusted One stop Online Banking Solution.</p>
        </div>
    );
};

export default Home;