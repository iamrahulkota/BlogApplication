import React, {useEffect, useState} from 'react'
import { Container, PostForm } from '../components/index'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {Slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (Slug) {
            appwriteService.getPost(Slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [Slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost