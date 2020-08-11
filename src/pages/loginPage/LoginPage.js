import React from 'react';
import './login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import {
  MDBContainer,
  MDBRow,
} from 'mdbreact';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';

function FormPage() {

  const formData = {
    title: 'Sign in',
    button: { title: 'Sign in', href: '#' },
    extraAnchor: {
      title: 'Forgot Password?',
      href: '#',
    },
    inputFields: [
      {
        id: '1',
        label: 'Your Email',
        type: 'email',
      },
      {
        id: '2',
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
