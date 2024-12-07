import React, { useState } from 'react'
import { login } from '../services/user'

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await login(loginDetails);
        if (res.status === 200) {
            alert("LoggedIn Successful")
        } else {
            console.log(res)
            alert('error')
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type='text' onChange={(e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })} value={loginDetails.email} name='email' placeholder="enter email" />
                <input type='password' onChange={(e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })} value={loginDetails.password} name='password' placeholder="enter password" />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Login
