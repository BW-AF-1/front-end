import axiosWithAuth from '../utils/axiosWithAuth';
import React, {useEffect, useState} from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
const InstructorClasses = ()=>{
    const [classes, setClasses]= useState([]);
    const [signout, setSignout]= useState(false);
    const {push}= useHistory();
    useEffect(()=>{
        axiosWithAuth()
            .get("/classes")
            .then(res=>{
                console.log("data classes: ", res.data);
                setClasses(res.data)
            })
            .catch(err=> console.log("instructorClasses.js error: ", err))
    },[])
    const signOut = ()=>{
        if (signout===false){
            return push('/InstructorLogin')
        }
        else{
            return console.log('you are still logged in')
        }
    }
    return(
        <div>
            <h1>Instructor classes: </h1>
            <Link to="/Instructor/CreateClass"> <button>Create Class</button> </Link>
            <button>Delete Class</button>\
            <button onClick={signOut}>Sign out</button>
            {classes.map((item,key)=>(
                <div key={item.id}>
               <Card style={{ width: '18rem', margin:' 0 auto', background: 'rgba(97, 136, 207, 0.534)'}}>
               <Card.Body>
                   <Card.Title>Name: {item.name }</Card.Title>
                        <ListGroup> Location: {item.location}</ListGroup>
                        <ListGroup> Type: {item.type}</ListGroup>
                        <ListGroup> Intensity Level: {item.intensityLevel}</ListGroup>
                        <ListGroup> Start Time: {item.startTime}</ListGroup>
                        <ListGroup> Duration: {item.duration}</ListGroup>
                        <ListGroup> Max Class Size: {item.maxClassSize}</ListGroup>
                        <ListGroup> Attendees: {item.attendees}</ListGroup>
                        <Button>Click for more information</Button>
               </Card.Body>
           </Card>
           </div>
            ))}
        </div>
    )
}
export default InstructorClasses;