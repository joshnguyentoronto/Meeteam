import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import RoomPage from '../RoomPage/RoomPage';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

export default function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);



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
          element={
            <HomePage
              user={user}
            />
          }
        />
        <Route
          path='/room'
          element={
            <RoomPage
              user={user}
            />
          }
        />
        <Route
          path='/user'
          element={
            <ProfilePage
              user={user}
            />
          }
        />
        <Route path="/account" element={<AuthPage />}>
          <Route path="/login" element={<Login setUserInState={setUserInState}/>}/>
          <Route path="/signup" element={<Signup setUserInState={setUserInState}/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

