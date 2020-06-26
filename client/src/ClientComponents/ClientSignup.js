import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as Yup from "yup";
import { Link, Route, useHistory } from "react-router-dom";
import ClientLogin from "./ClientLogin";
import styled from "styled-components";
const Head = styled.div`
  display: flex;
  flex-direction: column;
  background: #ff9233;
  align-items: center;
  padding: 1%;
`;

const Title = styled.div`
  font-size: 3em;
`;

const Buttons = styled.div`
  display: flex;
  width: 10%;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
`;

const ClientLog = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2em;
  line-height: 4em;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2em;
  line-height: 4em;
`;

const HomeButton = styled.button`
  &:hover {
    background: black;
    color: white;
  }
`;

const BackButton = styled.button`
  &:hover {
    background: black;
    color: white;
  }
`;

const ClientSignUp = () => {
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
    <>
      <div>
        <Head>
          <Title>Anywhere Fitness</Title>
          <Buttons>
            <Link to="/">
              <HomeButton className="home">Home</HomeButton>
            </Link>
            <Link to="/ClientLandingPage">
              <BackButton className="back">Back</BackButton>
            </Link>
          </Buttons>
        </Head>
        <Body>
          <Img>
            <p>askdjfhaksdhf</p>
          </Img>
          <ClientLog>
            <ClientLogin />
          </ClientLog>
        </Body>
      </div>
    </>
  );
};

export default ClientSignUp;
