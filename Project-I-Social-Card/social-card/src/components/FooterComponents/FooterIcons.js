import React from 'react';
import './Footer.css';

const Icons = () => {
    return (
        <div className='icon-row'>
            <i className='fas fa-comment'></i>
            <div className='countable'>
                <span>1</span>
                <i className="fas fa-sync-alt"></i>
            </div>
            <div className='countable'>
                <span>1</span>
                <i className="fas fa-heart"></i>
            </div>
            <i className="fas fa-envelope"></i>
        </div>
    )
}

export default Icons;
