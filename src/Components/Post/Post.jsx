import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const Post = (props) => {
    return (
        <div>
            <div>
                <div>Name: {props.posts.name}</div>
                <div>Post: {props.posts.text}</div>
            </div>
            <div className="flex-buttons">
                <div>
                    <LikeButton likemessage = 'Like'/>
                </div>
                <div>
                    <DislikeButton dislikemessage = 'Dislike'/>
                </div>
            </div>
        </div>
     );
}
 
export default Post;