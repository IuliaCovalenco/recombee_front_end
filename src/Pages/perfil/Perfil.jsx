import React from 'react'
import './perfil.css';
import Foto from '../../Assets/fundos/artigo.jpg'
import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";
import Footer from '../../Components/footer/Footer.jsx';





const Perfil = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  //const [cats, setCats] = useState([]);
  //const [categories, setCategories] = useState([]);
  //const [checkedState, setCheckedState] = useState([]);


  //const [cits, setCits] = useState([]);
  //const [cities, setCities] = useState([]);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"


  /*useEffect(() => {
    const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
    };
    const getCits = async () => {
      const res = await axios.get("/cities");
      setCits(res.data);
    };
    getCits();
    getCats();
}, []);*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      password,
      //categories,
      //cities
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

    return (
      <div>
        <img className="settingsImage" src={Foto}  alt="CapaPerfil"/>
        <div className="settings container mx-auto ">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <p className="settingsUpdateTitle">Atualize a Conta</p>
          <span className="settingsDeleteTitle">Apagar a Conta</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Nome</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Palavra-chave</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
           
    </div>
    <div className="bg-gray-50">
       <Footer/>
    </div>
   
    </div>
    )
}


export default Perfil;