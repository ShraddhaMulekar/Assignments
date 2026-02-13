import React, { useEffect, useState } from 'react'
import axios from "axios"

const PostsList = () => {
    const [posts, setPosts] = useState([])

    const fetchPost = async ()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(res.data)
    }

    useEffect(()=>{
        fetchPost()
    },[])
  return (
    <div>
        <h1>Post</h1>
        <div>
            {posts.map((post)=>(
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            ))}
        </div>
    </div>
  )
}

export default PostsList