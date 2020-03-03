import React, { useState } from "react";
import axios from 'axios';


const SignUpForm = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({ username: '', password:''});

  const handleChange = e => {

    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
    console.log(credentials);
  };

  const login = e => {
    e.preventDefault();
    localStorage.removeItem("token");

    axios
        .post('https://cors-anywhere.herokuapp.com/http://herokuapp.com/auth/rv/register/', credentials )
        .then(res => {
            // localStorage.setItem("token", res.data.payload);
            // props.history.push("/protected");
            console.log('response',res);
          })
          .catch(err => {
            // localStorage.removeItem("token");
            console.log("invalid login: ", err);
          });
  }

  return (
    <div>
          <form onSubmit={login}>
            <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
            <button>Log in</button>
          </form>
        </div>
      );
};

export default SignUpForm;