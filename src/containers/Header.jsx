import React from 'react';
import Navbar from './Navbar';
import HeaderBanner from '../components/HeaderBanner';

const Header = () => {
    return (
        <div className="flex flex-col border border-red-200">
            <Navbar />
            <HeaderBanner />
        </div>
    )
}


export default Header;