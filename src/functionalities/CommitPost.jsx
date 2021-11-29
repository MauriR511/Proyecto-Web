
const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";

//Puede pedir token
const CommitPost = async (newToken, idPost, commitOfUser) => {

    const NewPost = await fetch(`${Base_URL}/post/comment/${idPost}`,
    {
        method: "PATCH",
        headers: 
            {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${newToken}`
            },
        body: JSON.stringify({
            description:`${commitOfUser}`
        })
    });

    if (NewPost.ok) {
        const data = await NewPost.json();
        return data;
    }

    return ("");
}

export default CommitPost;