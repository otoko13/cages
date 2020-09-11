import React, { useState } from 'react';
import './cageCage.scss';
import RandomCage from './RandomCage';

const CageCage = () => {
    const [nicolasCount, setNicolasCount] = useState(1);

    const handleClick = () => {
        setNicolasCount(nicolasCount + 1);
    };

    return (
        <>
            <button onClick={handleClick}>Add a Nicolas</button>
            <div className="CageCage">
                {
                    [...Array(nicolasCount).keys()].map((nicolas) => <RandomCage key={nicolas} />)
                }
            </div>
        </>
    );
}

export default CageCage;