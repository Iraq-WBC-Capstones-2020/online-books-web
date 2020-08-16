import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

export default function Form({ formData, onButtonClick }) {
  const { formRef, title, button, extraAnchor, inputFields } = formData;

  return (
    <MDBCol md="5" className="mt-5 ml-5">
      <MDBCard className="mt-5 log">
        <MDBCardBody className="mx-4">
          <div className="text-center">
            <h3 className="dark mb-5">
              <strong>{title}</strong>
            </h3>
          </div>
          <form ref={formRef}>
          {inputFields.map((input) => (
            <MDBInput
              key={input.id}
              label={input.label}
              group
              type={input.type}
              name={input.name}
              validate
              error="wrong"
              success="right"
            />
          ))}
          </form>
          {extraAnchor && (
            <p className="font-small blue-text d-flex justify-content-end pb-3">
              <a href={extraAnchor.href} className="blue-text ml-1">
                {extraAnchor.title}
              </a>
            </p>
          )}
          <div className="text-center mb-3">
            <MDBBtn
              type="button"
              color="blue"
              className=" rounded-pill text-white btn-block z-depth-1a"
              onClick={onButtonClick}
            >
              {button.title}
            </MDBBtn>
          </div>
          <div className="row my-3 d-flex justify-content-center"></div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
