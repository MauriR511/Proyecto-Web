import Card from "../ShowAll/Card/Card";

const ShowPost = ({post = [], GetId = () => { }, SetFavorite = () => { }}) => {
    if (!post) {
        return <div></div>
    }
    else{
        if (typeof post === 'undefined') {
            <div></div>
        }
        else {
            return(
                <div>
                    {
                        <Card key={post._id} post={post} GetId={() => { GetId(post._id) }} SetFavorite={() => { SetFavorite(post._id) }}/>
                    }
                </div>
            )
        }
    }
}

export default ShowPost;