import React, { useContext } from 'react';
import logo from './../../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {logOut,user} = useContext(AuthContext)
    const navList = <div className="lg:flex">
        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink></li>
        <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'active' : 'default')}>All Toys</NavLink></li>
        {
            user && <>
            <li><NavLink  to='/mytoys' className={({ isActive }) => (isActive ? 'active' : 'default')}>My Toys</NavLink></li>
        <li><NavLink  to='/addtoy' className={({ isActive }) => (isActive ? 'active' : 'default')}>Add a Toy</NavLink></li>
        <li className='block lg:hidden'><NavLink onClick={logOut} className={({ isActive }) => (isActive ? 'active' : 'default')}>Log Out</NavLink></li>
            </>
        }
        <li><NavLink  to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blogs</NavLink></li>
        {
            !user && <>
            <li><NavLink  to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink></li>
        <li><NavLink  to='/register' className={({ isActive }) => (isActive ? 'active' : 'default')}>Register</NavLink></li>
        <li>
        </li>
            </>
        }
    </div>
    return (
        <div className="navbar bg-base-100 glass">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navList}
                </ul>
                </div>
                <Link className='ml-5'>
                <div className='flex items-center font-serif'>
                    <img className='h-12 rounded-full pr-2' src={logo} />
                    <p className="font-bold w-48 lg:text-xl">Toy Market</p>
                </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            {
                user && <>
                <div className="navbar-end mr-10">
                <div className='hidden lg:block'>
                <Link onClick={logOut} className='btn btn-primary mr-4'>Log Out</Link>
                </div>
                <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName
}>
                    <div className="w-14 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>
                </>
            }
        </div>
    );
};

export default Header;