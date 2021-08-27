  import React from 'react'
  import Footer from '../../Components/footer/Footer.jsx'
  import Posts from '../../Components/posts/Posts.jsx';
  import './home.css';
  import Loading from '../../Components/loading/Loading.jsx';
  import { useEffect, useState, useContext} from "react";
  import { Context } from "../../Context/Context";
  import { useLocation } from "react-router";
  import { axiosInstance } from '../../config.js';



  const Homepage = () => {
      const [posts, setPosts] = useState([]);
      const {user} = useContext(Context);
      const { search } = useLocation();

      //loading
      const [isLoading, setIsLoading] = useState(false)

      const loadValor = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1500)
      }

      //recomendados
      const [recommended, setRecommended] = useState([]);
      const [recommendedCulture, setRecommendedCulture] = useState([]);
      const [recommendedDesporto, setRecommendedDesporto] = useState([]);
      const [recommendedPolitica, setRecommendedPolitica] = useState([]);
      const [recommendedEconomia, setRecommendedEconomia] = useState([]);
      const [recommendedSustentabilidade, setRecommendedSustentabilidade] = useState([]);
      const [recommendedTecnology, setRecommendedTecnology] = useState([]);
      const [recommendedSaude, setRecommendedSaude] = useState([]);

      const [cats, setCats] = useState([]);
      const [post] = useState([]);

      //resultados dos arrays para quem não está logado
      let arrayresults = [];
      let arrayresultsCultura = [];
      let arrayresultsDesporto = [];
      let arrayresultsSustentabilidade = [];
      let arrayresultsEconomia = [];
      let arrayresultsSaude = [];
      let arrayresultsTecnologia = [];

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
      const fetchRecommended = async () => {
        const res = await axiosInstance.post("/recommended/recommended", {
          user: user._id,
          
        });
        setRecommended(res.data);
        console.log(res.data);
      };
      const fetchRecommendedCulture = async () => {
        const res = await axiosInstance.post("/recommended/recommended/culture", {
          user: user._id
        });
        setRecommendedCulture(res.data);
        console.log(res.data);
      };
      const fetchRecommendedDesporto = async () => {
        const res = await axiosInstance.post("/recommended/recommended/desporto", {
          user: user._id
        });
        setRecommendedDesporto(res.data);
        console.log(res.data);
      };
      const fetchRecommendedPolitica = async () => {
        const res = await axiosInstance.post("/recommended/recommended/politica", {
          user: user._id
        });
        setRecommendedPolitica(res.data);
        console.log(res.data);
      };
      const fetchRecommendedSustentabilidade = async () => {
        const res = await axiosInstance.post("/recommended/recommended/sustentabilidade", {
          user: user._id
        });
        setRecommendedSustentabilidade(res.data);
        console.log(res.data);
      };
      const fetchRecommendedEconomia = async () => {
        const res = await axiosInstance.post("/recommended/recommended/economia", {
          user: user._id
        });
        setRecommendedEconomia(res.data);
        console.log(res.data);
      };
      const fetchRecommendedSaude = async () => {
        const res = await axiosInstance.post("/recommended/recommended/saude", {
          user: user._id
        });
        setRecommendedSaude(res.data);
        console.log(res.data);
      };
      const fetchRecommendedTecnologia = async () => {
        const res = await axiosInstance.post("/recommended/recommended/tecnologia", {
          user: user._id
        });
        setRecommendedTecnology(res.data);
        console.log(res.data);
      };
      getCats();
      fetchPosts();
      loadValor();
      {user && (fetchRecommended())}
      {user && (fetchRecommendedCulture())}
      {user && (fetchRecommendedDesporto())}
      {user && (fetchRecommendedPolitica())}
      {user && (fetchRecommendedSustentabilidade())}
      {user && (fetchRecommendedEconomia())}
      {user && (fetchRecommendedSaude())}
      {user && (fetchRecommendedTecnologia())}
    }, [search]);

  
      for (let i=0; i<posts.length; i++) {
      //console.log(posts[i]['categories'][0])
        if (posts[i]['categories'][0] === 'politica'){
          if (arrayresults.length <= 3 ){
            arrayresults.push(posts[i])
          }
        }
        else if (posts[i]['categories'][0] === 'cultura'){
          if (arrayresultsCultura.length <= 3 ){
          arrayresultsCultura.push(posts[i])
          }
        }
        else if (posts[i]['categories'][0] === 'desporto'){
          if (arrayresultsDesporto.length <= 3 ){
          arrayresultsDesporto.push(posts[i])
          }
        }
        else if (posts[i]['categories'][0] === 'sustentabilidade'){
          if (arrayresultsSustentabilidade.length <= 3 ){
          arrayresultsSustentabilidade.push(posts[i])
          }
        }
        else if (posts[i]['categories'][0] === 'economía'){
          if (arrayresultsEconomia.length <= 3 ){
          arrayresultsEconomia.push(posts[i])
          }
        }
        else if (posts[i]['categories'][0] === 'saúde'){
          if (arrayresultsSaude.length <= 3 ){
          arrayresultsSaude.push(posts[i])
          }
        }
        else if (posts[i]['categories'][0] === 'tecnología'){
          if (arrayresultsTecnologia.length <= 3 ){
          arrayresultsTecnologia.push(posts[i])
          }
        }

      }
    


      return (
          <>
          {!isLoading ? (
          <>
        { user && (
            <>
            <div className="mx-auto postsOrder" >
              <h1 className="pl-5 pt-24">Destaques PressClub</h1>
                <Posts posts={recommended}/>
            </div>
            <div className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Cultura</h1>
                <Posts posts={recommendedCulture}/>
            </div>
            <div className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Desporto</h1>
                <Posts posts={recommendedDesporto}/>
            </div>
            <div id="myBtn" className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Política</h1>
                <Posts posts={recommendedPolitica}/>
            </div>
            <div className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Sustentabilidade</h1>
                <Posts posts={recommendedSustentabilidade}/>
            </div>
            <div className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Economía</h1>
                <Posts posts={recommendedEconomia}/>
            </div>
            <div className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Saúde</h1>
                <Posts posts={recommendedSaude}/>
            </div>
            <div className="mx-auto postsOrder" >
                <h1 className="pl-5 pt-24">Tecnología</h1>
                <Posts posts={recommendedTecnology}/>
            </div>

            </>
          )}

          { user == null && (
              <div className="mx-auto postsOrder">
                <div>
                  <h1 className="pl-5 pt-24">Destaques PressClub</h1>
                    <Posts className="" posts={posts}/>
                </div>
                <div>
                  <h1 className="pl-5 pt-24">Política</h1>
                  <Posts posts={arrayresults}/>
                </div>
                <div>
                  <h1 className="pl-5 pt-24">Cultura</h1>
                  <Posts posts={arrayresultsCultura}/>
                </div>
                <div>
                  <h1 className="pl-5 pt-24">Desporto</h1>
                  <Posts posts={arrayresultsDesporto}/>
                </div>
                <div>
                  <h1 className="pl-5 pt-24">Sustentabilidade</h1>
                  <Posts posts={arrayresultsSustentabilidade}/>
                </div>
                <div>
                  <h1 className="pl-5 pt-24">Economía</h1>
                  <Posts posts={arrayresultsEconomia}/>
                </div>
                <div>
                  <h1 className="pl-5 pl-4 pt-24">Tecnología</h1>
                  <Posts posts={arrayresultsTecnologia}/>
                </div>
                <div>
                  <h1 className="pl-5 pt-24">Saúde</h1>
                  <Posts posts={arrayresultsSaude}/>
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

          ) : 
        
        <Loading/>
      }
        
          
          </>
      );
  }

  export default Homepage;