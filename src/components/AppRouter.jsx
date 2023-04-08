import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { Route, Routes } from "react-router-dom";
import StartPage from "../pages/StartPage";
import PostPage from "../pages/PostPage";



function AppRouter () {


    return (
        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:postID" element={<PostPage/>}/>
        </Routes>
    )
}

export default AppRouter

