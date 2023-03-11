import React,{useEffect, useState} from 'react'
import "./Feed.css"
import Postuploader from '../postUploader/Postuploader'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import {db} from "../../firebase"
import Post from '../post/Post'
import Box from '../Box/Box'


const Feed = ({user}) => {
  
  const [posts ,setPosts] =useState([])
  useEffect(()=>{
    const q =query(collection(db,"posts"), orderBy("timestamp","desc"));

    onSnapshot(q,(Snapshot)=>
    {
      console.log(Snapshot);
      setPosts(
        Snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            data:doc.data()
          }
        })
      )
    })
  },[])
  
  return (
    <div className='feed'>
        <Postuploader user ={user}/>
        {posts.map((post)=>{
          return(
            <Post
               key={post.id} 
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                 />
          )
        })}
      
    </div>
  )
}

export default Feed