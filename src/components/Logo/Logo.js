import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'

const Logo = () =>{
    return(
        <Tilt className='Tilt flex justify-center items-center br4 w-25 pa1 mr2'>
            <div className='pa3 ma0'>
                <h1>SMART BRAIN</h1>
            </div>
        </Tilt>
    )
}

export default Logo