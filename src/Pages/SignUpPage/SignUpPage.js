import React from './node_modules/react';
import { MDBContainer, MDBRow } from './node_modules/mdbreact';
import '../loginPage/login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';

function FormPage() {
  const formData = {
    title: 'Sign Up',
    button: { title: 'Sign Up', href: '#' },

    inputFields: [
      {
        id: '1',
        label: 'Full Name',
        type: 'text',
      },
      {
        id: '2',
        label: 'Your Email',
        type: 'email',
      },
      {
        id: '3',
        label: 'Your Password',
        type: 'password',
      },
    ],
  };

  return (
    <MDBContainer>
      <MDBRow>
        <Form formData={formData} />
        <VerticalSeparated />
        <SocialMediaButtons />
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
