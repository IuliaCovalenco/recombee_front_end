import React from 'react';
import Post from '../post/Post.jsx';
import './posts.css'

const Posts = ({ posts }) => {
    return (
        <>
            <div className="posts grid grid-cols-1 grid-flow-row gap-12 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 lg:pl-6" >
            {posts.map((p) => (
            <Post post={p} />
      ))}
                 
            </div>
        </>
    )
}


export default Posts;