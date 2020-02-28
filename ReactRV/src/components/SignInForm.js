import React, { useState } from "react";
import axios from 'axios';


const Login = props => {


    return (
        <div>
                <form>
                <input
                type="text"
                name="username"
                // value={credentials.username}
                // onChange={handleChange}
                />
                <input
                type="password"
                name="password"
                // value={credentials.password}
                // onChange={handleChange}
                />
                <button>Log in</button>
                </form>
            </div>
            );

}

export default Login;
