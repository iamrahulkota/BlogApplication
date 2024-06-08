import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogoutBtn } from '../index'

function Header() {

  const navigate = useNavigate();

  const authStatus = useSelector((state)=>{
    state.auth.status
  })

  const navItems = [
      {
          name : 'Home',
          Slug : '/',
          active : true,
      }, 
      {
          name : 'Login',
          Slug : '/login',
          active : !authStatus,
      },
      {
          name : 'Signup',
          Slug : '/signup',
          active : !authStatus,
      },
      {
          name : 'AllPosts',
          Slug : 'allposts',
          active : authStatus,
      },
      {
        name : 'AddPosts',
        Slug : 'addposts',
        active : authStatus,
      },
  ]

  return (
    <>
      <header>
        <nav className='flex justify-between py-10'>
          <div>
            <Link to='/' onClick={()=>navigate('/')} className='uppercase font-bold text-5xl'>Sleek Stories</Link>
          </div>
          <div>
            <ul className='flex ml-auto'>
              {navItems.map((item)=> 
                item.active ? (
                  <li key={item.name}>
                    <button 
                    className='text-white text-3xl'
                    onClick={()=> navigate(item.Slug)}
                    >{item.name}</button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}

            </ul>
          </div>
        </nav>
          <div className='w-100 border bg-white opacity-15'></div>
      </header>
    </>
  )
}

export default Header