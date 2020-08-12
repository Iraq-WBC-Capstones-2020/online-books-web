import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';
import { useTranslation } from 'react-i18next';
import CreateStars from './CreateStars';

// create 4 items for the carsouel movement
function CarouselItems({ activeCard, handelChangeCard }) {
  const { t } = useTranslation();

  const booksArray = [
    {
      cover:
        'http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.27,
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
      rate: 3.5,
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
      rate: 3.76,
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
      rate: 3.73,
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
      rate: 3.46,
      views: '22k',
      id: 6,
    },
  ];

  return (
    <div>
      {booksArray.slice(0, 4).map((book, index) => (
        <MDBCarouselItem
          itemId={index}
          key={book.id}
          className={`
            ${activeCard === index ? 'active-card' : 'inactive-card'}
             mt-md-4 mb-md-4 pl-lg-3`}
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

                <MDBCol md="7" lg="6" size="12" className="mb-0 mt-auto">
                  <MDBCardBody className="p-lg-0 text-center text-md-left text-lg-left mx-auto mt-md-2">
                    <div>
                      <h1 className="fontHeader1 mb-0 font-weight-normal  text-2xl">
                        {book.authorName}
                      </h1>
                    </div>
                    <MDBCardText>
                      <p className="mb-1 fontHeader2 font-normal font-weight-normal ">{`${book.bookName}`}</p>
                      <p className="mb-1 parg1 font-weight-normal">
                        {book.type}
                      </p>
                      <p className="font-black fontPrice font-weight-normal ">{`${book.price}`}</p>

                      <div className="mb-3">
                        <div className="inline-block mr-2">
                          <CreateStars rate={book.rate} />
                          {'  '}
                          {book.views} views
                        </div>
                      </div>
                    </MDBCardText>

                    <button className="buttomText text-center mycolorPink w-5/6 shadow-md  hover:shadow-lg h-10 text-black font-bold leading-3 rounded-full">
                      {t('carsouelSection.addtocart')}
                    </button>
                  </MDBCardBody>
                  {/*arrow button// d-flex justify-content-end */}
                  <div className="h-16 relative">
                    <div className="absolute bottom-0 right-0">
                      <MDBBtn
                        color=""
                        className="shadow-sm p-0 h-8"
                        onClick={() => handelChangeCard(true)}
                      >
                        <MDBIcon
                          icon="chevron-left"
                          size="lg"
                          className="px-2 py-1"
                        />
                      </MDBBtn>
                      <MDBBtn
                        color=""
                        className="shadow-sm p-0 h-8"
                        onClick={() => handelChangeCard(false)}
                      >
                        <MDBIcon
                          icon="chevron-right"
                          size="lg"
                          className="px-2 py-1"
                        />
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCard>
        </MDBCarouselItem>
      ))}
    </div>
  );
}
CarouselItems.propTypes = {
  activeCard: PropTypes.number,
  handelChangeCard: PropTypes.func,
};
export default CarouselItems;
