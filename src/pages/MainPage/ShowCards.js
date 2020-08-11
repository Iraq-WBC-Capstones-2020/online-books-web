import React from 'react';
import './style.scss';
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBRow } from 'mdbreact';
import CreateStars from './StarRate';
const ShowCards = () => {
  const BookInfo = [
    {
      id: '1',
      authorName: 'kevin kwan',
      bookName: 'The shadows',
      bookType: 'A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
    },
    {
      id: '2',
      authorName: 'Ahemd tofeq',
      bookName: 'Mind withour body',
      bookType: 'A Novel',
      newPrice: '$10.00',
      oldPrice: '$15.75',
    },
    {
      id: '3',
      authorName: 'khwla hamdy',
      bookName: 'to stay',
      bookType: 'A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
    },
  ];
  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        {BookInfo.map((book) => {
          return (
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
                    {book.authorName}
                  </h3>
                  <CreateStars />

                  <p className="pb-3 text-xl grayColor">
                    {`${book.bookName}: ${book.bookType}`}
                  </p>
                </div>

                <div className="d-flex background justify-content-around align-items-center absolute bottom-0 dark text-center text-white">
                  <p className="text-2xl price">{book.newPrice}</p>
                  <p className="text-xl grayColor">
                    <del>{book.oldPrice}</del>
                  </p>
                  <div>
                    <MDBIcon className="icon p-2" icon="cart-plus" />
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default ShowCards;
