import { Link, Route } from "react-router-dom";
import React from "react";
// import ClientSignUp from "../../ClientSignUp/signup";
// import ClientLandingPage from "../client_landing";
import styled from "styled-components";
import yoga from "./images/yoga.jpg";

const ClientPage = () => {
  const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  `;

  const Title = styled.div`
    font-size: 2rem;
  `;

  const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
    padding: 0 2%;
  `;

  const Greet = styled.div`
    background: #ff9233;
    width: 100%;
    height: 5%;
    color: white;
    font-size: 1.5em;
    padding: 1em;
  `;

  const H1 = styled.h1`
    font-size: 5em;
  `;
  const P = styled.p`
    font-size: 2em;
  `;

  const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2% 10%;
  `;

  const Footer = styled.footer`
    display: flex;
    align-items: flex-end;
    margin: 2em;
    padding: 3em;
  `;
  const Button = styled.button`
    background: #ff9233;
    padding: 1em 2em;
    margin: 3rem;
    border-radius: 15px;
    &:hover {
      background: white;
    }
  `;

  const Instructors = styled.button`
    background: #ff9233;
    padding: 1em 2em;
    margin: 3rem;
    border-radius: 15px;
    &:hover {
      background: white;
    }
  `;
  const Hr = styled.hr`
    height: 2em;
    border-bottom: 1px solid #1f1209;
    box-shadow: 0 20px 10px -5px #bdbdbd;
  `;

const Img = styled.image`
    width: 100%;
    padding: .5%;
`;
const ImageBackground = styled.image`

`;
  return (
    <>
      {/* getting an error that body cannot be a child of div... */}
      {/* commenting it out */}

      <Header>
        <Title>Anywhere Fitness</Title>
        <Nav>
          <ul><Link to ="">Help</Link></ul>
          <ul><Link to ="">About</Link></ul>
        </Nav>
      </Header>
      <Greet>
        The world is our gym.
        <br />
        Welcome!
      </Greet>
      <ImageBackground source = {require('./images/yoga.jpg')}>
        <Info>
          <H1>Browse classes</H1>
          <P>
            Our expert instructors conduct classes literally
            <br />
            anywhere. Take a yoga class on a mountaintop.
            <br />
            Do boot camp on the beach. Go to an
            <br />
            abandoned mansion for mat pilates. The
            <br />
            options are limitless.
          </P>
        </Info>
      </ImageBackground>
      
      <Hr />
      <Footer>
        <Link to="/login">
          <Button className="forClients">For Clients</Button>
        </Link>
        <Link to="/register">
          <Button className="forClients">New?</Button>
        </Link>

        <Link to="/InstructorLogin"> <Instructors>For Instructors</Instructors> </Link>
        


        <Link to="/ClassSearch">
          <Button className="classSearch">Search Classes</Button>
        </Link>
      </Footer>
    </>
  );
};

export default ClientPage;
