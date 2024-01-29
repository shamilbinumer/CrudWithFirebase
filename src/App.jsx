import './App.css'
// import {Firebase} from './config.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from './config';
import { useEffect, useState } from 'react';

function App() {

  const [user,setUser]=useState([])

  const getData=async()=>{
    const db = getFirestore(app);
    const data = await getDocs(collection(db, 'user'));
    const userData = [];
    data.forEach(doc => {
     userData.push(doc.data())
    });
    setUser(userData)
  }

  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <>
      <button onClick={getData}>Click Here</button>
      {
        user.map((data,index)=>
        <div key={index}>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </div>
        )
      }
    </>
  )
}

export default App
