import React from 'react'
import "../posts/posts.css";
import Post from "../post/Post";

export default function Recommend({ recommended } ) {
    
    return (
      <>
        <div className="posts">
             {recommended.map((r) => (
        <Post recommended ={r} />
      ))}
    </div>
      </>
    );
  }