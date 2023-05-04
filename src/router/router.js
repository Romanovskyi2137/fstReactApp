import StartPage from "../pages/StartPage.jsx";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostPage from "../pages/PostPage.jsx";
import Login from "../pages/Login.jsx";

export const privateRoutes = [
    {path: "/", element: <newPage/>},
    {path: "/about" , element: <About/>},
    {path: "/posts", element: <Posts/>},
    {path: "/posts/:postID", element: <PostPage/>},
    {path:"*", element: <StartPage/>},
];

export const publicRoutes = [
    {path: "/", element: <StartPage/>},
    {path: "/login" , element: <Login/>},
    {path: "/about" , element: <About/>},
    {path:"*", element: <StartPage/>},
]