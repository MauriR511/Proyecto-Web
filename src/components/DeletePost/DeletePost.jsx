const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";

//Puede pedir token
const DeletePost = async (newToken, idPost) => {
    const NewPost = await fetch(`${Base_URL}/post/toggle/${idPost}`,
    {
        method: "PATCH",
        headers: 
            {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${newToken}`
            },
    });

    if (NewPost.ok) {
        const data = await NewPost.json();
        return data;
    }
    return ("");
}

export default DeletePost;