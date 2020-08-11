import React from 'react';
import './style.scss';
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBBtn,
  MDBRow,
} from 'mdbreact';
import CreateStars from './StarRate';
const ProjectsPage = () => {
  const BookInfo = {
    authorName: 'kevin kwan',
    bookName: 'the shadows',
    bookType: 'A Novel',
    newPrice: '$30.00',
    oldPrice: '$32.75',
  };
  return (
    <MDBContainer className="">
      <MDBRow className="mt-5">
        <MDBCol sm="3" size="12" className="md-0 mb-4 ">
          <MDBCard
            className="card-image "
            style={{
              width: '250px',
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)',
            }}
          >
            <div className=" mt-5 py-5 px-4 ">
              <div className="mt-5 text-center">
                <h3 className="font-weight-bold mt-5 text-3xl">
                  <strong>Kevin Kwan</strong>
                </h3>
                <CreateStars />

                <p className="pb-3 text-xl">
                  {`${BookInfo.bookName}: ${BookInfo.bookType}`}
                </p>
              </div>
            </div>
            <div
              style={{
                width: '100%',
              }}
              className="rounded-bottom d-flex justify-content-around align-items-center absolute bottom-0 dark text-center text-white
              "
            >
              <p className="text-xl">{BookInfo.newPrice}</p>
              <p className="text-xl ml-3">
                <del>{BookInfo.oldPrice}</del>
              </p>
              <div className="ml-4">
                <MDBIcon size="2x" icon="cart-plus" />
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProjectsPage;
