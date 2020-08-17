import React from 'react';
import { MDBCard } from 'mdbreact';
import { useTranslation } from 'react-i18next';
function ContactInformation() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-end">
        <MDBCard
          color="blue darken-3"
          className=" w-75 h-100 flex justify-center"
        >
          <h1 className=" my-4 pb-2 text-center white-text text-2xl">
            {t('contactUsPage.contactUs')}
          </h1>
          <div
            className="flex justify-start animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110 ml-10 m-4"
          >
            <i className="fas fa-map-marker-alt text-4xl white-text ml-24"></i>
            <p className="text-gray-400 ml-4">
              A108 Adam Street
              <br /> New York NY 535022
            </p>
          </div>
          <div
            className="flex justify-start animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  m-4"
          >
            <i className="fas fa-envelope pr-2 text-4xl white-text ml-24"></i>
            <p className="text-gray-400 ml-2">
              contact@example.com
              <br />
              info@example.com
            </p>
          </div>
          <div
            className="flex justify-start animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  m-4"
          >
            <i className="fas fa-phone pr-2 text-4xl white-text ml-24"></i>
            <p className="text-gray-400 ml-2 mb-10">
              + 01 234 567 89 <br />
              +1 5589 55488 51
            </p>
          </div>
        </MDBCard>
      </div>
    </>
  );
}

export default ContactInformation;
