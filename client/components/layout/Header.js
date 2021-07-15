import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCA, setShowCA] = useState(false);
  const handleCloseCA = () => setShowCA(false);
  const handleShowCA = () => setShowCA(true);

  const isLoggedIn = false;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentEmail || !studentPassword) {
      toast.error("Fields cannot be empty!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const fields = {
      email: studentEmail,
      password: studentPassword,
    };

    fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("isLoggedIn", "true");
          }
          setTimeout(() => {
            window.location.href = "/student/dashboard";
          }, 2000);
        } else {
          toast.error(data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  const handleSubmitCA = (e) => {
    e.preventDefault();
  };

  const handleLogout = (e) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "false");
    }
    window.location.href = "/";
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        className={classes.modifiedNav}
      >
        <Link href="/">
          <Navbar.Brand href="/">
            <Image
              src="/img/logo.png"
              alt="NEO"
              className="d-inline-block align-top"
              width={69}
              height={77}
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link href="/">
              <Nav.Link href="/" className={classes.navLinks}>
                Home
              </Nav.Link>
            </Link>

            <Link href="/new-grievance" className={classes.navLinks}>
              <Nav.Link href="/new-grievance">Lodge a grievance</Nav.Link>
            </Link>

            <Link href="/previous-grievance" className={classes.navLinks}>
              <Nav.Link href="/previous-grievance">Grievance status</Nav.Link>
            </Link>

            <Link href="/contact">
              <Nav.Link href="/contact" className={classes.navLinks}>
                Contact Us
              </Nav.Link>
            </Link>
          </Nav>

          <Nav className="ms-auto">
            {isLoggedIn ? (
              <NavDropdown
                title="Welcome, Krishna Thorat"
                id="collasible-nav-dropdown"
              >
                <Link href="/student/dashboard">
                  <NavDropdown.Item
                    href="/student/dashboard"
                    className={classes.navLinks}
                  >
                    Dashboard
                  </NavDropdown.Item>
                </Link>
                <Link href="/student/profile">
                  <NavDropdown.Item
                    href="/student/profile"
                    className={classes.navLinks}
                  >
                    Profile
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="#">
                  <NavDropdown.Item
                    onClick={handleLogout}
                    className={classes.navLinks}
                  >
                    Logout
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            ) : (
              <>
                <NavDropdown
                  title="Login"
                  id="collasible-nav-dropdown"
                  drop="left"
                >
                  <Link href="#">
                    <NavDropdown.Item
                      onClick={handleShow}
                      className={classes.navLinks}
                    >
                      Student Login
                    </NavDropdown.Item>
                  </Link>
                  <Link href="#">
                    <NavDropdown.Item
                      onClick={handleShowCA}
                      className={classes.navLinks}
                    >
                      Grievance Officer Login
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>

                <Link href="/register">
                  <Nav.Link
                    id="registerButton"
                    className={classes.registerButton}
                    href="/register"
                  >
                    Register
                  </Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ color: "#f38f2b" }}>Student Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={studentPassword}
                onChange={(e) => setStudentPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Button
              type="submit"
              style={{ backgroundColor: "#f38f2b", border: "none" }}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showCA} onHide={handleCloseCA}>
        <Modal.Header>
          <Modal.Title style={{ color: "#f38f2b" }}>
            Grievance Officer Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitCA}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>

            <Button
              type="submit"
              style={{ backgroundColor: "#f38f2b", border: "none" }}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
