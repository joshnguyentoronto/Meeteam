import './HomePage.css'
import React from 'react'
import Header from '../../components/header/Header'

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <Header user={props.user} />
            <h1>HomePage</h1>
        </div>
    )
}