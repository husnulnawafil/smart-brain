import React from 'react';

import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';

const Header =()=>{
    return (
        <div className='flex w-100'>
            <Logo/>
            <Navigation/>
        </div>
    )
}

export default Header