import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './pages/About';
import Work from './pages/Work';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'

export const App = () => {
  return (
    <>
      <div id='home' className='bg-zinc-900 flex flex-col'>
        <Header />
        <About />
        <Work />
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="!top-4 !right-4" // Custom positioning
        toastClassName={() =>
          "relative flex p-4 px-2 min-h-[3rem] min-w-[9rem] max-w-[18rem] rounded-lg justify-center overflow-hidden cursor-pointer bg-black text-white"
        }
        bodyClassName={() => "text-sm font-medium"}
      />
    </>
  )
}

