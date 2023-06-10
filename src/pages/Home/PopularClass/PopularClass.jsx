import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/class')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div>
            {

            }
        </div>
    );
};

export default PopularClass;