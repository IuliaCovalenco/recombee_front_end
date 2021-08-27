import React from 'react'
import { axiosInstance } from '../../config.js';
import { useState, useEffect } from "react";
import './register.css'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Fundo from "../../Assets/fundos/registo1.png"


const Container = styled.div`
      background-image: url(${Fundo});
      background-size: cover;
      width:100%;

      .overlay  {
        width:100vw;
        height:100vh;
        background:rgba(255, 255, 255, 0.8);
    }
`



const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [cats, setCats] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  const [showResults, setShowResults] = useState(false);
  const [showResultsCats, setShowResultsCats] = useState(false);
  const onClick = () => setShowResults(wasOpened => !wasOpened);
  const onClickCats = () => setShowResultsCats(wasOpened => !wasOpened);

  const [cits, setCits] = useState([]);
  const [cities, setCities] = useState([]);

  let arrayresults = [];

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, cits) =>
      cits === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };


  for (let i=0; i<cits.length; i++) {
    if(cits == checkedState) {
      arrayresults.push(cits[i])
      console.log()
    }
  }

  useEffect(() => {
    const getCats = async () => {
        const res = await axiosInstance.get("/categories");
        setCats(res.data);
    };
    const getCits = async () => {
      const res = await axiosInstance.get("/cities");
      setCits(res.data);
    };
    getCits();
    getCats();
}, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
        cities,
        categories
      });
      res.data && window.location.replace("/enter");
    } catch (err) {
      setError(true);
    }
  };

  console.log(setCities)
  return (
    <Container className="register">
      
      <form className="registerForm" onSubmit={handleSubmit}>
      <span className="registerTitle">Regista-te na plataforma PressClub</span>

      <div className="dataForm">
        <label>Nome</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Insere o teu nome"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Insere o seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Palavra chave</label>
        <input className="placeholder-white::placeholder"
          type="password"
          className="registerInput"
          placeholder="Insere a password"
          onChange={(e) => setPassword(e.target.value)}
        />

    </div>
        <div className="catsForm mt-10  "> 
        <div className="flex flex-wrap border-2 border-white rounded-2xl p-2.5 ">
          <p className="pr-4">Categórias de preferência</p>
          <a onClick={onClickCats} className="fas fa-chevron-down self-end pl-12"></a>
        </div>
        {showResultsCats && (
           <ul className="rounded-lg shadow-lg mt-4 p-6">
            {cats.map((cat) => (
            <li>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${cats}`}
                  name={categories}
                  value={cat.name}
                  checked={checkedState[categories]}
                  //onChange={e=>setCategories(e.target.value)
                  onChange={(e) => {
                      if (e.target.checked) {
                        setCategories([...categories, e.target.value])
                      }
                    }
                  }
                />
            <lable>  {cat.name}</lable>
            </li>
            ))}
        </ul>
        )}
        <div className="mt-1.5">
          <div className="flex flex-wrap border-2 border-white rounded-2xl p-2.5 mt-8 ">
                <p className="pr-4">Regiões de preferência</p>
                <a onClick={onClick} className="fas fa-chevron-down pl-20"></a>
          </div>
          {showResults && (
             <ul className="rounded-lg shadow-lg mt-8 p-6">
              {cits.map((cit) => (
              <li>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${cits}`}
                    name={cities}
                    value={cit.name}
                    //checked={checkedState[cities]}
                    //onChange={e=>setCities(e.target.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCities([...cities, e.target.value])
                      }
                    }}
                  />
              <lable>   {cit.name}</lable>
              </li>
              ))}
          </ul>
          ) }
          </div>
          <button className="registerButton" type="submit">
          Register
        </button>
          </div>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/enter">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </Container>
  );
}


export default Register;