import { useState, useEffect } from "react";
import Post from "../Post/Post";
import GetAll from "../../components/ShowAll/GetAll/GetAll";
import ShowAll from "../../components/ShowAll/ShowAll";
import ToPost from "../ToPost/ToPost";
import GetFavorites from "../../components/ShowFavorites/GetFavorites/GetFavorites";
import ShowFavorites from "../../components/ShowFavorites/ShowFavorites";
import GetOne from "../../components/ShowPost/GetOne/GetOne";
import ShowPost from "../../components/ShowPost/ShowPost";

import classes from "../Admin/Admin.module.css"

const User = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [favorites, setFavorites] = useState([]);
    const [id, setId] = useState(null);
    const [post, setPost] = useState(null);
    const [like, setLike] = useState(null);
    const [favorite, setFavorite] = useState(null);
    const [commentFlag, setCommentFlag] = useState(false);
    const [TooglePost, setTooglePost] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await GetAll(10, page);
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, [page, like, commentFlag,TooglePost]);

    useEffect(() => {
        const GetFavs = async () => {
            try {
                const favs = await GetFavorites();
                setFavorites(favs);
            } catch (error) {
                console.error(error);
            }
        }
        GetFavs();
    }, [favorite,like, commentFlag]);

    const Previous = () => {
        if (page != 0) {
            setPage(page - 1);
        }
    }

    const Next = () => {
        setPage(page + 1);
    }

    const SearchPost = async (e) => {
        e.preventDefault();

        console.log(id);
        const OnePost = await GetOne(id);
        if (OnePost === undefined) {
            console.log(OnePost);
            setPost("");
        }
        else{
            console.log(OnePost);
            setPost(OnePost);
        }
            
    }

    const onPostHandler = () => {
        setTooglePost(!TooglePost);
    }

    const OnComentHandler = () => {
        setCommentFlag(!commentFlag);
    }

    const GetIdHandler = async (id) => {
        console.log(id);
        const token = localStorage.getItem("token");

        const Handlerlike = await fetch(`https://posts-pw2021.herokuapp.com/api/v1/post/like/${id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        console.log(Handlerlike);
        setLike(Handlerlike);

        console.log(like)
    }

    const SetFavoriteHandler = async (id) => {
        console.log(id);
        const token = localStorage.getItem("token");

        const favorite = await fetch(`https://posts-pw2021.herokuapp.com/api/v1/post/fav/${id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        setFavorite(favorite);
    }

    return (
        <div className={classes["favs"]}>
            <Post />
            <ShowAll posts={posts} GetId={GetIdHandler} SetFavorite={SetFavoriteHandler} OnComment={OnComentHandler}/>
            <div className={classes["wrapper"]} >
                <div className={classes["divider"]}></div>
                <button className={classes["btn2"]} onClick={Previous} type="click">Previous Page</button>
                <div className={classes["divider"]}></div>
                <button className={classes["btn2"]} onClick={Next} type="click">Next Page</button>
                <div>
            </div>

                <hr />
                <h2> Favorites</h2>
                <ShowFavorites favorites={favorites} GetId={GetIdHandler} SetFavorite={SetFavoriteHandler} OnComment={OnComentHandler}/>
            </div>
            <div className={classes["search"]}>
                <h2>Search specific post</h2>
                <form onSubmit={SearchPost}>
                    <label htmlFor="Buscar_post">Insert Id:</label>
                    <div className={classes["divider"]}></div>
                    <input className={classes["ptn2"]} type="text" name="Buscar_post" onChange={e => setId(e.target.value)} />
                    <div className={classes["divider"]}></div>
                    <button className={classes["btn2"]}>Search</button>
                </form>
                <ShowPost post={post}  GetId={GetIdHandler} SetFavorite={SetFavoriteHandler} OnComment={OnComentHandler}/>
            </div>
        </div>
    );
}

export default User;