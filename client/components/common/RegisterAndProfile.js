import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const RegisterAndProfile = ({ type }) => {
  const [fname, setFname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [address, setAddress] = useState("");

  const [grno, setGrno] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (
      !fname ||
      !dob ||
      !email ||
      !password ||
      !cPassword ||
      !mobileNumber ||
      !address ||
      !grno ||
      !college ||
      !branch ||
      !year
    ) {
      toast.error("Fill all the details!", {
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

    if (password !== cPassword) {
      toast.error("Password doesn't match!", {
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
      name: fname,
      email,
      password,
      address,
      dob,
      mob: mobileNumber,
      gender,
      grno,
    };

    fetch("http://localhost:3001/api/auth/register", {
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
          setTimeout(() => {
            window.location.href = "/";
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
  const handleProfileSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="py-5">
      <Form
        onSubmit={
          type === "register" ? handleRegisterSubmit : handleProfileSubmit
        }
      >
        <strong>Personal Details*</strong>
        <Row className="mb-5">
          <Col md={4}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="Enter full name"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="eg; 01/01/1977"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Row>
                <Col md={3}>
                  <Form.Check
                    type="radio"
                    id="male"
                    name="gender"
                    label="Male"
                    checked={gender === "Male"}
                    value={gender}
                    onChange={() => setGender("Male")}
                  />
                </Col>
                <Col md={3}>
                  <Form.Check
                    type="radio"
                    id="female"
                    name="gender"
                    checked={gender === "Female"}
                    label="Female"
                    value={gender}
                    onChange={() => setGender("Female")}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        <strong>Contact Details*</strong>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>
                Confirm Password{" "}
                <span
                  style={{
                    color: "red",
                    display: password !== cPassword ? "inline" : "none",
                  }}
                >
                  (Not Matching)
                </span>
              </Form.Label>
              <Form.Control
                type="password"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4}>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile number"
              />
            </Form.Group>
          </Col>
        </Row>

        <strong>Address Details*</strong>
        <Row className="mb-5">
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ resize: "none" }}
                placeholder="Enter address"
              />
            </Form.Group>
          </Col>
        </Row>

        <strong>College Details*</strong>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>G.R. No / PRN</Form.Label>
              <Form.Control
                type="text"
                value={grno}
                onChange={(e) => setGrno(e.target.value)}
                placeholder="Enter G.R. No / PRN"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCollege">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="Enter college name"
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formBranch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="Enter branch"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4}>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Enter year"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm="auto">
            {type === "register" ? (
              <Button variant="primary" type="submit">
                Register
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Update
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegisterAndProfile;
