import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Gallery</Link></li>
        <li><Link to="/order/salad">Enroll</Link></li>
        <li><Link to="/login">Login</Link></li>
        </>
    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-black text-white">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    
                    <a className="btn btn-ghost normal-case text-xl"> <span className='text-sky-500'>Sun<span className='text-purple-600'>shine</span></span> <span className='text-green-700'>Academy</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Enroll Now</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;