import React from 'react';
import pic from './pic.png';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

function Details() {
  return (
    <MDBContainer className="bg-gray-100">
      <MDBRow>
        <MDBCol lg="5">
          <img src={pic} alt="artwork of a girl" />
        </MDBCol>
        <MDBCol>
          <div className="mt-40">
            <h3 className="font-weight-bold  p-0  text-3xl ml-1">
              <strong>About us :</strong>
            </h3>
            <hr className="col-lg-2 h-2 bg-blue-500  " />
            <p className="mt-2 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content <br />
              of a page when looking at its layout. The point of using Lorem
              Ipsum is that it
              <br /> has a more-or-less normal distribution of letters, as
              opposed to using <br />
              Content hereh. It is a long established fact that a reader will be
              distracted by the <br />
              readable content of a page when looking at its layout. The point
              of using Lorem <br />
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content hereh.
            </p>

            <div className="">
              <button className="rounded-full h-8 w-1/9 mt-3 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 ...">
                <span className="text-white">Read more</span>
              </button>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Details;
