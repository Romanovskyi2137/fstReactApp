import StartPage from "../pages/StartPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";

export const router = [
    {path: "/", element: <StartPage/>, exact: true},
    {path: "/about" , element: <About/>, exact: true},
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/posts/:postID", element: <PostPage/>, exact: true}
]