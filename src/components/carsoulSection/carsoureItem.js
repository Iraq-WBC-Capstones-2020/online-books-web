import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
import { useTranslation } from 'react-i18next';

// create 4 items for the carsouel movement
function CarouselItems() {
  const { t } = useTranslation();
  let cards = [];

  let booksArray = [
    {
      cover:
        'http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22,333',
      id: 1,
    },
    {
      cover:
        'http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
      id: 2,
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
      id: 3,
    },
    {
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
      id: 4,
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
      id: 5,
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
      id: 6,
    },
  ];

  let createCards = () => {
    let specialBooks = [];
    specialBooks = booksArray.slice(0, 4);

    cards = specialBooks.map((book,index) => {
      return (
        <MDBCarouselItem
          itemId={index}
          key={book.id}
          className="mt-md-4 mb-md-4 pl-lg-3"
        >
          <MDBCard className="w-30 shadow-none" wide>
            <MDBContainer className="w-full">
              <MDBRow className="p-0">
                <MDBCol size="12" md="4" lg="5" className="p-0">
                  <img
                    className="imageCardCarsouel"
                    src={`${book.cover}`}
                    alt="cover book"
                  />
                </MDBCol>

                <MDBCol md="1" lg="1"></MDBCol>

                <MDBCol md="7" lg="6" size="12" className="my-auto">
                  <MDBCardBody className="p-lg-0 text-center text-md-left text-lg-left mx-auto">
                    <div>
                      <h1 className="fontHeader1 mb-0 font-weight-normal  text-2xl">
                        {' '}
                        {`${book.authorName}`}{' '}
                      </h1>
                    </div>

                    <MDBCardText>
                      <p className="mb-1 fontHeader2 font-normal font-weight-normal ">{`${book.bookName}`}</p>
                      <p className="mb-1 parg1 font-weight-normal">{`${book.type}`}</p>
                      <p className="font-black fontPrice font-weight-normal ">{`${book.price}`}</p>

                      {/* create stars */}
                      <div className="mb-4">
                        <div className="inline-block mr-2">
                          {createStars(book.rate)} ({book.views}) views
                        </div>
                      </div>
                    </MDBCardText>

                    <button className="buttomText text-center mycolorPink w-5/6 shadow-md  hover:shadow-lg h-10 text-black font-bold leading-3 rounded-full">
                      {t('addtocart')}
                    </button>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCard>
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
