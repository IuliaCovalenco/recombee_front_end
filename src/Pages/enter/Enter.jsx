import React from 'react'

import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from '../../config';
import { Context } from "../../Context/Context";
import './enter.css'
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

const Enter = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/enter", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Container className="login">
      
      <div className="login2">
      <form className="loginForm" onSubmit={handleSubmit}>
      <span className="loginTitle">Faz login com o teu e-mail na plataforma PressClub</span>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Insere o seu nome do utilizador"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Insere a sua password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      </div>
    </Container>
  );
}

export default Enter;