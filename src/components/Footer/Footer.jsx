import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <div className='w-100 border bg-white opacity-15 my-10'></div>

        <div className='flex flex-col lg:flex-row lg:justify-between '>

          <div>
              <h1 className='text-white font-medium text-base'>Made & Curated by Rahul</h1>
          </div>

          <div className='md:flex font-medium'>

              <div className='px-6'>  
                  <h1 className='text-white py-1'>About</h1>
                  <h1 className='text-white py-1'>Support this project </h1>
              </div>  
              <div className='px-6'>  
                  <h1 className='text-white py-1'>Add a resource</h1>
                  <h1 className='text-white py-1'>Contribute on Github</h1>
              </div>  
              <div className='px-6'>  
                  <h1 className='text-white py-1'>Submit feedback</h1>
                  <h1 className='text-white py-1'>Legal</h1>
              </div> 

          </div>

        </div>  

      </footer>
    </>
  )
}

export default Footer