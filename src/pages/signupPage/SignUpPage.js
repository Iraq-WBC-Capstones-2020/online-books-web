import React from 'react';
import '../loginPage/login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import { MDBContainer, MDBRow } from 'mdbreact';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';

function SignUpPage() {
  const formData = {
    title: 'Sign up',
    button: { title: 'Sign up', href: '#' },

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

export default SignUpPage;
