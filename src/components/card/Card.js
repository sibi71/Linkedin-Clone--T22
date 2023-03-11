import { Bookmark } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Card.css"

const Card = ({user}) => {
  return (
    <div className='card'>
        <div className='card__bg'>
            <img src="https://visitbgohio.org/wp-content/uploads/2019/08/BG-TO-DO-628x540.jpg" alt="bg"/>
        </div>
        <div className='card__info'>
            <Avatar src={user.photoURL} className="profile"/>
            <p>{user.displayName}</p>
            <h5>fullstack developer</h5>
        </div>
        <hr></hr>
        <div className='card__items'>
            <div className='card__option'>
                <div className='card__name'>
                <p>connections</p>
                <h5>Grow your network</h5>
                </div>
                <div className='card__number'>
                <p>9K</p>
                </div>
            </div>
            
            <div className='card__option'>
                <div className='card__name'>
                <p>invitation</p>
                </div>
                <div className='card__number'>
                <p>2000</p>
                </div>
            </div>
            
        </div>
        <hr></hr>
        <div className='card__prem'>
            <p>Access exclusive tools & insights</p>
            <a href='#'>Try Premium for free</a>
        </div>
        <hr></hr>
        <div className='card__save'>
            <Bookmark />
            <p>My items</p>
        </div>
    </div>
  )
}

export default Card
