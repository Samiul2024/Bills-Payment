import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { use, useRef, useState } from 'react';
import { auth } from '../../firebase.iniit';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const { signInUser, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    // console.log(userInfo);
    // const handleLogin = e => {
    //     e.preventDefault();
    // }

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const emailRef = useRef();


    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // Log in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
            })

        // reset  errorMessage
        setSuccess(false);
        setErrorMessage('');

        // login user
        // signInWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         if (!result.user.emailVerified) {
        //             alert('Please verify your Email address')
        //         }
        //         else {
        //             setSuccess(true);
        //         }
        //         // 
        //         // setSuccess(true);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         setErrorMessage(error.message)
        //     })

    }

    const handleForgetPassword = () => {
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        setErrorMessage('');
        // send password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('A password reset email has been sent to your email,please check your inbox')
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="card mx-auto my-8 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                    <form onSubmit={handleLogin} className="">
                        <label className="label">Email</label>
                        <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    {
                        <p>New To This Website? Please <Link className='text-blue-700 underline' to="/signup" >Sign Up</Link></p>
                    }
                    {
                        errorMessage && <p className='text-red-600 font-bold'>{errorMessage}</p>
                    }
                    {
                        success && <p className='font-bold text-green-700 text-2xl'>User Logged In Successfully !! </p>
                    }
                    {/* Google */}
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Login;