import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lake from "./images/lake.jpg";


const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size:3em;
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
    border: 1px solid #8B90A0;
    box-sizing: border-box;
    border-radius: 30px;
    width: 10%;
`;
const Image = styled.div`
    width: 100%;
`;
const Img = styled.img`
    width: 100%;
    padding: .5%;
`;

function ClassSearch( {session} ) {
    
  return (
    <>
      <Header>
        <Title>Anywhere Fitness</Title>
        <SearchBox>
            <Search>
              <input type="text" placeholder="Find a class or activity  " />
              <input type="text" placeholder="Location  " />
            </Search>
        </SearchBox>
        <Help>
            <ul><Link to ="">Help</Link></ul>
            <ul><Link to ="">About</Link></ul>
        </Help>
      </Header>
      <hr/>
      <Picker>
        <Select value='' placeholder="Class Type"/>
        <Select value='' placeholder="Class Length"/>
        <Select value='' placeholder="Class Date"/>
        <Select value='' placeholder="Class Time"/>
        <Select value='' placeholder="Class Level"/>
      </Picker>
      <Image> 
        <Img src={lake} />
      </Image>

    </>
  );
}

export default ClassSearch;
