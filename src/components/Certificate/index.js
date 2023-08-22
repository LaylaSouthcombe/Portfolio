import React from 'react';
import './style.css'

const Certificate = ({cert}) => {

    return (
        <>
            <div class="certificate">
                <img src={cert} alt="" />
            </div>
        </>
    )
}

export default Certificate