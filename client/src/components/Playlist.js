import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';

const Playlist = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSpin(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {spin ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
          <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
        </div>
      ) : (
        <div className="container">
          <h2 className='text-center mt-2'>Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {projectData.slice(0, 6).map((el, index) => (
                <div className="col-md-4 d-flex justify-content-center mb-4" key={index}>
                  <Card style={{ height: "18rem", width: "100%" }}>
                    <Card.Img variant="top" style={{ height: "10rem", objectFit: "cover" }} src={el.imgsrc} />
                    <Card.Body className='d-flex justify-content-center flex-column'>
                      <Card.Title className='text-center'>{el.projectName}</Card.Title>
                      <Button
                        variant="primary"
                        as="a"
                        href={el.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-decoration-none text-light text-center'
                       >
                        Live Demo
                      </Button>

                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
