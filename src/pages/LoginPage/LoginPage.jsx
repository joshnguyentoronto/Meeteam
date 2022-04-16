import './LoginPage.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/userSlice'

export default function LoginPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            email: email,
            password: password,
            loggedIn: true,
        }))
    }

    return (
        <div className='LoginPage'>
            <h1>LoginPage</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>
        </div>
    )
}