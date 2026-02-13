import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { themeContext, ThemeProvider } from '../context/ThemeContext' 

const PostsList = () => {
    const [posts, setPosts] = useState([])
    const {theme} = useContext(themeContext)

    const fetchPost = async ()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(res.data)
    }

    useEffect(()=>{
        fetchPost()
    },[])
  return (
    <div className={`postList {theme}`}>
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