import React from 'react';
import { Link } from 'react-router';
// import { MdDeleteForever } from "react-icons/md";
// import Button from './ui/Button';
// import { removeFavourites } from '../utilis';


const PhoneCard = ({ phone, deletable, handleDelete }) => {
    const { icon, billType, organization, amount, dueDate, id } = phone || {}
    return (
        <div className="border flex items-center flex-col lg:flex-row p-4 lg:gap-12 gap-2 rounded-2xl card bg-base-100 shadow-2xl">
            <figure>
                <img className='rounded-2xl shadow-2xl'
                    src={icon}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex gap-3'>
                    <h1 className='bg-base-300 rounded-3xl px-2 py-2 text-amber-500  text-center'>
                        {billType}
                    </h1>
                    <h1 className='bg-base-300 rounded-4xl px-3 py-1 text-blue-500 '>
                       Amount: {amount} 
                    </h1>
                </div>
                <div className='flex flex-col mt-1 gap-1'>
                    <h2 className="font-bold text-2xl card-title">{name}</h2>
                    <p>Biller: {organization} </p>
                    <p>
                         Due Date: {dueDate}
                    </p>
                </div>
                <div className="text-center my-4" >

                    <Link to={`/bills-page/${id}`}>
                        <button
                            className='btn btn-primary'
                             >Pay</button>
                    </Link>
                </div>
            </div>

            {/* {
                deletable && (
                    <div onClick={() => handleDelete(id)}
                        className='   p-3 ml-5 rounded-3xl  group cursor-pointer'>
                        <button size={35}
                            className='btn text-red-900 bg-gray-300 font-semibold hover:bg-red-900 hover:text-white text-xl  '
                        >Cancel Appointment</button>
                    </div>
                )} */}
        </div>
    );
};

export default PhoneCard;
