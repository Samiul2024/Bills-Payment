import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
// import Button from '../Components/ui/Button';
// import { MdBookmarkAdd, MdShoppingCartCheckout } from 'react-icons/md';
// import { addFavourite, addToCart, getCart } from '../utilis';
// import { CartContext } from '../providers/Context';
// import { RiErrorWarningLine } from "react-icons/ri";
// import { AiTwotoneTrademarkCircle } from 'react-icons/ai';


const PhoneDetails = () => {
    const naviGate = useNavigate();
    // const { setCart } = useContext(CartContext)
    const data = useLoaderData()
    const { id } = useParams()
    // console.log(id);
    const singlePhone = data?.find(phone => phone.id === parseInt(id))
    // console.log(singlePhone);
    const {
        icon, billType, organization, amount, dueDate, } = singlePhone || {}
    // const handleFavourite = () => {
    //     addFavourite(singlePhone)
    // }

    // const handleCart = () => {
    //     // save to localStorage for persistency
    //     addToCart(singlePhone)
    //     // update state for instant ui change
    //     // setCart(prv=>[...prv,singlePhone])
    //     setCart(getCart())
    // }

    return (
        <>
            <div className='py-20'>
                {/* lawyer profile  section ends */}

                <div className='flex flex-col p-16 my-8 rounded-2xl text-center items-center justify-center bg-base-300 gap-8'>
                    <h1 className='text-4xl font-bold'>
                        Bills Details
                    </h1>
                    <p>
                        {organization}
                    </p>
                </div>
                {/* lawyer profile  section ends */}

                {/* lawyer details section starts */}
                <div className='w-full  py-12'>
                    <div className="border flex md:flex-row flex-col p-4 gap-8 rounded-2xl  bg-base-100 shadow-sm">
                        <img
                            src={icon} alt="Banner Image" className='lg:w-72 h-auto rounded-2xl object-cover  '
                        />
                        {/* card details */}
                        <div className="flex flex-col py-12 gap-4">
                            <div className='flex gap-3'>
                                <h1 className='bg-base-300 rounded-4xl px-3 py-1 text-blue-500 '>
                                    {billType} Experience
                                </h1>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl card-title">{organization}</h2>

                            </div>
                            <div className='flex flex-row gap-10'>
                                <p>{dueDate} Expert</p>
                                <p className='flex flex-row items-center gap-2 justify-center'>
                                    {/* <AiTwotoneTrademarkCircle /> */}
                                     {amount}
                                </p>
                            </div>
                            {/* <div className='flex flex-col gap-2 md:items-center md:flex-row' >
                                <p>Availability </p>
                                {/* map through available to show available days */}
                            {/* {available?.map((day, index) => (
                                <button className='btn text-[#FFA000] bg-base-300 rounded-4xl md:mx-2' key={index}>{day} </button>
                            ))} */}
                        </div>
                        <div className='flex gap-4 flex-row'>
                            <h1 className='text-green-700 font-bold'>  {amount} Taka</h1>
                        </div>
                    </div>

                </div>
            </div >
            {/* appointment card starts */}
            <div className='flex flex-col w-full gap-8 p-8 border rounded-2xl '>
                <div>
                    <h1 className='text-center font-bold text-2xl'>Book an Appointment</h1>
                </div>
                <hr className='border border-dashed opacity-35' />
                {/* <div className='flex flex-row justify-between'>
                    <h2 className='font-bold text-xl'>Availability</h2>
                    <p className='font-medium text-green-500 px-3 py-1 bg-base-300 rounded-3xl text-xsl'>Lawyer {availability ? 'Available' : 'Not Available'} today </p>
                </div> */}
                <hr className='border opacity-10' />
                <div className=' text-sm mr-auto  items-center px-3  text-[#FFA000] py-1 bg-base-300 rounded-3xl'>

                    {/* <p className='flex flex-col items-center lg:gap-2 lg:flex-row font-medium'>
                            <RiErrorWarningLine size={20} />
                            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p> */}
                </div>
                {/* Title and Buttons starts*/}

                <button onClick={() => {
                    // handleFavourite();
                    // naviGate('/');

                }
                } label='Book Appointment Now' />

                {/* Title and Buttons ends*/}
            </div>
            {/* appointment card ends */}


        </>
    );
};

export default PhoneDetails;