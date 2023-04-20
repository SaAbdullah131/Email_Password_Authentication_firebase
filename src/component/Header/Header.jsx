import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css' ;

const Header = () => {
    return (
        <nav className='mt-2 w-50 mx-auto p-2'>
            <Link to='/'>Home</Link>
            <Link to ="/login">Login</Link>
            <Link to ="/register">Register</Link>
            <Link to ="/register-rbs">Register Rbs</Link>
            <Link to ="/register-bs">Register Bs</Link>

        </nav>
    );
};

export default Header;