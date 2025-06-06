import React from 'react';

const UpdateProfile = () => {

    const updateProfile = e => {
        e.preventDefault();
        alert('Profile Updated')
    }
    return (
        <>
            <div className="flex flex-col gap-4 my-4 items-center mx-auto">
                <form onSubmit={updateProfile} className='flex flex-col shadow-lg mt-4 bg-black/50 p-4 rounded-3xl mx-auto gap-2'>
                    <h1 className='text-white text-4xl'>Update Your Profile</h1>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photoURL' className="input" placeholder="Photo URL" />

                    <button onSubmit={updateProfile} className="btn btn-neutral mt-4">Update Information</button>
                </form>
            </div>
        </>
    );
};

export default UpdateProfile;