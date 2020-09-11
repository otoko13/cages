import React, { useState } from 'react';
import './cageCage.scss';
import RandomCage from './RandomCage';

const CageCage = () => {
    const [nicolasCount, setNicolasCount] = useState(1);

    const handleClick = () => {
        setNicolasCount(nicolasCount + 1);
    };

    return (
        <div className="CageCage">
            <button onClick={handleClick} className="add-button">Add a Nicolas</button>
            <div className="cage-proper">
                <div className="cage-background"></div>
                {
                    [...Array(nicolasCount).keys()].map((nicolas) => <RandomCage key={nicolas} />)
                }
            </div>
        </div>
    );
}

export default CageCage;