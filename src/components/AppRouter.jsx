import React from "react";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import { Route, Routes, redirect } from "react-router-dom";
import StartPage from "../pages/StartPage.jsx";
import PostPage from "../pages/PostPage.jsx";
import { privateRoutes, publicRoutes } from "../router/router.js";
import Login from "../pages/Login.jsx";


function AppRouter () {
    const isAuth = true;

    return (
        <Routes>
            {isAuth 
                ? 
                    privateRoutes.map((route) => {
                        return (
                            <Route 
                                path={route.path} 
                                element={route.element} 
                                exact={route.exact}
                            />)
                    })
                : 
                    publicRoutes.map((route) => {
                        return (
                            <Route
                                path={route.path}
                                element={route.element}
                                exact={route.exact}
                            />)
                    })
            }
            
        </Routes>
    )
}

export default AppRouter