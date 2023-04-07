import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import StartPage from "../pages/StartPage";



function AppRouter () {


    return (
        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    )
}

export default AppRouter

