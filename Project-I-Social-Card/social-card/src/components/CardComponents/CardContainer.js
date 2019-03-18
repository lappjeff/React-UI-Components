import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import Content from './CardContent';

const Card = function() {
    return (
        <main>
            <Banner />
            <Content />
        </main>
    )
}

export default Card;
