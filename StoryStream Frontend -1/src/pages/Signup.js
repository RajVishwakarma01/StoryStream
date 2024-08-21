import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label, Form, Button, Row, Col, FormFeedback } from "reactstrap";
import Base from "../components/Base";
import { signup } from "../services/user-service";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    about: '',
  });

  const [error, setError] = useState({
    errors: {},
    isError: false
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Handle change
  const handleChange = (event, property) => {
    // Dynamic setting the value
    setData({ ...data, [property]: event.target.value });
  };

  // Reset form
  const resetData = () => {
    setData({
      name: '',
      email: '',
      password: '',
      about: '',
    });
  };

  // Submit form
 // Submit form
const handleSubmit = (event) => {
  event.preventDefault();

  if (error.isError) {
    toast.error("Form data is invalid, correct all details and submit");
    setError({ ...error, isError: false });
    return;
  }

  // Data validation

  // Call server API for sending data
  signup(data)
    .then((resp) => {
      console.log(resp);
      console.log("Success log");
      toast.success("User is registered successfully !! user id" + resp.id);
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
      });
      // Redirect to login page
      window.location.href = "/login"; // Redirecting using window.location
    })
    .catch((error) => {
      console.log(error);
      console.log("Error log");

      // Handle errors in proper way
      setError({
        errors: error,
        isError: true,
      });
    });
};

  return (
    <Base>
      <Container>
        <Row className="mt-4">
         {/* // {JSON.stringify(data)} */}
          <Col sm={{ size: 6, offset: 3 }}>
          <Card outline className="shadow shadow-5" style={{ backgroundColor: 'rgb(255 255 255 / 44%)', backdropFilter: 'blur(10px)' }}>

              <CardHeader>
                <h3>Fill Information to Register !!</h3>
              </CardHeader>
              <CardBody>
                {/* Creating form */}
                <Form onSubmit={handleSubmit}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={error.errors?.response?.data?.name ? true:false}
                      style={{backgroundColor: 'rgba(255,255,255,0.2)' ,border:'1px solid gray'}}
                    />
                    <FormFeedback>
                    {error.errors?.response?.data?.name }
                    </FormFeedback>
                  </FormGroup>
                  {/* Email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={error.errors?.response?.data?.email ? true:false}
                      style={{backgroundColor: 'rgba(255,255,255,0.2)' ,border:'1px solid gray'}}
                    />
                    <FormFeedback>
                    {error.errors?.response?.data?.email }
                    </FormFeedback>

                  </FormGroup>
                  
                  {/* Password field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={error.errors?.response?.data?.password ? true:false}
                      style={{backgroundColor: 'rgba(255,255,255,0.2)' ,border:'1px solid gray'}}
                    />
                    <FormFeedback>
                    {error.errors?.response?.data?.password }
                    </FormFeedback>
                  </FormGroup>
                  

                  {/* About field */}
                  <FormGroup>
                    <Label for="about">About</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      // style={{ height: "250px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={error.errors?.response?.data?.about ? true:false}
                      style={{backgroundColor: 'rgba(255,255,255,0.2)' ,border:'1px solid gray',height: "250px" }}
                    />
                    <FormFeedback>
                    {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>
                
                  <Container className="text-center">
                    <Button color="dark" outline type="submit">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      outline
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
