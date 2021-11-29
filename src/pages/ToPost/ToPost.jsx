import AddPost from "../../functionalities/AddPost";
import React, { useState, useEffect } from "react";
import { UseContext } from "../../Services/ContextProject";
import classes from "./ToPost.module.css";
import { useNavigate } from "react-router-dom";

const ToPost = ({OnPost= () => {}}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { token } = UseContext();

    const inSendController = async (a) => {
        a.preventDefault();
    }
    function pushPicture() {////arreglar y revisar más tarde
        function bueno() {
            const funAdd = AddPost(token, title, description, image);
            console.log("Usted a realizado una nueva publicación");
            OnPost();
        }
        bueno();
    };
    return (
        <div className={classes["baradd"]} >
            <form onSubmit={inSendController}>
                <input className={classes["ptn1"]} onChange={a => setTitle(a.target.value)} id="titleText" type="text" placeholder="Title of post" />

                <input className={classes["ptn1"]} onChange={a => setDescription(a.target.value)} id="descriptionText" type="text" placeholder="Add feelings" />

                <input className={classes["ptn1"]} onChange={a => setImage(a.target.value)} id="imageText" type="text" placeholder="URL of img" />

                <button className={classes["btn1"]} onClick={pushPicture}>Publish</button>
            </form>
        </div>
    );
}
export default ToPost;