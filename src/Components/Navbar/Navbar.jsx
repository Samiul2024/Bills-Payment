// import React, { use } from 'react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { AuthContext } from '../../contexts/AuthContext';
// import { AuthContext } from '../../main';
import logo from '../../assets/logo.jpeg';


const Navbar = () => {

    // const userInfo = use(AuthContext);
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                alert("sign out successful");
                // alert(user);
                // alert(signOutUser);
            })
            .catch((error) => {
                alert(error);
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
        <>
            <div className="flex items-center md:justify-around bg-base-100 shadow-sm sticky top-0 z-50">
                <div className="flex  items-center justify-between gap-4 mx-4 ">
                    {/* dropdown for responsive starts */}
                    <div className="dropdown dropdown-bottom ">
                        <div tabIndex={0} role="button" className="btn  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1  w-52 p-2 shadow">
                            {links}
                        </ul>

                    </div>
                    <div className='flex '>
                        <NavLink to='/'>
                            <img className='w-fit h-16 object-cover' src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    {/* user */}
                    <div className="block md:hidden flex-shrink-0 pr-2 md:pr-4">
                        {user ?
                            <>
                                <div className="dropdown dropdown-center">
                                    <div
                                        tabIndex={0}
                                        role='button'
                                        className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">

                                            <img className='w-12 h-12 rounded-full object-cover' src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className='menu dropdown-content bg-base-300 mt-3 mr-3 w-64 p-2 shadow rounded-2xl'>
                                        <li>
                                            <span>Current Balance: 10,000 Bdt</span>

                                        </li>
                                        <li>
                                            <a className='btn btn-secondary' onClick={handleSignOut}>LogOut</a>
                                        </li>
                                    </ul>
                                </div>



                                {/* <a onClick={handleSignOut} className="btn">Sign Out</a> */}

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
                {/* dropdown for responsive ends */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="hidden md:block">
                    {user ?
                        <>
                            <div className="dropdown dropdown-center">
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">

                                        <img className='w-12 h-12 rounded-full object-cover' src={user.photoURL} alt="" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu dropdown-content bg-base-300 mt-3 mr-3 w-64 p-2 shadow rounded-2xl'>
                                    <li>
                                        <span>Current Balance: 10,000 Bdt</span>

                                    </li>
                                    <li>
                                        <a className='btn btn-secondary' onClick={handleSignOut}>LogOut</a>
                                    </li>
                                </ul>
                            </div>



                            {/* <a onClick={handleSignOut} className="btn">Sign Out</a> */}

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
        </>
    );
};

export default Navbar;