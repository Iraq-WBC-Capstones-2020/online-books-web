import React, { useRef } from 'react';
import './login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import { MDBContainer, MDBRow } from 'mdbreact';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';
import { auth } from './../../api/firebase';

function FormPage() {
  const formRef = useRef();

  const formData = {
    formRef: formRef,
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
        name: 'email',
      },
      {
        id: '2',
        label: 'Your Password',
        type: 'password',
        name: 'password',
      },
    ],
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        form.get('email'),
        form.get('password')
      );
      // if (userCredential.user) onClose();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <Form formData={formData} onButtonClick={handleLogin} />
        <VerticalSeparated />
        <SocialMediaButtons />
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
