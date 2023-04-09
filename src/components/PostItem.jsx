import React from 'react';
import Button from './UI/Button/MyButton.jsx';
import { Link } from 'react-router-dom';

function PostItem (props) {
    const {id, title, body} = props.post;
    

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
                <Button>
                    <Link to={`/posts/${id}`}>Open</Link>
                </Button>
            </div>
        </div>
    )
}

export default PostItem