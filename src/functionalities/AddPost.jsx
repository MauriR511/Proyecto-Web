
const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";

//Puede pedir token
const AddPost = async (newToken, newTitle, newDescription, newImage) => {

    const NewPost = await fetch(`${Base_URL}/post/create`,
    {
        method: "POST",
        headers: 
            {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${newToken}`
            },
        body: JSON.stringify({
            title:`${newTitle}`,
            description: `${newDescription}`,
            image:`${newImage}`
        })
    });

    if (NewPost.ok) {
        const data = await NewPost.json();
        return data;
    }

    return ("");
}

export default AddPost;