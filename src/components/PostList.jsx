import React, {useState} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem.jsx";



function PostList ({posts, remove}) {

    if (!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Posts not found!
            </h1>
        )
    }

    return  (
        <div className="PostList">
            <h1 style={{
                    textAlign: "center",
                    marginTop: "15px"
                }}>
                    Post list
            </h1>
            <div >
                <TransitionGroup>
                    {posts.map((item, index) => 
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem post={item} remove={remove} number={index + 1}/>
                        </CSSTransition>
                    )}     
                </TransitionGroup>
            </div>
        </div>
    )
    
}

export default PostList