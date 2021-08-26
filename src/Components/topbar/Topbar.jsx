    import React from 'react';
    import { Link } from "react-router-dom";
    import "./topbar.css";
    import Logo from '../../Assets/logo.png';
    import Artigo from '../../Assets/fundos/artigo.jpg';
    import { Context } from "../../Context/Context";
    import { useContext } from "react";


    export default function Topbar() {
        const { user, dispatch } = useContext(Context);
        const PF = "https://pressclubnode.herokuapp.com/images/"
      
   
        const handleLogout = () => {
            dispatch({ type: "LOGOUT" });
          };

        return (
                <div className="topbarcontainer">
                    <div className="top"> 
                        <div className="topLeft">
                        <Link className="link" to="/">
                            <img className="logo" src={Logo}/>
                        </Link>
                            </div>
                        <div className="topCenter">
                            <ul className="topList">
                                <li className="listItem">Meus Conteúdos</li>
                                <li className="listItem">Área Multimédia</li>
                                <li className="listItem"><Link className="link" to="/write">
                                Escrever
                                </Link></li>
                                <li className="listItem" onClick={handleLogout}>
                                {user && "Sair"}
                            </li>
                            </ul>
                        </div>
                        <div className="topRight">
                            <ul className="topList">
                            <div>
                                { user ? (
                                <ul className="topList">
                                <Link to="/perfil">
                                <img className="listUser" src={PF+user.profilePic} alt=""/>
                                </Link> 
                                </ul>
                                ) : (<ul className="topList">
                            <li className="listItem">
                            <Link className="link" to="/enter">
                            Entrar
                            </Link>
                            </li>
                                <li className="listItem">
                            <Link className="link" to="/register">
                            Registar
                            </Link>
                            </li>
                            </ul>)
                            }
                            </div>
                                <i className="topSearchIcon fas fa-search"></i>
                            </ul>
                        </div>
                    </div>
                </div>
            )
    }
    