import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [inputvalue, setInputvalue] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    message: '',
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, message } = inputvalue;

    // Basic validation
    if (!fname) return toast.error('First Name is required');
    if (!lname) return toast.error('Last Name is required');
    if (!email) return toast.error('Email is required');
    if (!email.includes('@')) return toast.error('Invalid Email');
    if (!mobile) return toast.error('Mobile Number is required');

    try {
      const res = await fetch('https://authen-tz7a.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fname, lname, email, mobile, message }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success('Your Response is Submitted');
        setInputvalue({
          fname: '',
          lname: '',
          email: '',
          mobile: '',
          message: '',
        });
      } else {
        toast.error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Server error. Please try again later.');
    }
  };

  return (
    <div className="container mb-3 contact">
      <h2 className="text-center">Contact Us</h2>
      <div className="container mt-2">
        <Form className="row mt-2" onSubmit={sentUserdata}>
          <Form.Group className="mb-3 col-lg-6" controlId="formFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={inputvalue.fname}
              onChange={getvalue}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={inputvalue.lname}
              onChange={getvalue}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={inputvalue.email}
              onChange={getvalue}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={inputvalue.mobile}
              onChange={getvalue}
            />
          </Form.Group>

          <Form.Group className="mb-3 col-12" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter a Message"
              name="message"
              value={inputvalue.message}
              onChange={getvalue}
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" className="col-lg-6" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
