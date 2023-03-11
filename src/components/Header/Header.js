import React from 'react'
import "./Header.css"
import {
    Search,
    Home,
    People,
    Work,
    Message,
    Notifications,
    Menu,
    Logout


} from "@mui/icons-material"
import logo from "../../img/linkedin.png"
import { Avatar,Container,IconButton, Link } from '@mui/material'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'



const Header = ({user}) => {
  return (
    <div className='header'>
      <div className='header__left'>
          <img src={logo} alt="logo"/>
          <div className='header__input'>
            <Search />
            <input placeholder='Search linkdin' />
          </div>
      </div>
      <div className='header__center'>
      <div className='header__option header__option--active'>
             <IconButton>
              <Home/>
              </IconButton>
              <p>Home</p>
        </div>
        <div className='header__option '>
          <IconButton>
          <People/>
          </IconButton>
          <p>People</p>
        </div>
        <div className='header__option '>
          <IconButton>
          <Work/>
          </IconButton>
          <p>Job</p>
        </div>
        <div className='header__option '>
          <IconButton>
          <Message/>
          </IconButton>
          <p>Message</p>
        </div>
        <div className='header__option '>
          <IconButton>
          <Notifications/>
          </IconButton>
          <p>Notifications</p>
        </div>
        <div >
          <div className='header__info'>
            <IconButton>
            <Avatar src={user.photoURL} />
            </IconButton>
          </div>
        </div>
        <div className='header__option '>
          <IconButton>
          <Menu/>
          </IconButton>
          <p>Work</p>
        </div>
        <div className='header__link'>
          <a href='#'> Try Premium 
          for free</a>
        </div>
        <div className='header__option'>
          <IconButton onClick={()=>signOut(auth)} >
            <Logout />
          </IconButton>
          <p>LogOut</p>
        </div>
      </div>
    </div>
   
  )
}

export default Header