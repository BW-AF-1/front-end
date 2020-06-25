import React from 'react';
import {Navbar, Nav} from 'reactstrap';
import CreateClass from './createClassForm'
import img from '../imageFolder/Image.jpg'

export default function Dashboard(){

    return (
        <>
        <Navbar bg="light" style={{height:'5rem'}}>
            <Navbar.Brand href="/">Anywhere Fitness</Navbar.Brand>
        </Navbar>

        <Nav className="mr-auto" style={{backgroundColor:'#FF6900', height:'4rem'}}>
            <Nav.Link href="/" style={{margin:'auto 5rem', color:'black'}}>Profile</Nav.Link>
            <CreateClass/>
            <Nav.Link href="/" style={{margin:'auto 5rem', color:'black'}}>Manage Classes</Nav.Link>
            <Nav.Link href="/" style={{margin:'auto 5rem', color:'black'}}>Dashboard</Nav.Link>
        </Nav>
        <div style={{}}>
            <img style={{width:'100%', height:'50rem',margin:'0 auto', backgroundSize: 'cover', backgroundColor:'#FF6900'}} src={img}/>
        </div>
        </>
    )
}