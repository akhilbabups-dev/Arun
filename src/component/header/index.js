import React from 'react';
import './styles.scss';
import Logo from './../../Assets/ironman.png'
export const header = () => {
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt="ebates logo"/>
                </div>
            </div>
        </header>
    )
}
export default header;