import React, { useRef } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import '../loginPage/login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';
import { usersRef, auth } from './../../api/firebase';

function FormPage() {
  const formData = {
    title: 'Sign Up',
    button: { title: 'Sign Up', href: '#' },

    inputFields: [
      {
        id: '1',
        label: 'Full Name',
        type: 'text',
        name: 'fullName',
      },
      {
        id: '2',
        label: 'Your Email',
        type: 'email',
        name: 'email',
      },
      {
        id: '3',
        label: 'Your Password',
        type: 'password',
        name: 'password',
      },
    ],
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newUser = {
      fullName: form.get('fullName'),
      email: form.get('email'),
      password: form.get('password'),
    };
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      );
      const newUserFirebase = {
        uid: userCredential.user.uid,
        fullName: newUser.fullName,
        email: newUser.email,
      };
      await usersRef.doc(newUserFirebase.uid).set(newUserFirebase);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <MDBContainer>
      <MDBRow>
        <Form formData={formData} onSubmit={handleSignup} />
        <VerticalSeparated />
        <SocialMediaButtons />
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
