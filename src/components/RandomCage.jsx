import React from 'react';
import './randomCage.scss';

const NUMBER_OF_CAGES = 5;

const RandomCage = () => {
    const randomCage = Math.ceil(Math.random() * NUMBER_OF_CAGES);
    return (
        <div className={`RandomCage cage-${randomCage}`}></div>
    );
}

export default RandomCage;