import React from 'react';
import Button from './UI/Button/MyButton.jsx';
import { Link } from 'react-router-dom';

function PostItem (props) {
    const {id, title, body} = props.post;
    const postID = (postID) => postID

    return (
        <div className="post">
            <div className="Post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.remove(props.post)}>Delete</Button>
                <Button onClick={(e) => postID(e.target.id)}>
                    <Link to={postID}>Open</Link>
                </Button>
            </div>
        </div>
    )
}

export default PostItem