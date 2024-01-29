import './App.css'
// import {Firebase} from './config.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from './config';
import { useEffect, useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 


function App() {
  const [datas,setData]=useState({
    name:"",
    age:""
  })
  const [user,setUser]=useState([])
  const db = getFirestore(app);

  const data=(e)=>{
    setData((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(datas);
  }

  const getData=async()=>{
   
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

  const addData = async () => {
    try {
      await setDoc(doc(db, 'user', datas.name), datas);
      console.log('Document added successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
      <input type="text" name="name" id="" placeholder='Name' onChange={data}/>
      <input type="text" name="age" id="" placeholder='Age' onChange={data}/>
      <button onClick={addData}>Add Data</button>
      <button onClick={getData}>Privew</button>
<div className="main">
{
        user.map((data,index)=>
        <div key={index} className="card">
        <div><p>Name : {data.name}</p></div>
          <div><p>Age : {data.age}</p></div>
        </div>
        )
      }
</div>
    </>
  )
}

export default App
