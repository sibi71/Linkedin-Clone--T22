
import React from 'react'
import "./LeftSide.css"
import Card from '../card/Card'
import Box from '../Box/Box'

const LeftSide = ({user}) => {
  return (
    <div className='leftside'>
        <Card user={user}/>
        <Box />
    </div>
  )
}

export default LeftSide