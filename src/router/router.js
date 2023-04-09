import StartPage from "../pages/StartPage.jsx";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostPage from "../pages/PostPage.jsx";
import Login from "../pages/Login.jsx";

export const privateRoutes = [
    {path: "/", element: <StartPage/>, exact: true},
    {path: "/about" , element: <About/>, exact: true},
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/posts/:postID", element: <PostPage/>, exact: true},
];

export const publicRoutes = [
    {path: "/login" , element: <Login/>, exact: true},
    {path: "/about" , element: <About/>, exact: true},
]