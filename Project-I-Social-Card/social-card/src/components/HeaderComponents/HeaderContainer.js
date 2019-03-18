import React from 'react';
import './Header.css';
import Content from './HeaderContent';
import Image from './ImageThumbnail';


const HeaderContainer = function() {
    return (
        <div className='header-container'>
            <Image />
            <Content />
        </div>
    );
}

export default HeaderContainer;
