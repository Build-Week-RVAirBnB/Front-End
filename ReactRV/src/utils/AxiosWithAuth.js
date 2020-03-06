import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://rventure.herokuapp.com",
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
    });
};