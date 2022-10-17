import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user, LogOut} = useContext(AuthContext)
    return (
        <nav className='headerNav'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                    <>
                        <span className='user-email'>{user?.email}</span>
                        <button className='btn-logout' onClick={LogOut}>Logout</button> 
                    </>                   :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;