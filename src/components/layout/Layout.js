import { Container } from '@mui/system'
import React from 'react'
import "./Layout.css"
const Layout = () => {
  return (
    <div className='main'>
            <div className='main__title'>
                <h1>Explore topice you are interested in</h1>
            </div>
            <div className='main__items'>
                <h3>CONTENT TOPICS</h3>
                <div className='items'>
                <div className='     main__active'>
                    <p>See All Topics</p>
                </div>
                <div className='main__option'>
                    <p>Workplace</p>
                </div>
                <div className='main__option'>
                    <p>Job Search</p>
                </div>
                <div className='main__option'>
                    <p>Careers</p>
                </div>
                <div className='main__option'>
                    <p>Interviewing</p>
                </div>
                <div className='main__option'>
                    <p>Salary and Compensation</p>
                </div>
                <div className='main__option'>
                    <p>Interships</p>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Layout