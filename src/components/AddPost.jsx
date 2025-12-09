import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../store/reducers/posts.reducer"

const AddPost = ()=>{
    const [title, setTitle] = useState("")
    const dispatch = useDispatch();
    console.log(addPost)

    const handleAddPost = ()=>{
        dispatch(addPost({title}));
        setTitle("")
    }
    return (
        <div>
            <input value = {title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick = {handleAddPost}>Add</button>
        </div>
    )

}
export default AddPost