import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import PropTypes from 'prop-types';

function TeamMemberCards({ member }) {
  const { pic, name, specailty, bio } = member.member;
  return (
    <MDBCard
      className=" animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  content-start max-w-xs m-5 bg-blue-100 "
    >
      <img
        style={{ width: '9rem', marginTop: '-25%' }}
        className=" rounded-circle img-fluid z-depth-1 mx-auto"
        src={pic}
        alt={name}
        wave
      ></img>
      <MDBCardBody className="m-1">
        <h4 className="card-title text-center font-sans">
          {name}
          <span className="text-blue-700">&nbsp; | {specailty}</span>
        </h4>
        <p className="text-gray-700 font-sans">{bio}</p>
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
TeamMemberCards.propTypes = {
  member: PropTypes.object,
};
export default TeamMemberCards;
