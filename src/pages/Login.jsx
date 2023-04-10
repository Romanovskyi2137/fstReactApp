import React, {useContext}from "react";
import Input from "../components/UI/Input/Input.jsx";
import MyButton from "../components/UI/Button/MyButton.jsx";
import { AuthContext } from "../context/index.js";


function Login () {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const onFormSubmit = (e) => {
        e.preventDefault();
        setIsAuth(true)
    }


    return (
        <div>
            <h1>Login page</h1>
            <form onClick={onFormSubmit}>
                <Input type="text" placeholder="login"/>
                <Input type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}
export default Login