import React, {useContext} from "react";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import StartPage from "../pages/StartPage.jsx";
import PostPage from "../pages/PostPage.jsx";
import { privateRoutes, publicRoutes } from "../router/router.js";
import Login from "../pages/Login.jsx";
import { AuthContext } from "../context/index.js";


function AppRouter () {
    const {isAuth, setIsAuth} = useContext(AuthContext)
   
    return (
        <Routes>
            {isAuth 
                ? 
                    privateRoutes.map((route) => {
                        return (
                            <Route 
                                path={route.path} 
                                element={route.element}
                                key={route.path}
                            />)
                    })
                : 
                    publicRoutes.map((route) => {
                        return (
                            <Route
                                path={route.path}
                                element={route.element}
                                key={route.path}
                            />)
                    })
            }
            
        </Routes>
    )
}

export default AppRouter