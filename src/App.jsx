import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Outlet } from 'react-router-dom'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])

  return !loading ? (
    <div className="w-full h-full">
      <div className="w-full h-screen flex flex-col justify-between bg-[#0d0d0d] text-white font-Roboto">
        <div className="w-10/12 mx-auto ">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  ) : null

}


export default App
