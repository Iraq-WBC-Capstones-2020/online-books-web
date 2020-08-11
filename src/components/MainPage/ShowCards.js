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
    <MDBContainer>
      <MDBRow className="mt-5">
        <MDBCol sm="3" size="12">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)',
            }}
          >
            <div className=" text-center position text-white">
              <h3 className="font-weight-bold mt-2 text-xl">
                <strong>Kevin Kwan</strong>
              </h3>
              <CreateStars />

              <p className="pb-3 text-xl">
                {`${BookInfo.bookName}: ${BookInfo.bookType}`}
              </p>
            </div>
            <div
              style={{
                width: '100%',
              }}
              className="d-flex justify-content-around align-items-center absolute bottom-0 dark text-center text-white"
            >
              <p className="text-xl">{BookInfo.newPrice}</p>
              <p className="text-xl ">
                <del>{BookInfo.oldPrice}</del>
              </p>
              <div className=" border">
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
