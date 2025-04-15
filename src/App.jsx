import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';
import About from './pages/About';
import Work from './pages/Work';
// import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'

export const App = () => {
  return (
    <>
      <div className='bg-cyan-400 flex flex-col'>
        <Header/>
        <About/>
        <Work/>
        <Footer/>
      </div>
    </>
  )
}

