import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ClientLandingPage from "./ClientComponents/ClientLandingPage";
import ClientSignUp from "./ClientComponents/ClientSignup";
import axiosWithAuth from "./utils/axiosWithAuth";
import { InitialContext } from "./contexts/InitialContext";
import PrivateRoute from "./ClientComponents/ClientSignup";
import ClassList from "./ClientComponents/ClassList";
import Register from "./ClientComponents/Register";
import Login from "./ClientComponents/Login";
import ClassSearch from "./ClientComponents/ClassSearch";
import SearchTest from "./ClientComponents/SearchTest";
import Classes from "./ClientComponents/Classes";
import ClientLogin from "./ClientComponents/ClientLogin";

function App() {
  // setting up state and functions for InitialContext
  const [sessions, setSessions] = useState([]);
  const [reservedClasses, setReservedClasses] = useState([]);

  const [clients, setClients] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/clients")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then((res) => {
        console.log(res.data);
        setSessions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(sessions);
  return (
    <>
      <Router>
        <div className="App">
          <InitialContext.Provider value={{ sessions, setSessions }}>
            {/* <SearchTest /> */}
            <Switch>
              <Route exact path="/">
                <Link to="/ClientLandingPage">
                  <button>Client</button>
                </Link>
              </Route>

              <Route exact path="/ClientLandingPage">
                <ClientLandingPage />
              </Route>
              <Route exact path="/ClientSignUp">
                <ClientSignUp />
              </Route>
              <Route exact path="/ClientLogin">
                <ClientLogin />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              {/* <Route exact path="/ClientSignUp">
                <Login />
              </Route> */}
              <Route exact path="/classes">
                <Classes />
              </Route>

              <Link to="/">
                <button className="home-button">Home</button>
              </Link>
            </Switch>
          </InitialContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
