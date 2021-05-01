import React from 'react';
import './styles.scss';
import Logo from './../../Assets/ironman.png';
import {Link} from 'react-router-dom';
import {auth} from './../../Firebase/Utils';

export const Header = (props) => {
    const{currentUser}=props
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt="ebates logo"/>
                    </Link>
                </div>
                <div className='callToAction'>
                    {currentUser&&(
                        <ul>
                            <li>
                                <span onClick={()=>auth.signOut()}>
                                    log out
                                </span>
                            </li>
                        </ul>
                    )}
                    {!currentUser&&(
                        <ul>
                            <li>
                                <Link to='/registration'>Register</Link>
                            </li>
                            <li>
                                <Link to='/Login'>Login</Link>
                            </li>
                        </ul>
                    )}
                    
                </div>
            </div>
        </header>
    )
}
Header.defaultProps={
    currentUser: null
}
export default Header;