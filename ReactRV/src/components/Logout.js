import React from "react";
import { useHistory } from 'react-router-dom';

const Logout = props => {
    localStorage.removeItem("token");
    console.log('logged out', localStorage);
    
    let history = useHistory();
    props.history.push("/signin");



    return (<div></div>);
}

export default Logout;