import React, { useState, useEffect, useRef } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
import './StyleCarouselSection/CarouselSection.scss';
import CarouselItems from './CarouselItem';
import GrideCarousel from './GridCarousel';
import HighlightedSectionLabel from './HighlightedSectionLabel';


function CarsouelSection() {
  const [activeCardItem, setActiveCardItemState] = useState(0);
  const timerId = useRef();
  const firstCardIndex = 0;
  const lastCardIndex = 3;

  useEffect(() => (timerId.current = resetTimer()), []);
  let resetTimer = () => {
    return setTimeout(() => handelChangeCard(true, 'unClicked'), 5000);
  };

  let handelChangeCard = (increase, button) => {
    if (increase) {
      button === 'unClicked'
        ? setActiveCardItemState((oldCard) =>
            oldCard === lastCardIndex ? firstCardIndex : oldCard + 1
          )
        : setActiveCardItemState((oldCard) =>
            oldCard === lastCardIndex ? oldCard : oldCard + 1
          );
    } else {
      setActiveCardItemState((oldCard) =>
        oldCard === firstCardIndex ? oldCard : oldCard - 1
      );
    }
    clearTimeout(timerId.current);
    timerId.current = resetTimer();
  };
  return (
    <>
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="11" lg="10" xl="8">
            <HighlightedSectionLabel text="best sellers in books" />

            <MDBContainer fluid className="bgGray ">
              <MDBRow>
                <MDBCol md="12" lg="8" xl="8">
                  <MDBCarousel
                    activeItem={activeCardItem}
                    length={4}
                    showControls={false}
                    showIndicators={false}
                    slide
                  >
                    <MDBCarouselInner>
                      <CarouselItems
                        handelChangeCard={handelChangeCard}
                        activeCard={activeCardItem}
                      />
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBCol>

                <MDBCol
                  xs="12"
                  sm="12"
                  md="12"
                  lg="4"
                  xl="4"
                  className="mt-3 mb-md-0 mt-md-0 mb-lg-4 mt-lg-4  "
                >
                  {/* gride for the new release and best sellers  */}
                  <GrideCarousel activeCardItem={activeCardItem} />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default CarsouelSection;
