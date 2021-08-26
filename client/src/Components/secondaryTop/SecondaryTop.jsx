import React from 'react';
import './secondaryTop.css';
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";


const SecondaryNavbar = () => {
 const [cats, setCats] = useState([]);
 const {user} = useContext(Context);

 console.log('user ->', user);
    axios.post('/api/users', {
    user: 'userID'
    })

 useEffect(() => {
     const getCats = async () => {
         const res = await axios.get("/categories");
         setCats(res.data);
     };
     getCats();

     const onScroll = () => {
        const mybutton = document.getElementById("myBtn");
        if (!mybutton) {
          return;
        }
  
        if (window.pageYOffset > -100) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
  
      window.addEventListener('scroll', onScroll);
  
  
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
    
 }, []);

 /*{cats.map((c) => (
                     <Link to={`/cat/${c.name}`} className="link">
                    <li>#{c.name}</li>
                   
                ))}*/ 

    return (
        <>
            <div id="myBtn"className="naveg1">
                <div className="topnav1 container m-auto justify-center" id="myTopnav">
                     <ul className="flex flex-wrap">
                     <Link to={"/cultura"} className="link uppercase">
                        <li >
                          #Cultura
                        </li>
                      </Link>
                      <Link to={"/desporto"} className="link uppercase">
                        <li >
                          #desporto
                        </li>
                      </Link>


                      <Link to={"/politica"} className="link uppercase">
                        <li >
                          #política
                        </li>
                      </Link>
                      <Link to={"/sustentabilidade"} className="link uppercase">
                        <li >
                          #sustentabilidade
                        </li>
                      </Link>
                      <Link to={"/saude"} className="link uppercase">
                        <li >
                          #saude
                        </li>
                      </Link>
                      <Link to={"/economia"} className="link uppercase">
                        <li >
                          #Economía
                        </li>
                      </Link>
                      <Link to={"/tecnologia"} className="link uppercase">
                        <li >
                          #tecnología
                        </li>
                      </Link>
        </ul>
                </div>
            </div>

        </>
    );
}



export default SecondaryNavbar;