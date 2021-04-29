import React from 'react'
import Footer from '../component/Footer'
import Header from './../component/header'
const HomePageLayout = (props) => {
    return (
        <div className='fullheight'>
            <Header/>
            <div className='main'>
                {props.children}
            </div>
            <Footer/>            
        </div>
    )
}

export default HomePageLayout;
