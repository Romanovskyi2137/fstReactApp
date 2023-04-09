import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../myHooks/useFetching";
import Loader from '../components/UI/Loader/Loader.jsx'

function PostPage () {
    const { postID } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (postID) => {
        const response = await PostService.getById(postID);
        setPost(response.data)
    });
    const [fetchPostComById, isComLoading, comError] = useFetching( async (postID) => {
        const response = await PostService.getComById(postID);
        setComments(response.data)
    });
    useEffect(() => {
        fetchPostById(postID);
        fetchPostComById(postID)
    }, [])
    
    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div>
                    <h1>Post {post.id}, page.</h1>
                    <div className="post__title">
                        {post.title}
                    </div>
                    <div className="post__body">
                        {post.body}
                    </div>
                    <div>
                        <h2>Comments</h2>
                        {isComLoading
                            ? <Loader/>
                            : <div>
                                {comments.map(com =>
                                    <div style={{marginTop: "5px"}}>
                                        <h5>{com.email}</h5>
                                        <h5>{com.name}</h5>
                                        <p>{com.body}</p>
                                    </div>
                                )}
                              </div>
                        }
                    </div>
                  </div>
            }
        </div>
    )
}
export default PostPage