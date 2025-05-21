import React, { useState } from 'react';
import SwiperCarousel from '../SwiperCarousel';
import PhonesContainer from '../PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [phones, setPhones] = useState(data);


    return (
        <div>
            <h1>Hompage </h1>
            <SwiperCarousel />
            <PhonesContainer phones={phones} />
            <h2>sBanking</h2>
        </div>
    );
};

export default Home;