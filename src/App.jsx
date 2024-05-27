import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"

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

  if (loading){
    return null
  }else{
    return (
      <>
        <div className="min-h-screen flex flex-wrap content-between bg-[0d0d0d] text-white">
          <div className="w-full block">
            <Header />
            <main>
              {/* <Outlet /> */}
            </main>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default App
