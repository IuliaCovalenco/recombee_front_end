import React from 'react';
import SinglePost from "../../Components/singlePost/SinglePost";
import { useContext, useEffect, useState, useLocation } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";
import Footer from "../../Components/footer/Footer";
import Posts from "../../Components/posts/Posts";


const Single = () => {

  const {user} = useContext(Context);
  const [posts, setPosts] = useState([]);


  //reocmendados
  const [recommended, setRecommended] = useState([]);
  const [recommendedForUser, setRecommendedForUser] = useState([]);

  console.log('user ->', user);
  console.log(window.location.href)
  const id = window.location.href

  
  
 const postID = id.substr(22+5,id.length)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts", { 
        posts: posts.categories
      });
      setPosts(res.data);
      console.log(res.data);
    };
    const fetchRecommendedForUser = async () => {
      const res = await axios.post("/recommended/recommended/personal", {
        user: user._id
      });
      setRecommendedForUser(res.data);
      console.log(res.data);
    };
    const fetchRecommended = async () => {
      const res = await axios.post("/recommended/recommended/click", {
        user: user._id,
        postID,
      });
      setRecommended(res.data);
      console.log(res.data);
    };
    fetchPosts();
    {user && (fetchRecommendedForUser())}
    {user && (fetchRecommended())}
  }, []);

    return (
      <>
      <div className="single">
        <SinglePost/>
      </div>
          <div>
          { user && 
          <div className="mx-auto postsOrder" >
            <h1 className="pl-5 pt-60">Recomendados para si</h1>
               <Posts posts={recommendedForUser}/>
          </div>
}
          </div>
      <div className="bg-gray-50">
          <Footer/>
      </div>
    

      </>
    );
  }


export default Single;