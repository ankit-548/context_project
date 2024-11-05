import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  return (
    <UserContextProvider>
      <h1>First Context App</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
