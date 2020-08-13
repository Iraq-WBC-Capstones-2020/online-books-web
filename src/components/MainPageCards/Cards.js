import React from 'react';
import CreateStars from './StarRate';
import PropTypes from 'prop-types';
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBCard } from 'mdbreact';
function Cards({ book }) {
  const { id, authorName, bookName, bookType, newPrice, oldPrice, rate } = book;
  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        <MDBCol sm="3" size="12" key={id}>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)',
            }}
          >
            <div className=" text-center position text-white">
              <h3 className="font-weight-normal mt-2 text-2xl">{authorName}</h3>
              <CreateStars rate={rate} />

              <p className="pb-3 text-xl grayColor">
                {`${bookName}: ${bookType}`}
              </p>
            </div>

            <div className="d-flex background justify-content-around align-items-center absolute bottom-0 dark text-center text-white">
              <p className="text-2xl price">{newPrice}</p>
              <p className="text-xl grayColor">
                <del>{oldPrice}</del>
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
}
Cards.propTypes = {
  BookInf: PropTypes.object,
};
export default Cards;
