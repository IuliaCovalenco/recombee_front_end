import React from 'react'
import "./write.css";
import { axiosInstance } from '../../config.js';
import { useEffect, useState, useContext } from "react";
import { Context } from "../../Context/Context";


const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  
  const [cats, setCats] = useState([]);
  const [categories, setCategories] = useState([]);

  const [cits, setCits] = useState([]);
  const [cities, setCities] = useState([]);

  const onClick = () => setShowResults(wasOpened => !wasOpened);
  const onClickCats = () => setShowResultsCats(wasOpened => !wasOpened);
  const [showResults, setShowResults] = useState(false);
  const [showResultsCats, setShowResultsCats] = useState(false);



  const [checkedState, setCheckedState] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  useEffect(() => {
    const getCits = async () => {
      const res = await axiosInstance.get("/cities");
      setCits(res.data);
    };
    getCits();
  }, []); 

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, cats) =>
      cats === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
      cities,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
      console.log(res.data._id)
    } catch (err) {}
  };

    return (
      <>
        {file && (
        <img className="writeImg w-full" src={URL.createObjectURL(file)} alt="" />
      )}
        <div className="writeCont">
            <div className="write">
     
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="titleAndDesc"> 
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" , width : "100%" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        </div>

        <div className="catscities  mt-10" >
        <div className="grid grid-cols-2 justify-items-stretch border-2 rounded-2xl p-2.5 bgCatsCities">
          <p className="pr-4">Categórias</p>
          <a onClick={onClickCats} className="fas fa-chevron-down justify-self-end pr-4"></a>
        </div>
        {showResultsCats && (
          <ul className="bgCatsCities rounded-lg shadow-lg">
              {cats.map((cat) => (
              <li>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${cats}`}
                    name={categories}
                    value={cat.name}
                    checked={checkedState[categories]}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategories([...categories, e.target.value])
                      }
                    }}
                  />
              <lable>   {cat.name}</lable>
              </li>
              ))}
          </ul>
          )}
          <div className="mt-1.5">
          <div className=" grid grid-cols-2 justify-items-stretch border-2 rounded-2xl p-2.5 mt-8 bgCatsCities ">
                <p className="pr-4">Regiões</p>
                <a onClick={onClick} className="fas fa-chevron-down justify-self-end pr-4"></a>
          </div>
          {showResults && (
          <ul className="bgCatsCities rounded-lg shadow-lg">
              {cits.map((cit) => (
              <li>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${cits}`}
                    name={cities}
                    value={cit.name}
                    checked={checkedState[cities]}
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
        
        <button className="writeSubmit rounded-lg shadow-lg"  style= {{marginTop: '550px'}}type="submit">
          Publish
        </button>

        </div>
        
      </form>
    </div>
        </div>
        </>
    )
}


export default Write;