import React from "react";

const Classes = ({ sessions }) => {
  //   const { session, setSession } = useContext(InitialContext);
  console.log(sessions);
  return (
    <div>
      <h1>Classes</h1>
      {sessions.map((sesh, i) => (
        <div key={i}>
          <li>
            {sesh.name} &nbsp;
            <span>{sesh.duration}</span>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Classes;
