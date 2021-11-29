const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const token = localStorage.getItem("token");
const PublicationType1 = localStorage.getItem("PublicationType");// cambiar a 'owned' o 'all' para elegir el tipo de inicio

const ShowAll = async (limit,page) => {
    const TransformData = (Posts) => {
        if (!Posts) {
            return null;
        }

        return{
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
        const response = await fetch(`${Base_URL}/post/${PublicationType1}?limit=${limit}&page=${page}`,{
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        });
        const data = await response.json();
        
        const MappedData = data.data.map(post => TransformData(post));

        return MappedData;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export default ShowAll;