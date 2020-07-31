import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBCarouselItem,
} from 'mdbreact';

// create 4 items for carsouel movement
function CarouselItems() {
  let cards = [];

  let createCards = () => {
    cards = [];
    for (let i = 1; i <= 4; i++) {
      cards.push(
        <MDBCarouselItem itemId={`${i}`} className="mt-md-1 mb-md-">
          <MDBCard
            className="md:w-40 lg:w-56 "
            wide
            cascade
            className="d-flex flex-row mt-md-3 mb-md-3 shadow-none"
          >
            <MDBView cascade>
              <MDBCardImage
                className="img-fluid w-48"
                src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
                alt="Card cap"
              />
            </MDBView>

            <MDBCardBody cascade className="text-left p-5">
              <MDBCardTitle className="fontHeader1 mb-0 font-weight-bold ">
                Alice Mayer
              </MDBCardTitle>

              <MDBCardText>
                <p className="mb-0 fontHeader2">The Shadows: A Novel</p>
                <p className="mb-1 parg1 ">formate:Hardback</p>
                <p className="font-black mb-2">$31.75</p>

                {/* create stars */}
                <div className="mb-4">
                  <div className="inline-block mr-2">
                    {createStars(3)} (12,999){' '}
                  </div>
                </div>
              </MDBCardText>

              <button class="buttomText mycolorPink  parg1 hover:shadow-lg  h-8 text-black font-bold leading-3 w-40 py-2 px-4 rounded-full">
                Add To Cart
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCarouselItem>
      );
    }
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
