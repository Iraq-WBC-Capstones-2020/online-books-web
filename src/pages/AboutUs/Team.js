import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBIcon } from 'mdbreact';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import { useTranslation } from 'react-i18next';

function TeamMembersInformation() {
  const { t } = useTranslation();
  let team = [
    {
      memeber: {
        name: t('saraAltaee'),
        bio: t('saraBio'),
        specailty: t('specailty'),
        pic: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg',
      },
    },
    {
      memeber: {
        name: t('neven'),
        bio: t('nevenBio'),
        specailty: t('specailty'),
        pic: pic1,
      },
    },
    {
      memeber: {
        name: t('dunia'),
        bio: t('duniaBio'),
        specailty: t('specailty'),
        pic: pic2,
      },
    },
    {
      memeber: {
        name: t('qays'),
        bio: t('qaysBio'),
        specailty: t('specailty'),
        pic: pic3,
      },
    },
    {
      memeber: {
        name: t('zeena'),
        bio: t('zeenaBio'),
        specailty: t('specailty'),
        pic: pic4,
      },
    },
    {
      memeber: {
        name: t('zainab'),
        bio: t('zainabBio'),
        specailty: t('specailty'),
        pic: pic5,
      },
    },
  ];

  return (
    <>
      <MDBCol>
        <div className="text-center">
          <h1 className=" text-3xl mt-10 font-weight-bold ">
            The Team <MDBIcon icon="users blue-text" />
          </h1>
          <br />
          <div className="flex justify-center">
            <hr className=" w-48" />
          </div>
        </div>
      </MDBCol>
      <div className=" row m-10 flex justify-center mt-20">
        {team.map((memeber) => (
          <MDBCard
            className=" animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  content-start max-w-xs m-5 bg-blue-100 "
          >
            <img
              style={{ width: '9rem', marginTop: '-25%' }}
              className=" rounded-circle  img-fluid z-depth-1 mx-auto"
              src={memeber.memeber.pic}
              alt={memeber.memeber.name}
              wave
            ></img>
            <MDBCardBody className="m-1">
              <h4 className="card-title text-center font-sans">
                {memeber.memeber.name}
                <span className="text-blue-700">
                  &nbsp; | {memeber.memeber.specailty}
                </span>
              </h4>
              <p className=" text-gray-700 font-sans">{memeber.memeber.bio}</p>
              <div className="flex justify-center m-2">
                <MDBIcon>
                  <a
                    href="#"
                    className="fab fa-facebook-square fa-2x indigo-text transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
                  ></a>
                </MDBIcon>
                <MDBIcon>
                  <a
                    href="#"
                    className="fab fa-twitter pr-2 fa-2x blue-text ml-1 transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
                  ></a>
                </MDBIcon>
                <MDBIcon>
                  <a
                    href="#"
                    className="fab fa-github-alt pr-2 fa-2x indigo-text transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
                  ></a>
                </MDBIcon>
                <MDBIcon>
                  <a
                    href="#"
                    className="fab fa-linkedin pr-2 fa-2x blue-text transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110"
                  ></a>
                </MDBIcon>
              </div>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </>
  );
}

export default TeamMembersInformation;
