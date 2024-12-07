import React, { useState } from 'react'
import { register } from '../services/user';

const Register = () => {
    const [userData, setUserData] = useState({ name: '',
        mobileno: '',
        email: '',
        password: ''});
    const handleRegister = async (e) =>{
        e.preventDefault()
        const res = await register(userData);
        if(res.status === 200){
          alert("Registered Successful")
        } else{
          console.log(res)
          alert('error')
        }
    }
  return (
    <div>
        <form onSubmit={handleRegister}>
      <input type="text" onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })} value={userData.name} name="name" placeholder="enter name" />
      <input type='text' onChange={(e)=> setUserData({...userData, [e.target.name]: e.target.value})} value={userData.email} name='email' placeholder="enter email" />
        <input type='password' onChange={(e)=> setUserData({...userData, [e.target.name]: e.target.value})} value={userData.password} name='password' placeholder="enter password" />
        <input type='text' onChange={(e)=>setUserData({...userData, [e.target.name]: e.target.value})} value={userData.mobileno} name='mobileno' placeholder="enter mobilenono" />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Register
