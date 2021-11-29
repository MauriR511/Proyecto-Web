import Card from "./Card/Card";
import classes from "./ShowAll.module.css"

const ShowAll = ({ posts = [], GetId = () => { }, SetFavorite = () => { }, OnComment = () => {} }) => {

    return (
        <div className={classes["help"]}>
            {
                posts.map(post => {
                    return <Card key={post._id} post={post} GetId={() => { GetId(post._id) }} SetFavorite={() => { SetFavorite(post._id) }} OnComment={((OnComment))}/>
                })
            }
        </div>
    )
}

export default ShowAll;