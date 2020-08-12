import React from 'react';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//main component
import Paragraph from '../../components/CarouselSection/paragraph';
import CarouselSection from '../../components/CarouselSection/CarsouelSection';
function Main() {
  return (
    <>
      <Paragraph />
      <CarouselSection />
    </>
  );
}

export default Main;
