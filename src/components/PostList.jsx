import { useSelector } from "react-redux"
import AddPost from "./AddPost";
import PostItem from "./PostItem";

const PostList = ()=>{
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <AddPost/>
            {posts.map((post) => (
                <PostItem key ={post.id} post = {post}/>
            ))}
        </div>
    )
}
export default PostList