import { useDispatch } from "react-redux"
import { deletePost } from "../store/reducers/posts.reducer";

const PostItem = ({post})=>{
    const dispatch = useDispatch()
    const onDelete = () =>{
        dispatch(deletePost({id:post.id}))
    }
    return (
        <div key={post.id}>
                    <h2>{post.title}</h2>
                    <button onClick={onDelete}>Huy teper udali</button>
                </div>
    )
}
export default PostItem