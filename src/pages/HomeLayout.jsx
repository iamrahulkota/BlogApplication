import React, {useEffect, useState} from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/config'
import { Navigate, useNavigate } from 'react-router-dom'


function HomeLayout() {

  const navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    appwriteService.getsPosts().then((posts)=>{
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <>
          <div className='my-40 text-[#878787] '>
  
                  <h1 className='font-medium text-center mx-auto text-3xl leading-10 lg:leading-[70px] lg:text-6xl lg:w-2/4 '> Your one-stop shop for effortless <span className='text-white'>blogging</span> </h1>
  
                  <p className='mx-auto text-center text-lg lg:text-xl my-24'>Want to write and read great stories?<br></br>
                  <span className='text-white hover:text-blue-600 cursor-pointer' onClick={()=>navigate('/login')}>Join</span> Sleek Stories today! Share your best work and discover new favorites.</p>
          </div>
      </>
    )
  }

  return (
    <div className='w-full py-8'>
        <Container >
          <div className='flex flex-wrap'>
            {posts.map((post)=>{
              <div className='p-2 w-1/4' key={post.$id}>
                <PostCard {...post} />
              </div>
            })}
        </div>
      </Container>
    </div>
  )
  
}

export default HomeLayout