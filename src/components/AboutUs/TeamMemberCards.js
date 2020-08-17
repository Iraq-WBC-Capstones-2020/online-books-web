import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import PropTypes from 'prop-types';
import './style.css';
function TeamMemberCards({ member }) {
  const { pic, fullName, specailty, bio } = member;
  return (
    <MDBCard
      color="blue lighten-5"
      className="animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  mt-10"
    >
      <img
        className="rounded-circle mt img-fluid z-depth-1 mx-auto w-32 "
        src={pic}
        alt={fullName}
        wave
      ></img>
      <MDBCardBody className="m-1">
        <h4 className="card-title text-center font-sans">
          {fullName}
          <span className="text-blue-700">&nbsp; | {specailty}</span>
        </h4>
        <p className="text-gray-700 font-sans">{bio}</p>
        <div className="flex justify-center m-2">
          <a
            href="#"
            className="pr-2 fa-2x indigo-text ml-1 transition duration-500 ease-in-out
                        transform hover:-translate-y-1 hover:scale-110"
          >
            <MDBIcon fab icon="facebook-square" />
          </a>
          <a
            href="#"
            className="pr-2 fa-2x blue-text ml-1 transition duration-500 ease-in-out
                        transform hover:-translate-y-1 hover:scale-110"
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            href="#"
            className="pr-2 fa-2x indigo-text ml-1 transition duration-500 ease-in-out
                        transform hover:-translate-y-1 hover:scale-110"
          >
            <MDBIcon fab icon="github-alt" />
          </a>
          <a
            href="#"
            className="pr-2 fa-2x blue-text ml-1 transition duration-500 ease-in-out
                        transform hover:-translate-y-1 hover:scale-110"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
TeamMemberCards.propTypes = {
  member: PropTypes.object,
};
export default TeamMemberCards;
