import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/vite.png';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const NabBar = () => {
    const { user, handleLogout } = useContext(AuthContext);


    const handleSignOut = () => {
        handleLogout()
            .then(() => { })
            .catch(() => { })
    }


    const navItems = <>
        <li> <Link to='/' className='text-gray-100 text-[16px]'>Home</Link> </li>
        <li> <Link to='/blogs' className='text-gray-100 text-[16px]'>Blogs</Link> </li>
        <li> <Link to='/allToys' className='text-gray-100 text-[16px]'>All Toys</Link> </li>
        {user ?
            <>
                <li><Link to='/mytoys' className='text-gray-100 text-[16px]'>My Toys</Link> </li>
                <li> <Link to='/addToy' className='text-gray-100 text-[16px]'>Add Toys</Link> </li>
                <li> <button onClick={handleSignOut} className='text-gray-100 text-[16px]'>Logout</button> </li>
                <li className='text-gray-100 ml-12'><img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" /></li>
            </>
            :
            <li> <Link to='/login' className='text-gray-100 text-[16px]'>Login</Link> </li>
        }

    </>

    return (
        <div className="navbar bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 rounded-xl shadow-2xl mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className='w-16 h-16' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-3xl text-gray-100">carToyHouse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NabBar;