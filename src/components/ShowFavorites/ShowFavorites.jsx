import GetOne from "../ShowPost/GetOne/GetOne";
import Card from "../ShowAll/Card/Card";

const ShowFavorites = ({favorites = [], GetId = () => { }, SetFavorite = () => { }, OnComment = () => {}}) => {
    
    return (
        <div>
            {
                favorites.map(fav => {
                    if(fav._id=== undefined){}
                    else{return <Card key={fav._id} post={fav} GetId={() => { GetId(fav._id) }} SetFavorite={() => { SetFavorite(fav._id) }} OnComment={((OnComment))}/>}
                })
            }
        </div>
    )
}

export default ShowFavorites;

