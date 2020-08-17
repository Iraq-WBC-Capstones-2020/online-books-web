import React from 'react';
import './login.scss';
import Form from '../../components/signinSignup/Form';
import SocialMediaButtons from '../../components/signinSignup/SocialMediaButtons';
import { MDBContainer, MDBRow } from 'mdbreact';
import VerticalSeparated from '../../components/signinSignup/VerticalSeparated';
import { auth } from './../../api/firebase';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

function FormPage() {
  const { t } = useTranslation();
  const history = useHistory();
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
      <MDBRow>
        <Form formData={formData} onSubmit={handleLogin} />
        <VerticalSeparated />
        <SocialMediaButtons />
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
