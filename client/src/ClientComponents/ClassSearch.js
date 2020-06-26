import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lake from "./images/lake.jpg";
import ClassList from './ClassList';

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
    border: 1px solid #8B90A0;
    box-sizing: border-box;
    border-radius: 30px;  
    align-items: center;
    margin: 1%;
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
const Input = styled.input`
    width: 25% vw;
    padding: .5%;
`;

function ClassSearch( props ) {
  const [classes, setClasses] = useState([]);

  return (
    <>
      <Header>
        <Title>Anywhere Fitness</Title>
        <SearchBox>
            
              <Input type="text" placeholder="Find a class or activity  " />
              <Input type="text" placeholder="Location  " />
            
        </SearchBox>
        <Help>
            <ul><Link to ="">Help</Link></ul>
            <ul><Link to ="">About</Link></ul>
        </Help>
      </Header>
      <hr/>
          <Picker>
            <Select name="name" value={props.name} placeholder="Class Name">
                <option value = ''>--Class List--</option>
                <option value = ''>{props.name}</option>
                <option value = ''>1 to 3</option>
                <option value = ''>3 or more</option>
            </Select>

            <Select name="name" value={props.type} placeholder="Class type">
                <option value = ''>--Class Type--</option>
                <option value = ''>{props.type}</option>
                <option value = ''>1 to 3</option>
                <option value = ''>3 or more</option>
            </Select>
            <Select name="name" value={props.startTime} placeholder="Class Time">
                <option value = ''>--Class Time--</option>
                <option value = ''>{props.startTime}</option>
                <option value = ''>1 to 3</option>
                <option value = ''>3 or more</option>
            </Select>
            <Select name="name" value={props.duration} placeholder="Class Duration">
                <option value = ''>--Class Duration--</option>
                <option value = ''>{props.duration}</option>
                <option value = ''>1 to 3</option>
                <option value = ''>3 or more</option>
            </Select>
          </Picker>
      
      <Image> 
        <Img src={lake} />
      </Image>

    </>
  );
}

export default ClassSearch;
