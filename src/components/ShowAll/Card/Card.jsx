import classes from "./Card.module.css"
import { UseContext } from "../../../Services/ContextProject";//añadido
import CommitPost from "../../../functionalities/CommitPost";//añadido
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DeletePost from "../../DeletePost/DeletePost";

const Card = ({ post, GetId = () => { }, SetFavorite = () => {}, OnComment= () => {} }) => {
    const [comment, SetComment] = useState("");
    const src = post.image ?? "https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=20";
    const { token } = UseContext();///añadido
    const navigate = useNavigate();

    const PruebaInput = (e) => {
        e.preventDefault();
        //Para poder comentar
        console.log(comment);
        const newCommit = CommitPost(token, post._id , comment);
        OnComment();
        SetComment("");
    }
    const newDeletePost = (e) => {
        e.preventDefault();
        //Para poder comentar
        const deleteMyPost = DeletePost(token, post._id);
        //hacer lo mismo que OnComment para que salga
    }

    return (
        <div className={classes["front"]}>
            <div className={classes["Instasivar-card"]}>
                <div className={classes["Instasivar-card-header"]}>
                    <div class="user">{post.user}</div>
                    <div className={classes["title1"]} >{post.title}</div>
                    <div className={classes["heart1"]} onClick={() => { SetFavorite(); }}>⭐</div>
                    {/* <div class="Instagram-card-time"> 1 sem </div> */}
                </div>
                <div className={classes["divider2"]}></div>
                <button className={classes["btn4"]} onClick = {newDeletePost}>Ocultar</button>

                <div /* class="Instagram-card-image" */>
                    <img className={classes["imgclas"]} src={src} alt="" />
                </div>

                <div className={classes["Instasivar-card-content"]}>

                    {/*  <div className={id["heart"],classes["button"]}></div> */}
                    <p className={classes["description"]}>
                        <span className={classes["heart"]} onClick={() => { GetId(); }}>💓</span> {post.likes} Me gusta
                    </p>
                    <a ><div className={classes["description"]}>{post.description}</div></a>
                    <a className={classes["cmmts"]} href="#">Comments</a>
                  {/*   <hr className={classes["hr1"]} /> */}
                    <div>
                        {
                            post.comments.map((comment, index) => (
                                <ul key={Math.random()}>
                                    <li key={Math.random()}>
                                        <div className={classes["user1"]}>{comment.user.username}</div> <div className={classes["descr1"]}>: {comment.description}</div>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                    <br />
                    <hr className={classes["hr1"]} />
                    <form onSubmit={PruebaInput}>
                        <input className={classes["inpubx1"]} value={comment} onChange={e => SetComment(e.target.value)} type="text" placeholder="Add a comment" />
                        <div className={classes["divider"]}></div>
                        <button className={classes["btn4"]}>Post 💬</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Card;