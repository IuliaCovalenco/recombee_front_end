import React from 'react'
import Footer from '../../Components/footer/Footer.jsx'
import Posts from '../../Components/posts/Posts.jsx';
import './cats.css';
import axios from "axios";
import { useEffect, useState, useContext} from "react";
import { Context } from "../../Context/Context";
import { useLocation } from "react-router";



const CatsPolitica = () => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(Context);
    const { search } = useLocation();

    //recomendados
    const [recommendedPolitica, setRecommendedPolitica] = useState([]);

    const [cats, setCats] = useState([]);
    const [post] = useState([]);

    //resultados dos arrays para quem não está logado
    let arrayresults = [];

    console.log(window.location.href)
    const name = window.location.href
    const catName = name.substr(22+4,name.length)
    console.log(catName);

    console.log('user ->', user);
    axios.post('/api/users', {
    user: 'userID'
    })

    //puxar a info com axios //colocar info 
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search, { 
        posts: posts.categories
      });
      setPosts(res.data);
      console.log(res.data);
    };
    const fetchRecommendedPolitica = async () => {
      const res = await axios.post("/recommended/recommended/politica", {
        user: user._id
      });
      setRecommendedPolitica(res.data);
      console.log(res.data);
    };
    getCats();
    fetchPosts();
    {user && (fetchRecommendedPolitica())}
  }, [search]);

 
    for (let i=0; i<posts.length; i++) {
     //console.log(posts[i]['categories'][0])
      if (posts[i]['categories'][0] === 'politica'){
        if (arrayresults.length <= 3 ){
          arrayresults.push(posts[i])
        }
      }

    }
   


    return (
        <>
        { user && (
          <>
          <div id="myBtn" className="mx-auto postsOrder" >
              <h1 className="pl-5 pt-24">Política</h1>
               <Posts posts={recommendedPolitica}/>
          </div>
          </>
        )}

        { user == null && (
            <div className="mx-auto postsOrder">
              <div>
                <h1 className="pl-5 pt-24">Política</h1>
                <Posts posts={arrayresults}/>
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

export default CatsPolitica;
