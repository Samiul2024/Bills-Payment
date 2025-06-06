import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { CartContext } from '../providers/Context';
// import Button from '../Components/ui/Button';
// import { MdBookmarkAdd, MdShoppingCartCheckout } from 'react-icons/md';
// import { addFavourite, addToCart, getCart } from '../utilis';
// import { CartContext } from '../providers/Context';
// import { RiErrorWarningLine } from "react-icons/ri";
// import { AiTwotoneTrademarkCircle } from 'react-icons/ai';


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

    const handleCart = () => {
        // save to localStorage for persistency
        addToCart(singlePhone)
        // update state for instant ui change
        // setCart(prv=>[...prv,singlePhone])
        setCart(getCart())
    }

    return (
        <>
            <div className='mx-4 py-20 '>
                {/* lawyer profile  section ends */}

                <div className='flex flex-col p-16 my-8 rounded-2xl text-center items-center justify-center bg-base-300 gap-8'>
                    <h1 className='text-4xl font-bold'>
                        Bill Details
                    </h1>
                </div>
                {/* lawyer profile  section ends */}

                {/* lawyer details section starts */}
                <div className='w-full md:grid grid-cols-2 md:mx-4 my-12'>
                    <div className='flex border rounded-3xl p-2 w-full flex-col'>
                        <div className=" flex p-4 md:flex-row flex-col m-4 gap-8 rounded-2xl  bg-base-100 shadow-sm">
                            <div>
                                <img
                                    src={icon} alt="Banner Image" className='lg:w-72 h-auto rounded-2xl object-cover  '
                                />
                            </div>
                            <div>
                                {/* card details */}
                                <div className="flex flex-col py-12 gap-4">
                                    <div className='flex gap-3'>
                                        <h1 className='bg-base-300 rounded-4xl px-3 py-1 text-blue-500 '>
                                            {billType}
                                        </h1>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-2xl card-title">{organization}</h2>
                                    </div>
                                    <div className='flex flex-row gap-10'>
                                        <p className='text-2xl font-semibold'>Last Date : {dueDate} </p>
                                        <p className='flex flex-row items-center gap-2 justify-center'>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-4 flex-row'>
                                    <h1 className='text-green-700 font-bold'>  {amount} Taka</h1>
                                </div>
                            </div>
                        </div>
                        <div className='mx-4'>
                            {/* appointment card starts */}

                            <button onClick={() => {
                                handleFavourite();
                                naviGate('/');
                            }
                            }
                                className='btn btn-success  rounded-3xl w-full'
                            //  label='Book Appointment Now'
                            >Pay Bill</button>
                        </div>
                    </div>


                </div>
            </div >
            {/* appointment card ends */}


        </>
    );
};

export default PhoneDetails;