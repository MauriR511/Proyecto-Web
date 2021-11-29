const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const LoginService = async (username,password) => {

    const ApiPost = await fetch(`${Base_URL}/auth/signin`,{
        headers: 
            {
            'Content-Type': 'application/json'
            },
        method: 
            'POST',
        body: 
            JSON.stringify({
                username: username,
                password: password
            })
    });

    if (ApiPost.ok) {
        const data = await ApiPost.json();
        return data;
    }
    return "";
}

export default LoginService;