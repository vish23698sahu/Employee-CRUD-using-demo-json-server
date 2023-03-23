import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar__container'>
            <Link to='/' className='nav__link'>Home</Link>
            <Link to='/employees' className='nav__link' >Employee List</Link>
            <Link to='/create' className='nav__link' >Add Employee</Link>
            <Link to='/find' className='nav__link' >Find Employee</Link>
            <Link to='/resources' className='nav__link' >Resources</Link>
        </div>
    )
}

export default Navbar;