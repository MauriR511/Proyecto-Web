import { useState, useEffect } from "react";
import LoginService from "../../Services/LoginService";
import { UseContext } from "../../Services/ContextProject";
import { useNavigate } from "react-router-dom";
import VerifyTokenService from "../../Services/VerifyTokenService";
import classes from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const { login, token } = UseContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onsubmitHandler = async (e) => {
        e.preventDefault();
        const logged = login(username, password);
    }

    useEffect(() => {
        if (token) {
            navigate("/redirect");
            //se agrega para que cargen las publicaciones al iniciar por primara vez
            const valuePublication = localStorage.getItem("PublicationType")
            if(valuePublication ==="owned" || valuePublication === "all")
            {
            }else
            {
                localStorage.setItem('PublicationType', `all`)
                window.location.reload(true)
            }
            //fin de lo agregado
        }
    }, [token, navigate])


    return (
        <div className={classes["log"]}>
            <main className={classes["box"]}>
                <form onSubmit={onsubmitHandler}>
                    <h2 className={classes["log1"]}>Login</h2>
                    <div class="userdiv">
                        <input className={classes["user"]} onChange={e => setUsername(e.target.value)} type="text" placeholder="👤 Type your username" />
                    </div>
                    <br />
                    <input className={classes["pass"]} onChange={e => setPassword(e.target.value)} type="password" placeholder="👨🏻‍🦯 Type your password" />
                    <br />
                    <h4>Forgot password?</h4>
                    <button className={classes["btn1"]}>LogIn</button>
                    <br />
                    <h4 >Or sign up using</h4>

                    <div className={classes["social-links"]}>
                        <a target="blank" href=""><img class="Social_media" src="https://www.svgrepo.com/show/349359/facebook.svg" alt="facebook"></img></a>
                        <a target="blank" href=""><img class="Social_media" src="https://www.svgrepo.com/show/349410/instagram.svg" alt="instagram"></img></a>
                        <a target="blank" href=""><img class="Social_media" src="https://www.svgrepo.com/show/349530/tiktok.svg" alt="tiktok"></img> </a>
                    </div>
                </form>
            </main>
        </div>
    );


}

export default Login;