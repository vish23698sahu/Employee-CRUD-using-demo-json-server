import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className='home__header'>Employee Management</h1>
            <div className='home__container'>
                <div className='home__card'>
                    <Link to='/employees' className='home__link' >Employee List</Link>
                </div>
                <div className='home__card'>
                    <Link to='/create' className='home__link'>Add Employee</Link>
                </div>
                <div className='home__card'>
                    <Link to='/find' className='home__link' >Find Employee</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
