import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import * as Yup from "yup";
import { Link, Route } from "react-router-dom";
import {
  Name,
  Password,
  LogIn,
  InputName,
  InputPassword,
  Input,
} from "./StyledForm.jsx";

const ClientLogin = () => {
  const [post, setPost] = useState();
  const [clientState, setClientState] = useState({
    id: Date.now(),
    username: "",
    password: "",
  });

  const formSchema = Yup.object().shape({
    name: Yup.string().min(2, "Requires at least 2 characters"),
    password: Yup.string().min(8, "Requires a minimum of 8 characters"),
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateChange = (e) => {
    if (e.target.name === "name" || e.target.name === "password") {
      Yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((isValid) => {
          setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch((err) => {
          console.log(err.errors);
          setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    }
  };

  const handleChange = (e) => {
    e.persist();
    setClientState({ ...clientState, [e.target.name]: e.target.value });
    validateChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/clients/login", clientState)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        setPost(res.data);
        setClientState({
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LogIn>
          <h1>Log In</h1>
          <Name>
            <label htmlFor="username">
              <InputName
                type="text"
                placeholder="User Name"
                name="username"
                value={clientState.name}
                onChange={handleChange}
              />
              {errors.username.length > 2 ? (
                <p className="error">{errors.name}</p>
              ) : null}
            </label>
          </Name>
          <Password>
            <label htmlFor="password">
              <InputPassword
                type="text"
                placeholder="Password"
                value={clientState.password}
                name="password"
                onChange={handleChange}
              />
              {errors.password.length > 2 ? (
                <p className="error">{errors.password}</p>
              ) : null}
            </label>
          </Password>

          <div>
            <Input data-cy="submit" type="submit" />
          </div>
        </LogIn>
      </form>
    </>
  );
};

export default ClientLogin;
