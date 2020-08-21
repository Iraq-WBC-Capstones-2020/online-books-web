import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import '../loginPage/login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';
import { usersRef, auth } from './../../api/firebase';
import { useTranslation } from 'react-i18next';

function FormPage() {
  const { t } = useTranslation();
  const formData = {
    title: t('signUpPage.signUp'),
    button: { title: t('signUpPage.signUp'), href: '#' },

    inputFields: [
      {
        id: '1',
        label: t('signUpPage.fullName'),
        type: 'text',
        name: 'fullName',
      },
      {
        id: '2',
        label: t('signUpPage.yourEmail'),
        type: 'email',
        name: 'email',
      },
      {
        id: '3',
        label: t('signUpPage.yourPassword'),
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
      <MDBRow className="mt-5">
        <MDBCol md="5" size="12">
          <Form formData={formData} onSubmit={handleSignup} />
        </MDBCol>
        <MDBCol size="2" className="d-none d-md-block">
          <VerticalSeparated />
        </MDBCol>
        <MDBCol md="5" size="12">
          <SocialMediaButtons />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
