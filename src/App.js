import React, { useEffect, useState } from 'react'
import "./App.css"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import Login from './components/login/Login'
import Header from './components/Header/Header'
import LeftSide from './components/leftSide/LeftSide'
import Feed from './components/feed/Feed'
import Right from './components/Rightside/Right'

const App = () => {
  const [user ,setUser] =useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  },[])
  return (
    <>
    {!user?(
      <Login setUser={setUser} />
    ):(
      <>
      <Header user ={user}/>
      <div className='app__body'>
      <LeftSide user={user}/>
      <Feed user={user}/>
      <Right/>
      </div>
     
      </>
    )}
    
    </>
  )
}

export default App