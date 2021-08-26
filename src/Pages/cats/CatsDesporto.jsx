import React from 'react'
import Footer from '../../Components/footer/Footer.jsx'
import Posts from '../../Components/posts/Posts.jsx';
import './cats.css';

import { useEffect, useState, useContext} from "react";
import { Context } from "../../Context/Context";
import { useLocation } from "react-router";
import { axiosInstance } from '../../config.js';



const CatsDesporto = () => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(Context);
    const { search } = useLocation();

    //recomendados
    const [recommendedDesporto, setRecommendedDesporto] = useState([]);
  

    const [cats, setCats] = useState([]);
    const [post] = useState([]);

    //resultados dos arrays para quem não está logado
    let arrayresultsDesporto = [];

    console.log(window.location.href)
    const name = window.location.href
    const catName = name.substr(22+4,name.length)
    console.log(catName);

  

    console.log('user ->', user);
    axiosInstance.post('/api/users', {
    user: 'userID'
    })

    //puxar a info com axiosInstance //colocar info 
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search, { 
        posts: posts.categories
      });
      setPosts(res.data);
      console.log(res.data);
    };
    const fetchRecommendedDesporto = async () => {
      const res = await axiosInstance.post("/recommended/recommended/desporto", {
        user: user._id
      });
      setRecommendedDesporto(res.data);
      console.log(res.data);
    };
    getCats();
    fetchPosts();
    {user && (fetchRecommendedDesporto())}
  }, [search]);

 
    for (let i=0; i<posts.length; i++) {
     //console.log(posts[i]['categories'][0])
      if (posts[i]['categories'][0] === 'desporto'){
        if (arrayresultsDesporto.length <= 3 ){
        arrayresultsDesporto.push(posts[i])
        }
      }

    }
   


    return (
        <>
        { user && (
          <>
          <div className="mx-auto postsOrder" >
              <h1 className="pl-5 pt-24">Desporto</h1>
               <Posts posts={recommendedDesporto}/>
          </div>
          </>
        )}

        { user == null && (
            <div className="mx-auto postsOrder">
              <div>
                <h1 className="pl-5 pt-24">Desporto</h1>
                <Posts posts={arrayresultsDesporto}/>
              </div>
              <div>
              <div>
        </div>
              </div>
            </div>
        )}
          
            <div className="bg-gray-50">
            <Footer />
            </div>
        
        </>
    );
}

export default CatsDesporto;