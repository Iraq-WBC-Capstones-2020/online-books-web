import React from 'react';
import './login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';
import { auth } from './../../api/firebase';
import { useTranslation } from 'react-i18next';

function FormPage() {
  const { t } = useTranslation();
  const formData = {
    title: t('signInPage.signIn'),
    button: { title: t('signInPage.signIn') },
    extraAnchor: {
      title: t('signInPage.forgotPassword'),
      href: '#',
    },
    inputFields: [
      {
        id: '1',
        label: t('signInPage.yourEmail'),
        type: 'email',
        name: 'email',
      },
      {
        id: '2',
        label: t('signInPage.yourPassword'),
        type: 'password',
        name: 'password',
      },
    ],
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await auth.signInWithEmailAndPassword(
        form.get('email'),
        form.get('password')
      );
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        <MDBCol md="5" size="12">
          <Form formData={formData} onSubmit={handleLogin} />
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
