import React from 'react';
import "./Header.scss";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomeContent/homeContent';
import AboutPage from '../AboutContent/aboutContent';
import ContactPage from "../ContactContent/contactContent";
import LoginPage from '../LoginPage/LoginPage';

function Header() {
    return (
        <Router>
            <div className="header">
                <nav>
                    <ul className='NavList d-flex'>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>  
                </nav>
                <div>
                    <Routes>
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Header;

                    
                    
                    
