import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

export default function Form({ formData, onButtonClick }) {
  const { formRef, title, button, extraAnchor, inputFields } = formData;

  return (
    <MDBCol md="5" className="mt-5 ml-5">
      <MDBCard className="mt-5 log z-depth-0">
        <MDBCardBody className="mx-4">
          <div className="text-center bg-gray-400">
            <h3 className="mb-5">
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
            <p className="d-flex justify-content-end pb-3">
              <a href={extraAnchor.href} className="ml-1">
                {extraAnchor.title}
              </a>
            </p>
          )}
          <div className="text-center mb-3">
            <MDBBtn
              type="button"
              color="blue"
<<<<<<< HEAD
              className=" rounded-pill text-white btn-block z-depth-1a"
              onClick={onButtonClick}
=======
              className="rounded-pill text-white z-depth-1a w-48"
>>>>>>> d52d351ed8966b73579226c880a0d492c91e4556
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
