import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ClientLandingPage from "./ClientComponents/client_landing";
import ClientSignUp from "./ClientComponents/signup";
import axiosWithAuth from "./utils/axiosWithAuth";
import { InitialContext } from "./contexts/InitialContext";
import PrivateRoute from "./ClientComponents/signup";
import ClassList from "./ClientComponents/ClassList";
import Register from "./ClientComponents/Register";
import Login from "./ClientComponents/Login";
import ClassSearch from "./ClientComponents/ClassSearch";
import InstructorForm from './instructor/instructorForm';
import InstructorDashboard from './instructor/instructorDashboard';
import InstructorClasses from './instructor/InstructorClasses';
import InstructorCreate from './instructor/InstructorCreate';
import InstructorLogin from './instructor/InstructorLogin';

function App() {
  // setting up state and functions for InitialContext
  const [session, setSession] = useState([]);
  const [reservedClasses, setReservedClasses] = useState([]);
  const reserveClass = (clas) => {
    setReservedClasses([...reservedClasses, clas]);
  };
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
        setSession(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(session);
  return (
    <>
      <Router>
        <div className="App">
          <InitialContext.Provider value={{ session, setSession }}>
            <Switch>
              <Route exact path='/InstructorForm' render={()=><InstructorForm/>}/>
              <Route exact path="/">
                <Link to="/ClientLandingPage">
                  <button>Client</button>
                </Link>
              </Route>

              <Route exact path="/InstructorLogin">
                <InstructorLogin />
              </Route>
              <Route exact path="/InstructorClasses">
                <InstructorClasses />
              </Route>
              <Route exact path="/InstructorSign">
                <InstructorCreate />
              </Route>


              <Route exact path="/ClientLandingPage">
                <ClientLandingPage />
              </Route>
              <Route exact path="/ClientSignUp">
                <ClientSignUp />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="class-list">
                <ClassList />
              </Route>
              <Route exact path="/ClassSearch">
                <ClassSearch />
              </Route>
              <Route exact path='/InstructorDashboard' render={()=><InstructorDashboard/>}/>
            </Switch>
            <Link to="/">
              <button className="home-button">Home</button>
            </Link>
          </InitialContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
