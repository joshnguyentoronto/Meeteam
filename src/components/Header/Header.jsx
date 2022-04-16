import './header.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div className='Header'>
            <Link className='Header-icon' to="/" >Meeteam</Link>
            <div className='Header-nav'>
                <p>10:13 AM - Sun, Apr 10</p>
                <button onClick={() => console.log('clicked')}>?</button>
                <button onClick={() => console.log('clicked')}>JN</button>
            </div>
        </div>
    )
}