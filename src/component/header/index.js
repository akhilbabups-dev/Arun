import React from 'react';
import './styles.scss';
import Logo from './../../Assets/ironman.png';
import {Link} from 'react-router-dom'
export const header = () => {
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt="ebates logo"/>
                    </Link>
                </div>
                <div className='callToAction'>
                    <ul>
                        <li>
                            <Link to='/registration'>Register</Link>
                        </li>
                        <li>
                            <Link to='/Login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default header;