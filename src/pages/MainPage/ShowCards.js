import React from './node_modules/react';
import './style.scss';
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBRow,
} from './node_modules/mdbreact';
import CreateStars from './StarRate';
const ProjectsPage = () => {
  const BookInfo = {
    authorName: 'kevin kwan',
    bookName: 'The shadows',
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
              <h3 className="font-weight-normal mt-2 text-2xl ">
                {BookInfo.authorName}
              </h3>
              <CreateStars />

              <p className="pb-3 text-xl grayColor">
                {`${BookInfo.bookName}: ${BookInfo.bookType}`}
              </p>
            </div>

            <div className="d-flex background justify-content-around align-items-center absolute bottom-0 dark text-center text-white">
              <p className="text-2xl price">{BookInfo.newPrice}</p>
              <p className="text-xl grayColor">
                <del>{BookInfo.oldPrice}</del>
              </p>
              <div>
                <MDBIcon className="icon p-2" icon="cart-plus" />
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ProjectsPage;
