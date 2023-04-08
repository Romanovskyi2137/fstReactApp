import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";

function PostPage () {
    const { postID } = useParams();
    const { title, body } = PostService.getPost(postID);
    const [post, setPost] = useState([{postTitle: null, postBody: null}]);
    setPost({postTitle: title, postBody: body})
    

    return (
        <div>
            <h1>Post {postID}, page.</h1>
            <div className="post__title">
                {post.title}
            </div>
            <div classname="post__body">
                {post.body}
            </div>
        </div>
    )
}
export default PostPage