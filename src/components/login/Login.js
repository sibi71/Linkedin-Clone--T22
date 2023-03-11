import React from 'react'
import "./Login.css"
import {
    Discount,
    People,
    CastForEducation,
    Work


 } from '@mui/icons-material';
 import { Container } from '@mui/system';
 import logo from "../../img/logo.svg"
 import { Link } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth,provider } from '../../firebase';
import Layout from '../layout/Layout';
 

const Login = ({setUser}) => {
   const  signIn = ()=>{
    signInWithPopup(auth,provider).than((result)=>{
        setUser(result.user)
    }).catch((err)=>{
        console.log(err);
    })
   }
  return (
   
    <div className='login'>
         <Container>
            <div className='login__navbar'>
            <div className='navbar__logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='navbar__items'>
                <div className='navbar__option'>
                    <Discount />
                    <p>Discover</p>
                </div>
                <div className='navbar__option'>
                    <People />
                    <p>People</p>
                </div>
                <div className='navbar__option'>
                    <CastForEducation />
                    <p>Learning</p>
                </div>
                <div className='navbar__option'>
                    <Work />
                    <p>Job</p>
                </div>
                <div className='btn__join'>
                    <button >Join now</button>
                </div>
                <div className='btn__sign'>
                    <button >Sign in</button>
                </div>
                </div>
           
        </div>
        </Container>
        <div className='login__top'>
            
            <div className='top__left'>
            <Container>
                <h1>Welcome to your professional community</h1>
            <form >
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <Link to={"/"}>Forgot password ?</Link> 
               <button>Sign in</button>
            </form>
            <div className='top__google'>
                <button onClick={signIn}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' alt='google'/>
                    Sign in With Google
                    
                </button>
            </div>
            </Container>
            </div>
            <div className='top__right'>
                <img src='https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4' alt='image' />
            </div>

        </div>
       <div>
        <Layout />
       </div>

    </div>
  
  )
}

export default Login