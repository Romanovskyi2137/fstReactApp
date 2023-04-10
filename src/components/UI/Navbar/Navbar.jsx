import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext } from "../../../context";


function Navbar () {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const onLogoutClick = (e) => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <MyButton onClick={onLogoutClick}>Logout</MyButton>
            <div className='navbar__links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Navbar