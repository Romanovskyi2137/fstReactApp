import React from "react";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import { Route, Routes } from "react-router-dom";
import StartPage from "../pages/StartPage.jsx";
import PostPage from "../pages/PostPage.jsx";
import { router } from "../router/router.js";


function AppRouter () {


    return (
        <Routes>
            {router.map((route) => {
                return (
                    <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                    />)
            })}
        </Routes>
    )
}

export default AppRouter