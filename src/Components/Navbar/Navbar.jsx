// import React, { use } from 'react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { AuthContext } from '../../contexts/AuthContext';
// import { AuthContext } from '../../main';

const Navbar = () => {

    // const userInfo = use(AuthContext);
    const { user, signOutUser } = use(AuthContext);
    
    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log("sign out successful");
            console.log(user);
            console.log(signOutUser);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // console.log(userInfo);
    // const userInfo = use(AuthContext);
    // console.log('user info at the navbar',userInfo);

    const links = <>
        {/* <li><NavLink to='/'>Home</NavLink></li> */}
        {/* <li><NavLink to='/login'>LogIn</NavLink></li> */}
        <li><NavLink to='/bills'>Bills</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
        {/* <li><NavLink to='/register'>Register</NavLink></li> */}
        {/* <li><NavLink to='/signup'>SignUp</NavLink></li> */}
        {/* <li><NavLink to='/dashboard'>Dashboard</NavLink></li> */}
        {/* {
            user && <>
                <li><NavLink to='/bills'>Bills</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </>
        } */}

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex'>
                    <NavLink to='/'>
                        <img className='w-fit h-16 object-cover' src="/src/assets/logo.jpeg" alt="logo" />
                    </NavLink>

                    {/* <a className="btn btn-ghost text-xl">sBanking</a> */}
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className='flex gap-4 pr-4'>

                            <span>
                                <img className='w-12 h-12 rounded-full object-cover' src={user.photoURL} alt="" />
                            </span>
                            <a onClick={handleSignOut} className="btn">Sign Out</a>
                        </div>
                    </>
                    :
                    <>
                        <div className='flex gap-4 pr-4'>
                            <NavLink className='btn' to='/signup'>Register</NavLink>
                            <NavLink className='btn' to='/login'>LogIn</NavLink>

                        </div>
                    </>
                }

            </div>

        </div>
    );
};

export default Navbar;