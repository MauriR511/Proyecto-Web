import React, { useState, useEffect } from "react";
import classes from "./Post.module.css"
import { UseContext } from "../../Services/ContextProject";
import { useNavigate } from "react-router-dom";

const Post = ({ OnOwnedPost = () => { } }) => {
    const userCon = UseContext();
    const navigate = useNavigate();

    function MyPost(varShow) {
        // cambiar a 'owned' o 'all'
        localStorage.setItem('PublicationType', `${varShow}`)
        window.location.reload(true)//cambiar esto por la si pueden xd
        OnOwnedPost();
    }


    const signOff = (a) => {
        a.preventDefault();
        userCon.logout();
        navigate("/login");
    }

    return (
        <div className={classes["Bodyall"]}>
            <div className={classes["body"]}>
                <header>
                    <div className={classes["wrapper"]}>
                        <div className={classes["logo"]}>InstaSivar</div>

                        <nav className={classes["navig"]}>
                            <a onClick={() => { MyPost('all') }} href="#">Home</a>
                            <a onClick={() => { MyPost('owned') }} href="#">My profile</a>
                            <a onClick={signOff} href="#">Log out</a>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
}
export default Post;