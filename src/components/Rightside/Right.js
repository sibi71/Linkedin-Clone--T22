import React from 'react'
import Box from '../Box/Box'
import"./Right.css"
import logo from "../../img/logo.svg"

const Right = () => {
  return (
    <div className='right'>
        <Box/>
        <div className='right__footer'>
            <p>
                <a href='#'>About</a>
                <a href='#'>Accessibility</a>
                <a href='#'>Help Center</a>
                <a href='#'>Ad Choices</a>
                <a href='#'>Advertsing</a>
                <a href='#'>More</a>
            </p>
        </div>
        <div className='right__foot'>
                <img  src={logo} alt="logo"/>
                <p>
                    linkdin Corporation &copy; 2023
                </p>

            </div>
    </div>
  )
}

export default Right