import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
//import {ButtomText} from './../statmentOfWebsite'
//console.log(ButtomText.addToCart)

// create 4 items for carsouel movement
function CarouselItems() {
  let cards = [];
  let booksArray = [
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22,333',
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
    },
  ];

  let createCards = () => {
    let specialBooks = [];
    let i = 0;
    specialBooks = booksArray.slice(0, 4);

    cards = specialBooks.map((book) => {
      i++;

      return (
        <MDBCarouselItem itemId={`${i}`} className="mt-md-1 mb-md-1">
          {/*src={`${book.cover}`} */}

          <MDBContainer className="bg-white mt-3 mb-3">
            <MDBRow className="p-0">
              <MDBCol size="5" className="p-0">
                <img
                  className="img-fluid"
                  src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
                  alt="cover book"
                />
              </MDBCol>
              <MDBCol size="7" className="d-flex justify-content-around">
                <MDBCardBody className="p-0 text-left">
                  <MDBCardTitle className="fontHeader1 mb-0 font-weight-bold ">
                    {`${book.authorName}`}
                  </MDBCardTitle>

                  <MDBCardText>
                    <p className="mb-0 fontHeader2">{`${book.bookName}`}</p>
                    <p className="mb-1 parg1 ">{`${book.type}`}</p>
                    <p className="font-black mb-2">{`${book.price}`}</p>

                    {/* create stars */}
                    <div className="mb-4">
                      <div className="inline-block mr-2">
                        {createStars(book.rate)} ({book.views}) views
                      </div>
                    </div>
                  </MDBCardText>

                  <button className="buttomText mycolorPink  parg1 hover:shadow-lg  h-8 text-black font-bold leading-3 w-40 py-2 px-4 rounded-full">
                    {/*`${ButtonText.addToCart}`*/}Add To Cart
                  </button>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCarouselItem>
      );
    });
    return cards;
  };
  let createStars = (rate) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      i <= rate
        ? stars.push(<icon className="fa fa-star text-yellow-300 mr-1 "></icon>)
        : stars.push(
            <icon className="fa fa-star text-yellow-300 mr-1 font-light"></icon>
          );
    }
    return stars;
  };

  return <>{createCards()}</>;
}

export default CarouselItems;
