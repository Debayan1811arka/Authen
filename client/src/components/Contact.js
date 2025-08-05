import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });
  console.log(inputvalue)

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })
  }

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue
    if (fname === "") {
      toast.error("First Name is required")
    } else if (lname === "") {
      toast.error("Last Name is required")
    } else if (email === "") {
      toast.error("Email is required")
    } else if (!email.includes("@")) {
      toast.error("Invalid Email")
    } else if (mobile === "") {
      toast.error("Mobile Number is required")
    } else {
      const res = await fetch("https://authen-3xo9.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
      const data = await res.json();
      console.log(data);

      if (data.status === 201) {
        toast.success("Your Response Is Submitted");
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: ""
        })
      }
    }
  }

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">Contact Us</h2>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="fname" value={inputvalue.fname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lname" value={inputvalue.lname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name="email" placeholder="Enter email" value={inputvalue.email} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" placeholder="Enter Mobile Number" value={inputvalue.mobile} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter a Message" name="message" value={inputvalue.message} onChange={getvalue} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg-6" type="submit" onClick={sentUserdata}>
                Submit
              </Button>

            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Contact
