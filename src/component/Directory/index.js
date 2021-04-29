import React from 'react';
import Shopmen from './../../Assets/shopForMen.png';
import ShopWomen from './../../Assets/shopForWomen.jpg';
import './styles.scss';
const Directory = () => {
    return ( 
        <div className='directory'>
            <div className='wrap'>
                <div className='item' style={{backgroundImage: `url(${ShopWomen})`}}>
                    <a>shop for women</a>
                </div>
                <div className='item' style={{backgroundImage: `url(${Shopmen})`}}>
                <a>shop for men</a>
                </div>
            </div>
        </div>
    )
}

export default Directory;
