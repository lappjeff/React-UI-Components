import React from 'react';
import './Header.css';
import Content from './HeaderContent';
import Image from './ImageThumbnail'
import Title from './HeaderTitle'


const HeaderContainer = function() {
    return (
        <header>
            <Image />
            <div className='header-text'>
                <Title />
                <Content />
            </div>
        </header>
    );
}

export default HeaderContainer;
