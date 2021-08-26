import React from 'react';

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { axiosInstance } from '../../config';
import { Context } from "../../Context/Context";
import "./singlePost.css";

export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "https://pressclubnode.herokuapp.com/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const [cats, setCats] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checkedState, setCheckedState] = useState([])


    useEffect(() => {
      const getCats = async () => {
        const res = await axiosInstance.get("/categories");
        setCats(res.data);
      };
      getCats();
    }, []);
  





   /* const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, cats) =>
        cats === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
    };*/

  
    useEffect(() => {
      const getPost = async () => {
        const res = await axiosInstance.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setCategories(res.data.categories);
      };
      getPost();
    }, [path]);
  
    const handleDelete = async () => {
      try {
        await axiosInstance.delete(`/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      } catch (err) {}
    };
  
    const handleUpdate = async () => {
      try {
        await axiosInstance.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
          categories,
        });
        setUpdateMode(false)
      } catch (err) {}
    };

    return (
      <>
      {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        <div className="singlePost">
      <div className="singlePostWrapper">
      <div className="singlePostWrapper1">
      <div className="singlePostWrapper2 container mx-auto">
      {updateMode ? (
            <ul className="updateCategory rounded-lg shadow-lg">
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
            <lable>{cat.name}</lable>
            </li>
            ))}
        </ul>
        ) : (
          <span className="singlePostInfo">
          <b className="singlePostCat" >#{categories}</b>
          </span>
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        </div>
      </div>
      <div className="singlePostWrapper3 container mx-auto">
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
       
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
        </div>
      </div>
    </div>
    </>
    )
}
