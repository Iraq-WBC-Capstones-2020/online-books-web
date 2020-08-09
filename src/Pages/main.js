import React from 'react';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//main component
import Paragraph from '../components/paragraph';
import CarsoulSection from '../components/carsoulSection/CarsoulSection';
function Main() {
  return (
    <>
      <Paragraph />
      <CarsoulSection />
    </>
  );
}

export default Main;
