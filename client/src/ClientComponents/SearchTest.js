import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import Classes from "./Classes";
import axiosWithAuth from "../utils/axiosWithAuth";

const SearchTest = () => {
  const [sessions, setSessions] = useState([]);
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);

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

  const handleChange = (e) => {
    setWord(e);
    let oldList = sessions.map((session) => {
      return { name: session.name.toLowerCase(), duration: session.duration };
    });
    if (word !== "") {
      let newList = [];

      newList = oldList.filter((session) =>
        session.name.includes(word.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(sessions);
    }
  };
  return (
    <div>
      <Filter value={word} handleChange={(e) => handleChange(e.target.value)} />
      <Classes sessions={word.length < 1 ? sessions : filterDisplay} />
    </div>
  );
};

export default SearchTest;
