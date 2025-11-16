const Post = ({title, description, ...props})=>{
    console.log("props", props)
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Post