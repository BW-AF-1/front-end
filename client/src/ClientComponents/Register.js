import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as Yup from "yup";
import { Link, Route, useHistory } from "react-router-dom";

import {
  Container,
  Name,
  Password,
  LogIn,
  InputName,
  InputPassword,
  Input,
  Greet,
} from "./StyledForm.jsx";

const Register = () => {
  const { push } = useHistory();
  const [post, setPost] = useState();
  const [clientState, setClientState] = useState({
    id: Date.now(),
    username: "",
    password: "",
  });

  const formSchema = Yup.object().shape({
    name: Yup.string().min(2, "Requires at least 2 characters"),
    password: Yup.string().min(4, "Requires a minimum of 4 characters"),
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
          //   console.log(err.errors);
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
      .post("/clients/register", clientState)
      .then((res) => {
        localStorage.setItem("token", res.data.password);
        console.log(res.data);
        setPost(res.data);
        setClientState({
          username: "",
          password: "",
        });
        document.location.reload(true);
      });
    push("/ClientSignUp");
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Greet>Register</Greet>

        <LogIn>
          <Name className="username">
            <label htmlFor="username">
              <InputName
                type="text"
                name="username"
                value={clientState.name}
                onChange={handleChange}
                placeholder="username"
              />
              {errors.username.length > 2 ? (
                <p className="error">{errors.name}</p>
              ) : null}
            </label>
          </Name>
          <Password className="password">
            <label htmlFor="password">
              <InputPassword
                type="password"
                value={clientState.password}
                name="password"
                onChange={handleChange}
                placeholder="username"
              />
              {errors.password.length > 2 ? (
                <p className="error">{errors.password}</p>
              ) : null}
            </label>
          </Password>

          <div className="submit">
            <Input data-cy="submit" type="submit" />
          </div>
        </LogIn>
      </Container>
    </form>
  );
};

export default Register;
