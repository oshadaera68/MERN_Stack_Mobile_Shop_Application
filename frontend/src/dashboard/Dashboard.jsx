import React from "react";
import back from "../assets/pxfuel.jpg";
import { Typography } from "@material-ui/core";
import "./dasboard.css";
import ReactTyped from "react-typed";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {Nav, NavDropdown, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import backg from "../assets/deep-purple-14-pro-max.jpg";
import service from "../assets/conceptual-hand-writing-showing-our-services-concept-meaning-occupation-function-serving-intangible-products-male-wear-160644151.jpg";
import aboutus from "../assets/depositphotos_49080337-stock-photo-about-us.jpg";

const Dashboard = () => {
  return (
    <>
      {/*Nav Bar*/}
      <Navbar expand="lg" bg="dark">
        <Container fluid>
          <Navbar.Brand className="text-white">Smart Mobile Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link href="#item" className="text-white">
                Item
              </Nav.Link>
              <NavDropdown title="Others" className="text-white" id="basic-nav-dropdown">
              <Link to='item'><NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item></Link>
            </NavDropdown>
            </Nav>
            <Form className="d-flex p-1">
              <Link to="login">
                <Button variant="success">Login</Button>
              </Link>
              <Link to="signup">
                <Button variant="success">SignUp</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <main id="home">
          <img src={back} id="image" className="opacity-70" alt="image1" />
          <Typography
            variant="h4"
            className="opacity-100 maintext"
            style={{ fontSize: "56px" }}
          >
            Welcome to the Smart Mobile Shop <br /> Official Website !
          </Typography>
          <Typography variant="h4" className="opacity-100 maintext1">
            We Sell the{" "}
            <ReactTyped
              className="typewriter-text"
              strings={[
                "Brand New Phones...",
                "Used Mobiles...",
                "Mobile Accessories...",
              ]}
              typeSpeed={110}
              loop
              backSpeed={60}
            />
          </Typography>

          <img src={backg} id="main" alt="image2" />
        </main>
      </div>

      <div className="container" id="about">
        <img src={aboutus} alt="" id="about-us-image" />
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">About Us</h1>
        </header>
        <main className="p-4">
          <section className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Welcome to Smart Mobile Shop, your one-stop destination for the
              latest and greatest mobile devices.
              <br /> We are passionate about technology and committed to
              providing our customers <br /> with the best smartphones at
              competitive prices in Sri Lanka.
            </p>
            <p className="text-gray-600 mb-4">
              Our team consists of dedicated tech enthusiasts who carefully{" "}
              <br /> curate the finest smartphones from top manufacturers around
              the world. <br /> We aim to offer a diverse range of products that
              cater to all preferences and budgets.
            </p>
            <p className="text-gray-600 mb-4">
              At Smart Mobile Shop, customer satisfaction is our utmost
              priority. <br /> We take pride in providing exceptional customer
              service and support, <br /> ensuring a seamless shopping
              experience for every customer.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're looking for cutting-edge flagship phones or
              budget-friendly options, <br /> we've got you covered. Our product
              selection is regularly update <br /> to keep up with the latest
              trends and advancements in the mobile industry.
            </p>
            <p className="text-gray-600">
              Explore our website to discover a world of smart mobile
              technology. <br /> If you have any questions or need assistance,{" "}
              <br /> our friendly team is always ready to assist you in making
              the right choice for your mobile needs.
            </p>
            <p className="text-gray-600 mt-4">
              Thank you for choosing Smart Mobile Shop!
            </p>
            <p className="text-gray-600 mt-4">
              Contact Details:
              <br />
              Address: Example Road, ABC, Sri Lanka. <br />
              Tel: +94 2345 232 <br />
              Email: info@smartmobileshop.com
            </p>
          </section>
        </main>
      </div>

      <div className="container" id="services">
        <img src={service} alt="service" id="service-image" />
        <header className="bg-gray-900 text-white p-4">
          <h1 className="text-2xl font-bold">Services</h1>
        </header>
        <main className="p-4">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Selling Mobiles(Android and Apple Devices)</li>
              <li>Mobile Repair Services</li>
              <li>Phone Unlocking</li>
              <li>Screen Replacement</li>
              <li>Battery Replacement</li>
              <li>Mobile Accessories</li>
            </ul>
            <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Experienced Technicians</li>
              <li>Quality Repairs</li>
              <li>Wide Range of Accessories</li>
              <li>Competitive Prices</li>
              <li>Excellent Customer Service</li>
            </ul>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our services or would like <br />{" "}
              to inquire about a specific repair or product, feel free to
              contact us using the information below:
            </p>
            <p className="text-gray-600">
              Address: Example Road, ABC, Sri Lanka. <br />
              Tel: +94 2345 232 <br />
              Email: info@smartmobileshop.com
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
