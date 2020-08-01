import React from 'react';
//our style file with tailwind embedd in it
import './carsoulSection/StylecarsoulSection/myStyle.scss';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//style file for tailwind
import './carsoulSection/StylecarsoulSection/carsoulSection.css';
//main component
import Paragraph from './paragraph';
import CarsoulSection from './carsoulSection/carsoulSection';

function Main() {
  return (
    <>
      <Paragraph />
      
      <CarsoulSection />
    </>
  );
}

export default Main;
