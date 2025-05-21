import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext);
    return (
        <div className='max-w-sm flex mt-4 flex-col items-center mx-auto'>
            <img className='object-cover rounded-2xl shadow-md ' src={user.photoURL} alt="profile photo" />
            {/* <p className='text-3xl'>
                Welcome To Your Profile <br />
            </p> */}
            <div className='flex text-center justify-center items-center'>
                <p className='text-4xl'>Name:</p>
                <h1 className='text-7xl font-bold text-center'>
                    {user.displayName}
                </h1>
            </div>
            <div className='flex  gap-2 justify-center items-center'>
                <p className='text-xl'>Email:</p>
                <h3 className=' text-2xl text-blue-700'>
                    {user.email}
                </h3>
            </div>

            <Link to='/updateProfile' className='btn btn-primary mt-4'>Update</Link>
        </div>
    );
};

export default Profile;