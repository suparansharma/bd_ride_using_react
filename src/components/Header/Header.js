import React from 'react';
import './Header.css';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div className='header'>
        <h1>Bd Ride</h1>
        <nav>
        <a href="/Home">Home</a>
        <a href="/Destination">Destination</a>
        <a href="/Blog">Blog</a>
        <a href="/Contact">Contact</a>
        <a href="/login"><Button variant="primary">LogIn</Button></a>
        
        </nav>
     
        </div>
        
    );
};

export default Header;