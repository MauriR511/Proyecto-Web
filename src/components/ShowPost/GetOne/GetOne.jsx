const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

const GetOne = async (id) => {
    const transformData = (Posts) => {
        if (!Posts) {
            return null;
        }
        return {
            _id: Posts._id,
            title: Posts.title,
            description: Posts.description,
            image: Posts.image,
            comments: Posts.comments.map(comment => comment),
            user: Posts.user.username,
            likes: Posts.likes.length,
        }
    }


    try {
        const response = await fetch(`${Base_URL}/post/one/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json();

        const PostArray = transformData(data)
        return PostArray;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default GetOne;