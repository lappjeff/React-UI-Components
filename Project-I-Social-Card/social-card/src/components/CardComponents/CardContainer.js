import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import Content from './CardContent';

const Card = function() {
    return (
        <a href='reactjs.org'>
            <main>
                <Banner />
                <Content />
            </main>
        </a>
    )
}

export default Card;
