import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { CartContext } from '../providers/Context';
import { FaBolt, FaGasPump, FaWater, FaWifi, FaCreditCard } from 'react-icons/fa';

const iconMap = {
    FaBolt: <FaBolt size={100} className="text-yellow-500 text-4xl" />,
    FaGasPump: <FaGasPump size={100} className="text-orange-500 text-4xl" />,
    FaWater: <FaWater size={100} className="text-blue-500 text-4xl" />,
    FaWifi: <FaWifi size={100} className="text-green-500 text-4xl" />
};

const bankCards = [
    { id: 1, name: "Visa **** 1234" },
    { id: 2, name: "MasterCard **** 5678" },
    { id: 3, name: "Bkash " },
    { id: 4, name: "Nagad " },
    { id: 5, name: "Rocket " },
];

const PhoneDetails = () => {
    const naviGate = useNavigate();
    // const { setCart  } = useContext(CartContext);
    const data = useLoaderData();
    // console.log(data);
    const { id } = useParams();
    // console.log(typeof id);
    const singlePhone = data?.find(phone => phone.id === parseInt(id))
    // console.log(singlePhone);
    // console.log
    const {
        icon, billType, organization, amount, dueDate, } = singlePhone || {}
    const handleFavourite = () => {
        addFavourite(singlePhone)
    }

    const [selectedCard, setSelectedCard] = useState('');

    const handlePay = () => {
        if (!selectedCard) {
            alert("Please select a bank card to pay.");
            return;
        }
        // You can handle the payment logic here or redirect to payment gateway page
        alert(`Paying ${amount} BDT for ${billType} using ${selectedCard}`);
        // After payment, navigate to success page or back to bills list
        naviGate('/bills');
    };

    const handleCart = () => {
        // save to localStorage for persistency
        addToCart(singlePhone)
        // update state for instant ui change
        // setCart(prv=>[...prv,singlePhone])
        setCart(getCart())
    }


    const billTypeIcon = iconMap[singlePhone.billType_Icon];

    return (
        <>
            <div className='mx-4 my-4 '>
                {/* lawyer profile  section ends */}

                <div className='flex flex-col p-8  text-center items-center justify-center bg-base-300 gap-8'>
                    <h1 className='text-4xl font-bold'>
                        Bill Details
                    </h1>
                </div>
                {/* lawyer profile  section ends */}

                {/* lawyer details section starts */}
                <div className='w-full md:grid grid-cols-1 md:mx-4 my-12'>
                    <div className='flex  p-2 w-full flex-col'>
                        <div className=" flex p-4 md:flex-row flex-col m-4 gap-8 rounded-2xl  bg-base-100 shadow-sm">
                            {/* bills icon */}
                            <div className='border flex justify-center items-center p-16 relative'>
                                <img
                                    src={icon} alt="Banner Image"
                                    className='md:w-96 min-h-fit  rounded-2xl object-cover  '
                                />
                                <div className='absolute bottom-2 right-2 '>
                                    {billTypeIcon}
                                </div>
                                {/* <img src={billTypeIcon} alt="Bill Type Icon" /> */}


                            </div>
                            <div>
                                {/* card details */}
                                <div className="flex flex-col py-12 gap-4">
                                    <div>
                                        <h2 className="font-bold text-2xl card-title">{organization}</h2>
                                    </div>
                                    <div className='flex gap-3'>
                                        <h1 className='italic '>
                                            {billType} Bill
                                        </h1>
                                    </div>
                                    <div className='flex gap-4 flex-row'>
                                        <h1 className='text-green-700 text-xl font-bold'>Amount: <span className='font-bold text-xl'>
                                            {amount}
                                        </span> BDT</h1>
                                    </div>
                                    <div className='flex flex-row gap-10'>
                                        <p className='text-2xl font-semibold'>Due Date : {dueDate} </p>
                                        <p className='flex flex-row items-center gap-2 justify-center'>
                                        </p>
                                    </div>
                                    {/* Bank Card selection starts */}
                                    <div className='my-6'>
                                        <label htmlFor='bankCard' className='block mb-2 font-semibold text-lg'>Select A Bank Card to Pay The {billType} Bill:</label>
                                        <select
                                            id='bankCard'
                                            className='select select-bordered w-full max-w-xs'
                                            value={selectedCard}
                                            onChange={e => setSelectedCard(e.target.value)}
                                        >
                                            <option value="">-- Choose Card --</option>
                                            {bankCards.map(card => (
                                                <option key={card.id} value={card.name}>{card.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Bank Card selection ends*/}
                                    <div className=''>
                                        {/* appointment card starts */}

                                        <button onClick={() => {
                                            // handleFavourite();
                                            naviGate('/bills');
                                        }
                                        }
                                            className='btn btn-success text-white text-2xl w-full'
                                        //  label='Book Appointment Now'
                                        >Pay Bill</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div >
            {/* appointment card ends */}


        </>
    );
};

export default PhoneDetails;