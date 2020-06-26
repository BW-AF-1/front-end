import React, { useContext, useEffect } from "react";
import { InitialContext } from "../contexts/InitialContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import Session from "./Session";
import ClassSearch from "./ClassSearch"


const ClassList = () => {
  const { session, setSession } = useContext(InitialContext);
  console.log(session);
  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then((res) => {
        console.log(res);
        setSession(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <div>
          <ClassSearch session={session} />
        
      </div>
    </>
  );
};

export default ClassList;
