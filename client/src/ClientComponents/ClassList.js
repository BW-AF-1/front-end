import React, { useContext, useEffect } from "react";
import { InitialContext } from "../contexts/InitialContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import ClassSearch from "./ClassSearch";
import Session from "./Session";

const ClassList = () => {
  const { session, setSession } = useContext(InitialContext);
  console.log(session);

  return (
    <>
      <div>
        {session.map((sesh, i) => (
          <Session key={i} id={sesh.id} name={sesh.name} />
        ))}
      </div>
    </>
  );
};

export default ClassList;
