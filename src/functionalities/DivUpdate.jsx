import React, { useState, useEffect } from "react";
import { UseContext } from "../Services/ContextProject";
import classes from "./DivUpdate.module.css";
import UpDatePost from "./UpDatePost";
import { useNavigate } from "react-router-dom";

const DivUpdate = ({OnPost= () => {}}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [idPost, setIdPost] = useState("");
    const { token } = UseContext();

    const inSendController = async (a) => {
        a.preventDefault();
    }
    function pushPicture() {////arreglar y revisar más tarde
        function bueno() {
            const funAdd = UpDatePost( token,  idPost, title, description, image);
            console.log("Usted a realizado una nueva publicación");
            OnPost();
        }
        bueno();
    };
    return (
        <div className={classes["baradd"]} >
            
            <form onSubmit={inSendController}>
            Update:
                <input className={classes["ptn1"]} onChange={a => setTitle(a.target.value)} id="titleText" type="text" placeholder="Title of post" />

                <input className={classes["ptn1"]} onChange={a => setDescription(a.target.value)} id="descriptionText" type="text" placeholder="Add feelings" />

                <input className={classes["ptn1"]} onChange={a => setImage(a.target.value)} id="imageText" type="text" placeholder="URL of img" />

                <input className={classes["ptn1"]} onChange={a => setIdPost(a.target.value)} id="postIdText" type="text" placeholder="Id del post" />

                <button className={classes["btn1"]} onClick={pushPicture}>Publish</button>
            </form>
        </div>
    );
}
export default DivUpdate;