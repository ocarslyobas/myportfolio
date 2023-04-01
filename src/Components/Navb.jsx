import React from 'react';
import "./Navbar.css";
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {MdReorder} from 'react-icons/md'
import { Prev } from 'react-bootstrap/esm/PageItem';
import { useState } from 'react';


const Navb = () => {

// const[navbartoggle, setNavbartoggle] = useState(false);

// const handletoggle = ()=>{
// setNavbartoggle((prev)=>!prev)
// }
    

     return (
            //<div className='navbar' id= {navbartoggle ? "open":"close"}>

    //     <div className='navlogo'>
    //         <p>Welcome</p>
    //     </div>

    //     <div className='navlink'>
    //         <Link className='navlink-text' to="/">Home</Link>
    //         <Link className='navlink-text' to="/Projects">Projects</Link>
    //         <Link className='navlink-text' to="/Experience">Experience</Link>
    //     </div>

    //     <div className='toggleButton'>
    //         <button onClick={handletoggle}> <MdReorder color='blue' backGround="white"/></button>
    //     </div>

    // </div>
    
    <Navbar expand="lg" className='Navbox'>
    <LinkContainer to="/">
        <Navbar.Brand><p id='welcome'>Welcome</p> </Navbar.Brand>
    </LinkContainer>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
 <Navbar.Collapse id="basic-navbar-nav">
 <Nav className="mr-auto">
    <LinkContainer to="/">
        <Nav.Link className="links">Home </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/Projects">
        <Nav.Link className="links"> Projects </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/Experience">
        <Nav.Link className="links"> Experience </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/Education">
        <Nav.Link className="links"> Education </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/Contact">
        <Nav.Link className="links"> Contact </Nav.Link>
    </LinkContainer> 
 </Nav>
 </Navbar.Collapse>
 </Navbar>

    

     );
}

export default Navb;