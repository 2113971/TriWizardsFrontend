import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Ecommerce from "../pages/Ecommerce";
import Cart2 from "../pages/Cart2";
import Contactpage from "../pages/Contactpage";


const NavigationBar = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary navbar-dark" >
          <Container fluid>
            <Link to="/" className="navbar-brand">React Restaurant</Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link as={Link} to="/" className="active text-uppercase">Home</Nav.Link>
                <Nav.Link as={Link} to="/ecommerce" className="active text-uppercase">Products</Nav.Link>
                <Nav.Link as={Link} to="/cart" className="active text-uppercase">Cart</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="active text-uppercase">Contact Us</Nav.Link>
                
              </Nav>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        
        <div id="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart2 />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavigationBar;

