import React from "react";
import Input from "../components/UI/Input/Input.jsx";
import MyButton from "../components/UI/Button/MyButton.jsx";


function Login () {
    


    return (
        <div>
            <h1>Login page</h1>
            <form>
                <Input type="text" placeholder="login"/>
                <Input type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}
export default Login