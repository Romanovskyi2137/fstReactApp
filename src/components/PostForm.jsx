import React, {useState} from "react";
import Input from "./UI/Input/Input";
import MyButton from "./UI/Button/MyButton";


function PostForm ({create}) {
    const [post, setPost] = useState({title: "", body: ""});

    function addNewPost (e) {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: "", body: ""})
      }

    return (
        <form>
            <Input 
                type={"text"}
                placeholder={"name of post"}
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <Input 
                type={"text"}
                placeholder={"description of post"}
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    )
}


export default PostForm