import React, { useState } from 'react'
import "./Postuploader.css"
import { Avatar,IconButton,LinearProgress } from '@mui/material';
import { storage , db ,timestamp } from "../../firebase"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc ,collection } from 'firebase/firestore';
import {
    PhotoLibrary,
    InsertEmoticon,
    Videocam,
    Add,
    Newspaper,
    EventNote,
    OndemandVideo
} from "@mui/icons-material"
import { async } from '@firebase/util';

const Postuploader = ({user}) => {
    const [input, setInput] = useState("");
    const [image,setImage] =  useState("");
    const [progress ,setProgress] = useState(0);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const storageRef = ref(storage,`images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef,image);
        uploadTask.on(
            "state_changed",
        (snapShot)=>{
            const progress =
             Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
            setProgress(progress);
        },
        (err)=>{
            console.log(err);
        },
        () => {
           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{

                await addDoc(collection(db,"posts"),{
                    message:input,
                    timestamp:timestamp,
                    profilePic:user.photoURL,
                    username:user.displayName,
                    image:downloadURL,
                })
                setProgress(0);
                setInput("");
                setImage("");

           }).catch((err)=>{ 
            console.log(err);
           })
          
        })
    };
 
  return (
    <div className='postuploader'>
        <div className='postuploader__top'>
        <Avatar src={user.photoURL}/>
        <form className="form">
            <input type="text"
            placeholder={`Start a post ,${user.displayName}`}
            className="postuploader__input"
            value={input}
            onChange={(e)=>setInput(e.target.value)} />
            <label className='postuploader__upload'>
            <PhotoLibrary style={{color:"green"}} />
           <input type="file"  className="input__file"onChange={(e)=>setImage(e.target.files[0])}/>
            <button type='submit' onClick={handleSubmit}>done</button>
            </label>
        </form>
        </div>
        <div>
            {progress > 0 && (
               <LinearProgress variant="determinate" value={progress} />
            )}
        <div className='postuploader__bottom'>
        <div className='postuploader__option'>
            <OndemandVideo style={{color:"green"}} />
            <h3>video</h3>
            </div>
            <div className='postuploader__option'>
            <EventNote style={{color:"red"}} />
            <h3>Event</h3>
            </div>
            
            <div className='postuploader__option'>
            <Newspaper style={{color:"orange"}} />
            <h3>News</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Postuploader