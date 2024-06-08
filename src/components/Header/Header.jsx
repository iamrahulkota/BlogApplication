import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, LogoutBtn } from '../index'

function Header() {

  const navigate = useNavigate();

  const authStatus = useSelector((state)=>{
    state.auth.status
  })

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <>
      <header>
        <nav className='flex justify-between py-10'>
          <div>
            <Link to='/' className='uppercase font-bold text-5xl'>Sleek Stories</Link>
          </div>
          <div>
            <ul className='flex ml-auto'>
              {navItems.map((item)=> 
                item.active ? (
                  <li key={item.name}>
                    <button 
                    className='text-white text-3xl'
                    onClick={()=> navigate(item.slug)}
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