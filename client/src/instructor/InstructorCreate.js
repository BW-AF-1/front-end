import React, {useEffect, useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {useHistory} from "react-router-dom";
const InstructorCreate = () =>{
    const [cred, setCred]= useState({
        username: '',
        password: ''
    });
    const {push}= useHistory();
    const handleChange = e =>{
        setCred({...cred, [e.target.name]: e.target.value})
    }
    const handleSubmit= e =>{
        e.preventDefault();
            axiosWithAuth()
            .post('/instructors/register', cred)
            .then(res =>{
                console.log("login page data: ", res)
                localStorage.setItem("token", res.data.payload)
                push("/InstructorLogin")
            })
            .catch(err=> console.log("this is the error from login: ", err))
    }
    return(
        <div>
            <h1>Instructor Create Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={cred.username}
                />
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={cred.password}
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}
export default InstructorCreate;