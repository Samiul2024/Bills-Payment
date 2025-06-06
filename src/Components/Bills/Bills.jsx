import React, { useState } from 'react';
import PhonesContainer from '../PhonesContainer';
import { useLoaderData } from 'react-router';

const Bills = () => {

    const data = useLoaderData();
    const [phones, setPhones] = useState(data);
    return (
        // <div className='max-w-sm mx-auto'>
        <div className='flex flex-col justify-center text-center lg:mx-36 lg:my-8 my-4 gap-4 mx-4 items-center'>
            {/* <h2>Your Bills </h2> */}
            <div>
                <PhonesContainer phones={phones} />
            </div>
        </div>
    );
};

export default Bills;