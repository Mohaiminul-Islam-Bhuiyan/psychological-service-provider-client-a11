import React, { useContext } from 'react';
import { toast } from 'react-toastify'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(toast.warning('user logged out'))
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Shuvro</Link>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>

                    {
                        user?.email ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user.photoURL : 'NoImg'} alt="" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                    <li><a>My Reviews</a></li>
                                    <li><a>Add Service</a></li>
                                    <button onClick={handleLogout}>Logout</button>
                                </ul>
                            </div>
                        )
                            :
                            (
                                <>
                                    <li><NavLink to='/login'>Login</NavLink></li>
                                    <li><NavLink to='/signup'>Signup</NavLink></li>
                                </>
                            )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;