import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './style/NavigationBar.css';
import Logo from './style/img/logo.png';

const NavigationBar = (props) => {
    return (
            <Navbar sticky="top" className={'cNavBar navbar-light shadow'} expand="lg" fluid={true}>
                <img
                        alt="Logo of the application"
                        src={Logo}
                        width="30"
                        height="30"
                        className=""
                    />{' '}
                <Navbar.Brand href="/" className={"ml-3"}>
                    <div className={"titleNavBar"} onClick={()=>props.changeRoute('Home')} className={"nav-link"} to="/home">Urban Explorers</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={"d-flex justify-content-end"}>
                    <Nav className={""}>
                        {/* MUSIC SECTION LINKS */}
                        <NavDropdown title="Music" id="nav-dropdown" className={"nav-dropdown"}>
                            <NavDropdown.Item className={"nav-link"} eventKey="2.1" onClick={()=>props.changeRoute('NewsMusic')} to="/newsMusic">News</NavDropdown.Item>
                            <NavDropdown.Item className={"nav-link"} eventKey="2.2" onClick={()=>props.changeRoute('DatabaseMusic')} to="/databaseMusic">Database</NavDropdown.Item>
                            <NavDropdown.Item className={"nav-link"} eventKey="2.3" onClick={()=>props.changeRoute('TutorialsMusic')} to="/tutorialsMusic">Tutorials</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={"nav-link"} eventKey="2.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        {/* GRAFFITI SECTION LINKS */}
                        <NavDropdown title="Graffiti" id="nav-dropdown" className={"nav-dropdown"}>
                            <NavDropdown.Item className={"nav-link"} eventKey="3.1" onClick={()=>props.changeRoute('NewsGraffiti')} to="/newsMusic">News</NavDropdown.Item>
                            <NavDropdown.Item className={"nav-link"} eventKey="3.2" onClick={()=>props.changeRoute('DatabaseGraffiti')} to="/databaseMusic">Database</NavDropdown.Item>
                            <NavDropdown.Item className={"nav-link"} eventKey="3.3" onClick={()=>props.changeRoute('TutorialsGraffiti')} to="/tutorialsMusic">Tutorials</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={"nav-link"} eventKey="3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        {/* SKATE SECTION LINKS */}
                        <NavDropdown title="Skate" id="nav-dropdown" className={"nav-dropdown"}>
                            <NavDropdown.Item className={"nav-link"} eventKey="4.1" onClick={()=>props.changeRoute('NewsSkate')} to="/newsMusic">News</NavDropdown.Item>
                            <NavDropdown.Item className={"nav-link"} eventKey="4.2" onClick={()=>props.changeRoute('DatabaseSkate')} to="/databaseMusic">Database</NavDropdown.Item>
                            <NavDropdown.Item className={"nav-link"} eventKey="4.3" onClick={()=>props.changeRoute('TutorialsSkate')} to="/tutorialsMusic">Tutorials</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={"nav-link"} eventKey="4.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        {/* EVENTS LINK */}
                        <NavLink onClick={()=>props.changeRoute('Events')} className={"nav-link"} to="/about">Events </NavLink>
                        {/* SOCIAL LINK */}
                        <NavLink onClick={()=>props.changeRoute('Social')} className={"nav-link"} to="/chat">Social </NavLink>
                        {/* ABOUT LINK */}
                        <NavLink onClick={()=>props.changeRoute('About')} className={"nav-link"} to="/about">About </NavLink>
                        {/*CONTACT LINK */}
                        <NavLink onClick={()=>props.changeRoute('Contact')} className={"nav-link"} to="/contact">Contact </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
    );
}
 
export default NavigationBar;