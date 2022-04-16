import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/userSlice';

import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import RoomPage from '../RoomPage/RoomPage';
import LoginPage from '../LoginPage/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'
import AboutPage from '../AboutPage/AboutPage'
import TermPage from '../TermPage/TermPage'
import PrivacyPage from '../PrivacyPage/PrivacyPage'

export default function App() {
  let navigate = useNavigate();
  const user = useSelector(selectUser)




  async function setUserInState() {
    console.log('hello')
  }

  useEffect(() => {
    console.log('hello')
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={ <HomePage
              user={user}
          /> }
        />
        <Route
          path='/room'
          element={ <RoomPage
              user={user}
          /> }
        />
        <Route
          path='/user'
          element={ <ProfilePage
              user={user}
          /> }
        />
        <Route
          path='/about'
          element={<AboutPage user={user} />}
        />
        <Route
          path='/terms'
          element={<TermPage user={user} />}
        />
        <Route
          path='/privacy'
          element={<PrivacyPage user={user} />}
        />
        <Route
          path='/login'
          element={<LoginPage setUserInState={setUserInState}/>}
        />
        <Route
          path='/signup'
          element={<SignUpPage setUserInState={setUserInState}/>}
        />
        <Route 
          path="*" 
          element={<Navigate to="/" />} 
        />
      </Routes>
    </div>
  );
}

