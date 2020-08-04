import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBIcon } from 'mdbreact';

function TeamMemeberCards({ memeber }) {
  return (
    <MDBCard
      className=" animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  content-start max-w-xs m-5 bg-blue-100 "
    >
      <img
        style={{ width: '9rem', marginTop: '-25%' }}
        className=" rounded-circle img-fluid z-depth-1 mx-auto"
        src={memeber.memeber.pic}
        alt={memeber.memeber.name}
        wave
      ></img>
      <MDBCardBody className="m-1">
        <h4 className="card-title text-center font-sans">
          {memeber.memeber.name}
          <span className="text-blue-700">
            &nbsp; | {memeber.memeber.specailty}
          </span>
        </h4>
        <p className="text-gray-700 font-sans">{memeber.memeber.bio}</p>
        <div className="flex justify-center m-2">
          <MDBIcon>
            <a
              href="#"
              className="fab fa-facebook-square fa-2x indigo-text transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
            ></a>
          </MDBIcon>
          <MDBIcon>
            <a
              href="#"
              className="fab fa-twitter pr-2 fa-2x blue-text ml-1 transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
            ></a>
          </MDBIcon>
          <MDBIcon>
            <a
              href="#"
              className="fab fa-github-alt pr-2 fa-2x indigo-text transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
            ></a>
          </MDBIcon>
          <MDBIcon>
            <a
              href="#"
              className="fab fa-linkedin pr-2 fa-2x blue-text transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
            ></a>
          </MDBIcon>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
export default TeamMemeberCards;
