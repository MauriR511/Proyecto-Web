import GetOne from "../../ShowPost/GetOne/GetOne";

const Base_URL = "https://posts-pw2021.herokuapp.com/api/v1";
const token = localStorage.getItem("token");

const GetFavorites = async () => {
    

    const response = await fetch(`${Base_URL}/post/fav`,{
        headers: {
            "Authorization": `Bearer ${ token }`
        }
    })
    const data = await response.json();

    const MappedData = data.favorites.map(fav => GetOne(fav));
    const Result = await Promise.all(MappedData);
    return Result;


}

export default GetFavorites;