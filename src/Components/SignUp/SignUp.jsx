import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.iniit';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        setSuccess(false);
        setErrorMessage('');

        if (!terms) {
            setErrorMessage('PLease accept our terms and conditions');
            return;
        }

        // password validation
        const passwprdRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (passwprdRegEx.test(password) === false) {
            setErrorMessage('password must have at least one digit 6 characters of lowercase and uppercase')
            return;
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                //email varify 
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setSuccess(true);
                    })

                // update user Profile
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log("User Profile updated");
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message);
            })

    }
    return (

        <div className="hero-content flex-col  lg:flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Please sign Up now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body ">
                    <form onSubmit={handleSignUp}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label mt-4">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input"
                                placeholder="Password" />
                            <button
                                type='button'
                                onClick={() => { setShowPassword(!showPassword) }} className='btn btn-xs absolute top-3 right-6'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                        </div>
                        <div>
                            <label className="label mt-2 ">
                                <input type="checkbox" name='terms' defaultChecked className="checkbox" />
                                Accept Terms And Conditions
                            </label>
                        </div>
                        <button className="btn btn-neutral mt-4">SignUp</button>
                    </form>
                    <p>Already Have an Acoount? Please <Link className='text-blue-700 underline' to="/login" >LogIn</Link></p>
                    {
                        errorMessage && <p className='text-red-600'>{errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-700 text-xl font-bold'>User has created Successfully !!</p>
                    }
                </div>
            </div>
        </div>

    );
};

export default SignUp;