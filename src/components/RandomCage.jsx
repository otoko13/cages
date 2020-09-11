import React, {useState} from 'react';
import './randomCage.scss';

const NUMBER_OF_CAGES = 8;

const RandomCage = () => {
    const [cageVersion] = useState(Math.ceil(Math.random() * NUMBER_OF_CAGES));

    return (
        <div className={`RandomCage cage-${cageVersion}`}></div>
    );
}

export default RandomCage;