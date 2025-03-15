// src/components/Navbar.js

import React from 'react';
import "../../src/App.css"
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import { alignPropType } from 'react-bootstrap/esm/types';
import {Link } from "react-router-dom"
// import Carousel from 'react-bootstrap/Carousel'
// import p1 from '../images/1.jpeg';
// import p2 from '../images/2.jpeg';
// import p3 from '../images/3.jpeg';

const Home = () => {
  // const [index,setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // }
  return (
    <>
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"yellow"}}>
      <Container>
        <Navbar.Brand ><Link to='/' style={{color:'white',textDecoration:"none"}}>BestBooks</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
            <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
            <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <div className='home-body'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='img-1'>
          <img src={p1} alt= "first slide"/>
        </Carousel.Item>
        <Carousel.Item className='img-2'>
          <img src={p2} alt= "second slide"/>
        </Carousel.Item>
        <Carousel.Item className='img-3'>
          <img src={p3} alt= "third slide"/>
        </Carousel.Item>
      </Carousel>
    </div> */}
    <div className='bg-image'>
      <h1>BestBooks</h1>
    </div>
    </>
    );
};

export default Home;
