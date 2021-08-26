import React from 'react'
import Footer from '../../Components/footer/Footer.jsx'
import Posts from '../../Components/posts/Posts.jsx';
import './cats.css';
import axios from "axios";
import { useEffect, useState, useContext} from "react";
import { Context } from "../../Context/Context";
import { useLocation } from "react-router";



const CatsSustentabilidade = () => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(Context);
    const { search } = useLocation();

    //recomendados
    const [recommendedSustentabilidade, setRecommendedSustentabilidade] = useState([]);

    const [cats, setCats] = useState([]);
    const [post] = useState([]);

    //resultados dos arrays para quem não está logado
    let arrayresultsSustentabilidade = [];

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
    const fetchRecommendedSustentabilidade = async () => {
      const res = await axios.post("/recommended/recommended/sustentabilidade", {
        user: user._id
      });
      setRecommendedSustentabilidade(res.data);
      console.log(res.data);
    };
    getCats();
    fetchPosts();
    {user && (fetchRecommendedSustentabilidade())}
  }, [search]);

 
    for (let i=0; i<posts.length; i++) {
     //console.log(posts[i]['categories'][0])
     if (posts[i]['categories'][0] === 'sustentabilidade'){
        if (arrayresultsSustentabilidade.length <= 3 ){
        arrayresultsSustentabilidade.push(posts[i])
        }
      }
    }
   


    return (
        <>
        { user && (
          <>
          <div className="mx-auto postsOrder" >
              <h1 className="pl-5 pt-24">Sustentabilidade</h1>
               <Posts posts={recommendedSustentabilidade}/>
          </div>
          </>
        )}

        { user == null && (
            <div className="mx-auto postsOrder">
              <div>
                <h1 className="pl-5 pt-24">Sustentabilidade</h1>
                <Posts posts={arrayresultsSustentabilidade}/>
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

export default CatsSustentabilidade;