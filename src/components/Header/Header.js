import React from 'react';
import './Header.css';



const Header = () => {
    return (
        <div className='header'>
        <h1>Bd Ride</h1>
        <nav>
        <a href="/Home">Home</a>
        <a href="/Destination">Destination</a>
        <a href="/Blog">Blog</a>
        <a href="/Contact">Contact</a>
        </nav>
        </div>
        
    );
};

export default Header;