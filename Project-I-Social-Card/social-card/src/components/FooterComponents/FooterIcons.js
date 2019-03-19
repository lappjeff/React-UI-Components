import React from 'react';
import './Footer.css';


const Icons = () => {
    return (
        <div className='icon-row'>
            <i className='fas fa-comment'></i>
            <div className='countable'  onClick={incrementHearts}>
                <span id='repost-count'>{repostCount}</span>
                <i className="fas fa-sync-alt" ></i>
            </div>
            <div className='countable' onClick={incrementPosts}>
                <span id='heart-count'>{heartCount}</span>
                <i className="fas fa-heart"></i>
            </div>
            <i className="fas fa-envelope"></i>
        </div>
    )
}

let heartCount = 0;
let repostCount = 0;

const incrementHearts = function() {
    console.log(heartCount)
    return heartCount += 1;
}

const incrementPosts = function() {
    console.log(repostCount)
    return repostCount += 1;
}

export default Icons;
