import React, { useContext } from "react";
import Session from "./Session";
import { InitialContext } from "../contexts/InitialContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lake from "./images/lake.jpg";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 3em;
  margin: 1% 2%;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  border: 1px black solid;
  align-items: center;
  border-radius: 30px;
  margin: 1em;
`;
const Search = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5px 20px;
`;
const Help = styled.div`
  display: flex;
  margin: 1% 2%;
`;
const Picker = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1%;
`;
const Select = styled.select`
  border: 1px solid #8b90a0;
  box-sizing: border-box;
  border-radius: 30px;
  width: 10%;
`;
const Image = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  padding: 0.5%;
`;
const ClassWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 98%;
  height: 5%;
  color: white;
  font-size: 1.5em;
  padding: 1em;
`;

const Classes = () => {
  const { sessions, setSession } = useContext(InitialContext);
  console.log("classes", sessions);
  return (
    <>
      <body>
        <Header>
          <Title>Classes</Title>
          <Help>
            <ul>
              <Link to="">Help</Link>
            </ul>
            <ul>
              <Link to="">About</Link>
            </ul>
            <ul>
              <Link to="/">Log Out</Link>
            </ul>
          </Help>
        </Header>
        <Image>
          <Img src={lake} />
          <ClassWrapper>
            {sessions.map((session, i) => (
              <Session
                key={i}
                id={session.id}
                name={session.name}
                type={session.type}
                duration={session.duration}
                startTime={session.startTime}
                location={session.location}
                attendees={session.attendees}
                maxClassSize={session.maxClassSize}
                intensityLevel={session.intensityLevel}
              />
            ))}
          </ClassWrapper>
        </Image>
      </body>
    </>
  );
};

export default Classes;
