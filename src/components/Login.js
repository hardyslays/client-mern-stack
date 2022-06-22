import React from 'react'
import {useState} from 'react'

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-type':'application/JSON',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await res.json()
        console.log(data)
    }

  return (
    <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <input value={name} placeholder="name" onChange={e => setName(e.target.value)}/>
            <input value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
            
            <input type="submit" value="Login" />
        </form>    
    </>
  )
}

export default Register